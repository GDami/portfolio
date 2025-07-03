import './App.css'
import { Header } from './header/Header'
import { Hero } from './landing/Hero'
import { About } from './about/About'
import { Projects } from './projects/Projects'
import { Contact } from './contact/Contact'
import { Skills } from './skills/Skills'
import { Experiences } from './experiences/Experiences'
import { useEffect } from 'react'




function App() {

	useEffect(() => {
		const sections = document.querySelectorAll("section")

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("shown")
				}
			})
		}, { rootMargin: "-100px"})
		
		sections.forEach(section => observer.observe(section))

		return () => observer.disconnect()
	})

	return (
		<>
			<Header />
			<div className='content'>
				<Hero />
				<section className=""><About /></section>
				<section className=""><Projects /></section>
				<section className=""><Skills /></section>
				<section className=""><Experiences /></section>
				<section className=""><Contact /></section>
			</div>
			<footer>© 2025 Damien Gervy</footer>
		</>
	)
}

export default App
