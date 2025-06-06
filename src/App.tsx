import './App.css'
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
			</div>
		</>
	)
}

export default App
