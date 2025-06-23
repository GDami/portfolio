import { SkillIcon } from "./SkillIcon";
import './Skills.css'

export function Skills() {
    return (
        <div className="section-container skills" id="skills">
            <h1 className="main-heading">My <span>Skills</span></h1>
            <div className="skills-list">
                <SkillIcon name="HTML5" class="bxl bx-html5" level={4}></SkillIcon>
                <SkillIcon name="CSS3" class="bxl bx-css3" level={2}></SkillIcon>
                <SkillIcon name="TypeScript" class="bxl bx-typescript" level={3}></SkillIcon>
                <SkillIcon name="React.js" class="bxl bx-react" level={2}></SkillIcon>
                <SkillIcon name="Angular" class="bxl bx-angular" level={1}></SkillIcon>
                <SkillIcon name="Java" class="bxl bx-java" level={2}></SkillIcon>
                <SkillIcon name="PostgreSQL" class="bxl bx-postgresql" level={2}></SkillIcon>
                <SkillIcon name="python" class="bxl bx-python" level={1}></SkillIcon>
                <SkillIcon name="django" class="bxl bx-django" level={1}></SkillIcon>
                <SkillIcon name="git" class="bxl bx-git" level={2}></SkillIcon>
                <SkillIcon name="Github" class="bxl bx-github" level={3}></SkillIcon>
                <SkillIcon name="> bash" class="bxl bx-bash" level={2}></SkillIcon>
                <SkillIcon name="English" class="bx bx-discussion" level={4}></SkillIcon>
            </div>
        </div>
    )
}