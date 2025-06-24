import { SkillIcon } from "./SkillIcon";
import './Skills.css'

export function Skills() {
    return (
        <div className="section-container skills" id="skills">
            <h1 className="main-heading">My <span>Skills</span></h1>
            <div className="skills-list">
                <SkillIcon name="HTML5" class="bxl bx-html5" level={4} description={
                    "<h1>Hello World!</h1>"
                }></SkillIcon>
                <SkillIcon name="CSS3" class="bxl bx-css3" level={2} description="Truly the oddball of front-end development. I love the way it scratches my brain."></SkillIcon>
                <SkillIcon name="TypeScript" class="bxl bx-typescript" level={3} description="I have learned TypeScript back during my last internship, when I had to update an internal application with it. I never looked back, and used it in every project since then."></SkillIcon>
                <SkillIcon name="React.js" class="bxl bx-react" level={2} description="This website was made in it !"></SkillIcon>
                <SkillIcon name="Angular" class="bxl bx-angular" level={1}></SkillIcon>
                <SkillIcon name="Java" class="bxl bx-java" level={3} description="Probably the language I have most diverse experience in. School projects, personal projects and client projects using Spring Boot."></SkillIcon>
                <SkillIcon name="PostgreSQL" class="bxl bx-postgresql" level={2}></SkillIcon>
                <SkillIcon name="Python" class="bxl bx-python" level={1} description=""></SkillIcon>
                <SkillIcon name="django" class="bxl bx-django" level={1} description="I learned this recently, for a personal project you can read about if you scroll down a bit !"></SkillIcon>
                <SkillIcon name="git" class="bxl bx-git" level={2} description="I can handle the basics, things like creating and switching branches, cloning, fetching and of course commiting."></SkillIcon>
                <SkillIcon name="Github" class="bxl bx-github" level={2}></SkillIcon>
                {/* <SkillIcon name="> bash" class="bxl bx-bash" level={1} description="cd, mkdir, rm, sed and cron. That's a start."></SkillIcon> */}
                <SkillIcon name="English" class="bx bx-discussion" level={4} description="Je parle aussi le français :)"></SkillIcon>
            </div>
        </div>
    )
}