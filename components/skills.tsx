import { useEffect, useState } from "react"
import styles from "./skills.module.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: ["Java", "C", "Swift", "JavaScript", "Python"],
    },
    {
      title: "Linguagens de Marcação e Estilo",
      skills: ["HTML5", "CSS3"],
    },
    {
      title: "Bibliotecas e Frameworks",
      skills: ["Spring", "RESTful API", "Swagger", "Maven", "Bootstrap"],
    },
    {
      title: "Banco de Dados",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "Ferramentas",
      skills: ["Postman", "Git", "Testes Unitários", "Figma", "Node-RED"],
    },
    {
      title: "Sistemas Operacionais",
      skills: ["Linux", "macOS", "Windows"],
    },
    {
      title: "Metodologias Ágeis",
      skills: ["SCRUM Framework", "Kanban"],
    },
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">Hard Skills</h2>
        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, idx) => (
                  <SkillItem key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SkillItem = ({ skill }: { skill: string }) => {
  const [width, setWidth] = useState("0%")

  useEffect(() => {
    setWidth(`${Math.random() * 30 + 70}%`)
  }, [])

  return (
    <div className={styles.skillItem}>
      <div className={styles.skillName}>{skill}</div>
      <div className={styles.skillBar}>
        <div className={styles.skillProgress} style={{ width }}></div>
      </div>
    </div>
  )
}

export default Skills