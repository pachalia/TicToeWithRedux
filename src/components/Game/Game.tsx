import { GameLayout } from './GameLayout/GameLayout.tsx';
import { isWin } from '../../utils/utils.ts';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';

export type player = 'X' | '0';
export type field = player | '';

export const Game: React.FC = () => {
	const currentPlayer = useAppSelector((state) => state.currentPlayer);
	const isGameEnded = useAppSelector((state) => state.isGameEnded);
	const field = useAppSelector((state) => state.field);
	const dispatch = useAppDispatch();

	useEffect(() => {
		!field.includes('') && isWin(field, currentPlayer)
			? dispatch({ type: 'isGameEnded', payload: true })
			: null;
		if (!field.includes('') && !isWin(field, currentPlayer)) {
			dispatch({ type: 'isGameEnded', payload: true });
			dispatch({ type: 'isDraw', payload: true });
		}
		isWin(field, currentPlayer)
			? dispatch({ type: 'isGameEnded', payload: true })
			: dispatch({
					type: 'CURRENT_PLAYER',
					payload: currentPlayer === 'X' ? '0' : 'X',
				});
	}, [field]);

	const clickHandler = () => {
		dispatch({ type: 'RESTART_GAME' });
	};
	return (
		<>
			<GameLayout />
			{isGameEnded && (
				<button
					onClick={clickHandler}
					style={{ margin: '30px auto', display: 'block' }}
				>
					Начать сначала
				</button>
			)}
		</>
	);
};
