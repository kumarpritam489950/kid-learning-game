import { Navigate, useNavigate, useParams } from 'react-router';
import { GameHost } from './GameHost';
import { getGameById } from './registry';

export function GameView() {
  const { gameId = '' } = useParams();
  const navigate = useNavigate();
  const game = getGameById(gameId);

  if (!game) {
    return <Navigate to="/fun" replace />;
  }

  return <GameHost game={game} onExit={() => navigate('/fun')} />;
}
