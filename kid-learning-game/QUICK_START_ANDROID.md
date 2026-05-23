# 🚀 Quick Start - Test in Android Emulator (15 minutes)

## Step 1: Install Android Studio
1. Download: https://developer.android.com/studio
2. Install with default settings
3. Open Android Studio → **More Actions** → **SDK Manager**
4. Install **Android SDK Platform 34** and **Android SDK Build-Tools**

## Step 2: Create Android Emulator
1. Android Studio → **More Actions** → **Device Manager**
2. Click **Create Device**
3. Choose **Pixel 5** → **Next**
4. Download **Tiramisu (API 33)** → **Next**
5. Click **Finish**
6. Close Android Studio (for now)

## Step 3: Install Capacitor (Run in PowerShell)
```powershell
cd "c:\Kpritam\Thinking\GamePlay\1\kid-learning-game"

# Install dependencies
npm install

# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# Initialize Capacitor
npx cap init "PlayLearn Island" "com.playlearn.island" --web-dir="."

# Add Android platform
npx cap add android

# Sync files
npx cap sync
```

## Step 4: Update index.html
Add this line **before closing `</body>` tag**:
```html
<script>
  if (typeof Capacitor !== 'undefined') {
    console.log('Running as mobile app');
  }
</script>
```

## Step 5: Run in Emulator
```powershell
# This will open Android Studio and install the app
npx cap open android
```

**In Android Studio:**
1. Wait for Gradle sync to complete (bottom status bar)
2. Click green **Run ▶️** button at top
3. Wait for emulator to start (~2 minutes first time)
4. App will install and launch automatically! 🎉

## Expected Result
You'll see your PlayLearn Island app running in the Android emulator just like a real phone!

## Common Issues

### Issue: "Android SDK not found"
**Fix:**
```powershell
# Set environment variable
$env:ANDROID_HOME = "C:\Users\kumar.pritam\AppData\Local\Android\Sdk"
```

### Issue: "Emulator won't start"
**Fix:**
- Enable **Hyper-V** in Windows Features
- Or Enable **Intel HAXM** in SDK Manager

### Issue: "Gradle build failed"
**Fix:**
```powershell
cd android
.\gradlew clean
.\gradlew assembleDebug
```

## Video Tutorial Reference
- Android Studio Setup: https://www.youtube.com/watch?v=0zx_eFyHRU0
- Capacitor Android: https://capacitorjs.com/docs/android

## Next: Test on Real Device

### Enable USB Debugging
1. Phone Settings → **About Phone**
2. Tap **Build Number** 7 times (enables Developer Options)
3. Settings → **Developer Options** → Enable **USB Debugging**
4. Connect phone via USB

### Run on Device
```powershell
# List connected devices
adb devices

# Run app
npx cap run android --target=<device-id>
```

---

**Got it working? Great!** Now explore the full roadmap in [MOBILE_APP_ROADMAP.md](MOBILE_APP_ROADMAP.md) 🚀

**Stuck?** Let me know the error message and I'll help!
