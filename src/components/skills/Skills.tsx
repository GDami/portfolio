import { useTranslation } from "react-i18next";
import { SkillIcon } from "./SkillIcon";
import './Skills.css'

export function Skills() {
const { t } = useTranslation()

    return (
        <div className="section-container skills" id="skills">
            <h1 className="section-title animated-underline">{t("skills.title.1")}<span>{t("skills.title.2")}</span></h1>
            <div className="skills-list">
                <SkillIcon name="Java" class="bxl bx-java" level={3} description={t("skills.java.description")}></SkillIcon>
                <SkillIcon name="Spring Boot" class="bxl bx-spring-boot" level={3} description={t("skills.springboot.description")}></SkillIcon>
                <SkillIcon name="TypeScript" class="bxl bx-typescript" level={3} description={t("skills.typescript.description")}></SkillIcon>
                <SkillIcon name="React" class="bxl bx-react" level={3} description={t("skills.reactjs.description")}></SkillIcon>
                <SkillIcon name="HTML5" class="bxl bx-html5" level={4} description={t("skills.html.description")}></SkillIcon>
                <SkillIcon name="CSS3" class="bxl bx-css3" level={3} description={t("skills.css.description")}></SkillIcon>
                <SkillIcon name="Tailwind" class="bxl bx-tailwind-css" level={3} description={t("skills.tailwind.description")}></SkillIcon>
                {/* <SkillIcon name="Sass" class="bxl bx-sass" level={2} description={t("skills.sass.description")}></SkillIcon> */}
                <SkillIcon name="Node.js" class="bxl bx-nodejs" level={2} description={t("skills.nodejs.description")}></SkillIcon>
                {/* <SkillIcon name="Angular" class="bxl bx-angular" level={1} ></SkillIcon> */}
                {/* <SkillIcon name="PostgreSQL" class="bxl bx-postgresql" level={2}></SkillIcon> */}
                {/* <SkillIcon name="Docker" class="bxl bx-docker" level={1} description={t("skills.docker.description")}></SkillIcon> */}
                {/* <SkillIcon name="Python" class="bxl bx-python" level={2} description={t("skills.python.description")}></SkillIcon> */}
                {/* <SkillIcon name="django" class="bxl bx-django" level={1} description={t("skills.django.description")}></SkillIcon> */}
                {/* <SkillIcon name="git" class="bxl bx-git" level={2} description={t("skills.git.description")}></SkillIcon> */}
                <SkillIcon name="Github" class="bxl bx-github" level={2} description={t("skills.github.description")}></SkillIcon>
                {/* <SkillIcon name={t("skills.english.name")} class="bx bx-discussion" level={4} description={t("skills.english.description")}></SkillIcon> */}
                <SkillIcon name={t("skills.problemsolving.name")} class="bxr bx-intellect" level={2} description=""></SkillIcon>
                <SkillIcon name={t("skills.adaptability.name")} class="bxr bx-cursor" level={2} description=""></SkillIcon>
                {/* <SkillIcon name={t("skills.curiosity.name")} class="bxr bx-eye-alt" level={2} description=""></SkillIcon> */}
            </div>
        </div>
    )
}