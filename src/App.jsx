import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Github, Menu, X,
  Linkedin, Mail, MapPin, Sparkles, Terminal, Layers3, ExternalLink,
} from 'lucide-react'

const skills = [
  { name: 'HTML5', type: 'Structure' },
  { name: 'CSS3', type: 'Styling' },
  { name: 'JavaScript', type: 'Programming' },
  { name: 'React', type: 'Frontend' },
  { name: 'Tailwind CSS', type: 'Styling' },
  { name: 'Git & GitHub', type: 'Workflow' },
  { name: 'Vite', type: 'Tooling' },
]

const projects = [
  {
    number: '01',
    title: 'Dev Stack Builder',
    description: 'A developer-focused interface for exploring and selecting a web development stack.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    status: 'In progress',
    link: 'https://github.com/arakash15?tab=repositories',
    accent: 'violet',
    visual: 'stack',
  },
  {
    number: '02',
    title: 'Web Design Practice',
    description: 'A collection of small frontend exercises focused on layout, responsive design, and clean UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'Learning project',
    link: 'https://github.com/arakash15?tab=repositories',
    accent: 'blue',
    visual: 'browser',
  },
  {
    number: '03',
    title: 'More projects coming',
    description: 'I’m continuing to learn by building, testing ideas, and improving one project at a time.',
    tags: ['Practice', 'Learning'],
    status: 'On the roadmap',
    link: 'https://github.com/arakash15?tab=repositories',
    accent: 'green',
    visual: 'terminal',
  },
]

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-line" />
      <span>{children}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const navItems = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ]

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Arakash home">
          <span className="brand-mark">A<span>.</span></span>
          <span>ARAKASH<span className="brand-muted"> / PORTFOLIO</span></span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO LEARNING & COLLABORATION
            </div>
            <p className="eyebrow">HELLO, WORLD. I'M</p>
            <h1>Arakash<span className="accent">.</span></h1>
            <h2>I build things for <span>the web.</span></h2>
            <p className="hero-description">
              I’m a Computer Science and Technology student learning frontend development
              and turning ideas into clean, responsive web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <Mail size={16} />
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/arakash15" target="_blank" rel="noreferrer">
                <Github size={17} /> <span>GitHub</span> <ArrowUpRight size={13} />
              </a>
              <span className="social-divider" />
              <span className="hero-location"><MapPin size={15} /> Bangladesh</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative code window">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>developer.js</span>
                <Terminal size={14} />
              </div>
              <div className="code-content">
                <div><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                <div><span className="line-number">02</span><span className="indent code-red">name</span>: <span className="code-green">'Arakash'</span>,</div>
                <div><span className="line-number">03</span><span className="indent code-red">focus</span>: <span className="code-green">'Frontend'</span>,</div>
                <div><span className="line-number">04</span><span className="indent code-red">learning</span>: [</div>
                <div><span className="line-number">05</span><span className="indent2 code-green">'React'</span>,</div>
                <div><span className="line-number">06</span><span className="indent2 code-green">'JavaScript'</span>,</div>
                <div><span className="line-number">07</span><span className="indent2 code-green">'Tailwind CSS'</span></div>
                
                <div><span className="line-number">09</span><span className="indent code-red">mindset</span>: <span className="code-green">'Keep building'</span></div>
                <div><span className="line-number">10</span>{'}'}<span className="code-purple">;</span></div>
                <div className="code-comment"><span className="line-number">11</span>// Always learning something new <span className="cursor">▋</span></div>
              </div>
              <div className="window-footer"><span><span className="status-light" /> JavaScript</span><span>UTF-8</span><span>Ln 11, Col 36</span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={16} /> Clean code</div>
            <div className="floating-chip chip-bottom"><Sparkles size={16} /> Curious by nature</div>
          </div>
          <a className="scroll-hint" href="#about"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section-wrap content-section">
          <SectionLabel number="01">ABOUT ME</SectionLabel>
          <div className="about-grid">
            <div>
              <h2 className="section-heading">Curious mind.<br /><span>Builder mindset.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I’m studying Computer Science and Technology (CST) and developing my skills
                in modern frontend technologies. I enjoy understanding how interfaces work
                and recreating ideas into practical projects.
              </p>
              <p>
                Right now, I’m focused on strengthening my JavaScript and React fundamentals,
                writing better code, and learning how to ship complete projects from start to finish.
              </p>
              <a className="text-link" href="https://github.com/arakash15?tab=repositories" target="_blank" rel="noreferrer">
                Browse my GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="facts-grid">
            <div className="fact-card"><span className="fact-icon"><Terminal size={18} /></span><strong>Learning by doing</strong><span>Building practical projects</span></div>
            <div className="fact-card"><span className="fact-icon"><Layers3 size={18} /></span><strong>Frontend focused</strong><span>UI, layout & responsiveness</span></div>
            <div className="fact-card"><span className="fact-icon"><Sparkles size={18} /></span><strong>Always improving</strong><span>One step at a time</span></div>
          </div>
        </section>

        <section id="skills" className="section-wrap content-section">
          <SectionLabel number="02">SKILLS & TOOLS</SectionLabel>
          <div className="section-intro-row">
            <h2 className="section-heading">My current <span>toolkit.</span></h2>
            <p>Tools I’m learning and using to create<br className="desktop-break" /> modern web experiences.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-index">0{index + 1}</span>
                <strong>{skill.name}</strong>
                <span>{skill.type}</span>
                <ArrowUpRight className="skill-arrow" size={16} />
              </div>
            ))}
          </div>
          <p className="honesty-note"><span /> Skill list reflects my current learning journey and will grow with my projects.</p>
        </section>

        <section id="projects" className="section-wrap content-section">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <div className="section-intro-row projects-intro">
            <h2 className="section-heading">Things I’m <span>building.</span></h2>
            <a className="text-link" href="https://github.com/arakash15?tab=repositories" target="_blank" rel="noreferrer">
              All repositories <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card accent-${project.accent}`} key={project.number}>
                <div className="project-visual">
                  <div className="project-visual-top"><span>PROJECT / {project.number}</span><ExternalLink size={15} /></div>
                  {project.visual === 'stack' && (
                    <div className="stack-illustration">
                      <div className="stack-layer layer-back">CSS</div>
                      <div className="stack-layer layer-mid">JS</div>
                      <div className="stack-layer layer-front"><Code2 size={24} /><span>DEV STACK</span></div>
                    </div>
                  )}
                  {project.visual === 'browser' && (
                    <div className="browser-illustration">
                      <div className="browser-top"><i /><i /><i /><span>my-project.dev</span></div>
                      <div className="browser-body"><div className="browser-sidebar" /><div className="browser-main"><i /><i /><i /><b /></div></div>
                    </div>
                  )}
                  {project.visual === 'terminal' && (
                    <div className="terminal-illustration">
                      <div><span className="code-green">➜</span> <span className="code-blue">~/next-project</span></div>
                      <div className="terminal-muted">building something new...</div>
                      <div><span className="code-green">✓</span> learning never stops</div>
                      <div className="terminal-cursor">_</div>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <div className="project-meta"><span>{project.number} / 03</span><span className="project-status">{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    View on GitHub <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-wrap content-section contact-section">
          <SectionLabel number="04">CONTACT</SectionLabel>
          <div className="contact-panel">
            <div className="contact-glow" />
            <p className="eyebrow">HAVE AN IDEA OR A PROJECT?</p>
            <h2>Let’s make something<br /><span>meaningful.</span></h2>
            <p className="contact-description">I’m always interested in learning, sharing ideas, and connecting with people who build things.</p>
            <div className="contact-actions">
              {/* Replace YOUR_EMAIL with your real email address before publishing. */}
              <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">
                <Mail size={17} /> Email me <ArrowUpRight size={16} />
              </a>
              <a className="button button-secondary" href="https://github.com/arakash15" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home">A<span>.</span></a>
        <p>Designed & built by Arakash.</p>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default App
