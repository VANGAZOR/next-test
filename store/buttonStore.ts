import { create } from 'zustand'

interface ButtonState {
	activeButton: string
	setActiveButton: (buttonName: string) => void
}

const useButtonStore = create<ButtonState>(set => ({
	activeButton: 'List',
	setActiveButton: buttonName => {
		set(state => {
			if (state.activeButton !== buttonName) {
				return { activeButton: buttonName }
			}
			return state
		})
	}
}))

export default useButtonStore
