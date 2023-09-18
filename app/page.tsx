'use client'

import styles from '@/assets/styles/page.module.scss'
import Button from '@/components/ui/button/button'
import useButtonStore from '@/store/buttonStore'
import { buttons } from '@/configs/constants'
import Card from '@/components/ui/card/card'
import db from '@/api/db.json'
import cn from 'classnames'
export default function Home() {
	const { activeButton, setActiveButton } = useButtonStore()
	const isListActive = activeButton === 'List'
	return (
		<main className={styles.main}>
			<div className={styles.buttonbox}>
				{buttons.map((button, index) => (
					<Button
						key={button.name + index}
						name={button.name}
						isActive={activeButton === button.name}
						onClick={() => setActiveButton(button.name)}
					/>
				))}
			</div>
			<div
				className={cn(styles.cardbox, {
					[styles.cardboxtiles]: !isListActive
				})}
			>
				{db.map((user, index) => (
					<Card
						key={index}
						fullName={user.fullName}
						email={user.email}
						phone={user.phone}
						activeButton={activeButton}
					/>
				))}
			</div>
		</main>
	)
}
