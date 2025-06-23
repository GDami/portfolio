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
                <SkillIcon name="Java" class="bxl bx-java" level={2}></SkillIcon>
                <SkillIcon name="python" class="bxl bx-python" level={1}></SkillIcon>
                <SkillIcon name="django" class="bxl bx-django" level={1}></SkillIcon>
            </div>
        </div>
    )
}