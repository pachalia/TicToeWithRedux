import { FieldLayout } from './FieldLayout/FieldLayout.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';

export const Field: React.FC = () => {
	const { currentPlayer, field } = useAppSelector((state) => state);
	const dispatch = useAppDispatch();
	const clickHandler = (i: number) => {
		if (field[i] === '') {
			console.log(123);
			const array = field;
			array[i] = currentPlayer;
			dispatch({ type: 'FIELD', payload: array });
		}
	};
	return <FieldLayout clickHandler={clickHandler} />;
};
