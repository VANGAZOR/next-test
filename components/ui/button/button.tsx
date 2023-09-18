import { FC } from 'react'
import { ButtonProps } from './button.interface'
import styles from '@/assets/styles/components/button.module.scss'

const Button: FC<ButtonProps> = ({ name, isActive, onClick }) => {
	return (
		<button
			className={styles.button}
			onClick={() => onClick()}
			disabled={isActive}
		>
			{name}
		</button>
	)
}

export default Button
