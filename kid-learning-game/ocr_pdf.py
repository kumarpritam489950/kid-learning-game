import fitz
import subprocess
import os
import sys

# Save pages as BMP for Windows OCR via PowerShell
doc = fitz.open(r'c:\Kpritam\Thinking\GamePlay\1\kid-learning-game\MATH.pdf')
total = len(doc)
print(f"Total pages: {total}")

out_dir = r'c:\Kpritam\Thinking\GamePlay\1\kid-learning-game\assets\images\ocr_pages'
os.makedirs(out_dir, exist_ok=True)

for i in range(total):
    page = doc[i]
    mat = fitz.Matrix(3, 3)  # higher DPI for better OCR
    pix = page.get_pixmap(matrix=mat)
    pix.save(os.path.join(out_dir, f'page_{i+1:03d}.png'))

doc.close()
print("Images saved. Running OCR...")

# PowerShell OCR script
ps_script = r'''
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType=WindowsRuntime]

$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.IsGenericType
})[0]

function Await {
    param($WinRtTask, $ResultType)
    $method = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $method.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    $netTask.Result
}

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
$imgDir = 'c:\Kpritam\Thinking\GamePlay\1\kid-learning-game\assets\images\ocr_pages'
$files = Get-ChildItem $imgDir -Filter '*.png' | Sort-Object Name

foreach ($f in $files) {
    try {
        $file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($f.FullName)) ([Windows.Storage.StorageFile])
        $stream = Await ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
        $decoder = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
        $bitmap = Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
        $result = Await ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
        $t = $result.Text.Trim()
        if ($t) {
            Write-Output "=== $($f.Name) ==="
            Write-Output $t
            Write-Output ""
        }
    } catch {
        Write-Output "Error on $($f.Name): $_"
    }
}
'''

with open(r'c:\Kpritam\Thinking\GamePlay\1\kid-learning-game\run_ocr.ps1', 'w') as f:
    f.write(ps_script)

result = subprocess.run(
    ['powershell', '-ExecutionPolicy', 'Bypass', '-File',
     r'c:\Kpritam\Thinking\GamePlay\1\kid-learning-game\run_ocr.ps1'],
    capture_output=True, text=True, timeout=300
)

print(result.stdout)
if result.stderr:
    print("STDERR:", result.stderr[:500])
