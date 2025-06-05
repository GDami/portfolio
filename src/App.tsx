import { useState } from 'react'
import './App.css'
import Boiler from './Boiler'
import { Header } from './header/Header'
import { Landing } from './landing/Landing'
import { About } from './about/About'




function App() {

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
