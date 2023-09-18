import styles from '@/assets/styles/components/card.module.scss'
import { CardProps } from './card.interface'
import cn from 'classnames'
import { FC } from 'react'

const Card: FC<CardProps> = ({ fullName, email, phone, activeButton }) => {
	return (
		<div
			className={cn(styles.card, {
				[styles.cardlist]: activeButton === 'List',
				[styles.cardtiles]: activeButton === 'Tiles'
			})}
		>
			<p>{fullName}</p>
			<p>{email}</p>
			<p>{phone}</p>
		</div>
	)
}

export default Card
