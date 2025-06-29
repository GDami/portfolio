import './App.css'
import { Header } from './header/Header'
import { Landing } from './landing/Landing'
import { About } from './about/About'
import { Projects } from './projects/Projects'
import { Contact } from './contact/Contact'
import { Skills } from './skills/Skills'
import { Experiences } from './experiences/Experiences'




function App() {

	return (
		<>
			<Header />
			<div className='content'>
				<Landing />
				<section className=""><About /></section>
				<section className="light"><Skills /></section>
				<section className="light"><Experiences /></section>
				<section className=""><Projects /></section>
				<section className=""><Contact /></section>
			</div>
			<footer>© 2025 Damien Gervy</footer>
		</>
	)
}

export default App
