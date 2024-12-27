import { useAppSelector } from '../../../hooks/hooks.ts';

export const InformationLayout: React.FC = () => {
	const { isDraw, isGameEnded, currentPlayer } = useAppSelector((state) => state);

	return (
		<>
			{isDraw && <h1 style={{ textAlign: 'center' }}>Ничья</h1>}
			{!isDraw && isGameEnded && (
				<h1 style={{ textAlign: 'center' }}>Победа: {currentPlayer}</h1>
			)}
			{!isDraw && !isGameEnded && (
				<h1 style={{ textAlign: 'center' }}>Ходит: {currentPlayer}</h1>
			)}
		</>
	);
};
