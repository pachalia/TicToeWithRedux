import { useAppSelector } from '../../../hooks/hooks.ts';

export const InformationLayout: React.FC = () => {
	const isDraw = useAppSelector((state) => state.isDraw);
	const isGameEnded = useAppSelector((state) => state.isGameEnded);
	const currentPlayer = useAppSelector((state) => state.currentPlayer);

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
