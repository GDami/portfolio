import './App.css'
import { Header } from './header/Header'
import { Landing } from './landing/Landing'
import { About } from './about/About'
import { Projects } from './projects/Projects'
import { Contact } from './contact/Contact'
import { Skills } from './skills/Skills'




function App() {

	return (
		<>
			<Header />
			<div className='content'>
				<Landing />
				<section className="light"><Skills /></section>
				<section className="light"><About /></section>
				<section><Projects /></section>
				<section><Contact /></section>
			</div>
			<footer>© 2025 Damien Gervy</footer>
		</>
	)
}

export default App
