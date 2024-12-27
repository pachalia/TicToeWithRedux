import { FieldLayout } from './FieldLayout/FieldLayout.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';

export const Field: React.FC = () => {
	const currentPlayer = useAppSelector((state) => state.currentPlayer);
	const field = useAppSelector((state) => state.field);
	const dispatch = useAppDispatch();
	const clickHandler = (i: number) => {
		if (field[i] === '') {
			const array = field;
			array[i] = currentPlayer;
			dispatch({ type: 'FIELD', payload: array });
		}
	};
	return <FieldLayout clickHandler={clickHandler} />;
};
