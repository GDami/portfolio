import './App.css'
import { Header } from './header/Header'
import { Landing } from './landing/Landing'
import { About } from './about/About'
import { Projects } from './projects/Projects'




function App() {

	return (
		<>
			<Header />
			<div className='content'>
				<Landing />
				<About />
				<Projects />
			</div>
		</>
	)
}

export default App
