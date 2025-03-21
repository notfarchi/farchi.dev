"use client"
import { useState, useEffect } from "react"
import type React from "react"

import Link from "next/link"
import styles from "./navbar.module.css"

interface NavbarProps {
  activeSection: string
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Sobre" },
    { id: "experience", label: "Experiência" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projetos" },
    { id: "certificates", label: "Certificados" }
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          farchi.dev
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar