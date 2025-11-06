import './App.css'
import { Header } from './components/header/Header'
import { Hero } from './components/landing/Hero'
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'
import { Skills } from './components/skills/Skills'
import { Experiences } from './components/experiences/Experiences'
// import { useEffect } from 'react'




function App() {

	// useEffect(() => {
	// 	const sectionTitles = document.querySelectorAll(".section-title")
	// 	const aboutDetails = document.querySelectorAll(".about-detail")
	// 	const projects = document.querySelectorAll(".project")
	// 	const skillIcons = document.querySelectorAll(".skill-icon")
	// 	const experiences = document.querySelectorAll(".experience")

	// 	const observer = new IntersectionObserver(entries => {
	// 		entries.forEach(entry => {
	// 			if (entry.isIntersecting) {
	// 				entry.target.classList.remove("hidden")
	// 				entry.target.classList.add("shown")
	// 			}
	// 		})
	// 	}, {
	// 		rootMargin: "-80px"
	// 	})

	// 	const registerElement = (element: Element) => {
	// 		element.classList.add("hidden")
	// 		observer.observe(element)
	// 	}
		
	// 	sectionTitles.forEach(section => registerElement(section))
	// 	aboutDetails.forEach(aboutDetail => registerElement(aboutDetail))
	// 	projects.forEach(project => registerElement(project))
	// 	skillIcons.forEach(skillIcon => registerElement(skillIcon))
	// 	experiences.forEach(experience => registerElement(experience))

	// 	return () => observer.disconnect()
	// })

	return (
		<div className='content-wrapper'>
			<Header />
			<div className='content'>
                <div className='content-thin'>
                    <div className='scroll-dummy'></div>
                    <Hero />
                    <section className="about-section"><About /></section>
                    <section className=""><Projects /></section>
                    <section className="skills-section"><Skills /></section>
                    <section className=""><Experiences /></section>
                    <section className=""><Contact /></section>
                    <footer>© 2025 Damien Gervy</footer>
                </div>
			</div>
		</div>
	)
}

export default App
