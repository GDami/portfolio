import './App.css'
import { Header } from './header/Header'
import { Landing } from './landing/Landing'
import { About } from './about/About'
import { Projects } from './projects/Projects'
import { Contact } from './contact/Contact'




function App() {

	return (
		<>
			<Header />
			<div className='content'>
				<Landing />
				<About />
				<Projects />
				<Contact />
			</div>
			<footer>© 2025 Damien Gervy</footer>
		</>
	)
}

export default App
