import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boiler from './Boiler'
import { Header } from './header/Header'
import { Landing } from './landing/Landing'
import { About } from './about/About'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<div className='content'>
				<Landing />
				<About />
				<Boiler />
				<Boiler />
				<Boiler />
				<Boiler />
				<Boiler />
			</div>
		</>
	)
}

export default App
