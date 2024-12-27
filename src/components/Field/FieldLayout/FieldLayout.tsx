import { IFieldLayoutProps } from '../../../interfaces/props.interface.ts';
import styles from './field.layout.module.css';
import { useAppSelector } from '../../../hooks/hooks.ts';

export const FieldLayout: React.FC<IFieldLayoutProps> = ({ clickHandler }) => {
	const field = useAppSelector((state) => state.field);
	const isGameEnded = useAppSelector((state) => state.isGameEnded);

	return (
		<>
			<div className={styles.container}>
				{field.map((val, i) => (
					<div className={styles.cells} key={i}>
						<button
							className={styles.button}
							onClick={() => clickHandler(i)}
							disabled={isGameEnded}
						>
							{val}
						</button>
					</div>
				))}
			</div>
		</>
	);
};
