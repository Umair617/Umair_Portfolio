"use client";

import { useEffect, useRef, useState } from "react";

const emailAddress = "umumtaz617@gmail.com";

const projects = [
  {
    number: "01",
    category: "SEO",
    title: "SEO & Marketing Analytics Platform",
    type: "Company Product",
    preview: "Marketing analytics and Facebook publishing from one dashboard.",
    description: "A centralized SEO and marketing analytics platform integrating Google Search Console (GSC), Google Analytics 4 (GA4), Google Ads, and Meta APIs, featuring OAuth 2.0 authorization, account connections, automated token refresh, and Facebook publishing automation.",
    enables: "Unified marketing analytics, secure third-party account connections, automated token management, and Facebook autoposting through a single dashboard.",
    coverageLabel: "Covers",
    coverage: ["SEO & Marketing Analytics", "Google Search Console & GA4", "Google Ads & Meta API Integrations", "OAuth 2.0 & Account Connections", "Access & Refresh Token Management", "Facebook Autoposting", "Analytics Dashboards"],
  },
  {
    number: "02",
    category: "Data",
    title: "Centralized data hub",
    type: "Company product",
    preview: "One shared data source powering multiple projects.",
    description: "A centralized data source created to serve multiple projects.",
    enables: "One shared data source across projects",
    coverageLabel: "Covers",
    coverage: ["Centralized data", "Multiple projects"],
  },
  {
    number: "03",
    category: "Platform",
    title: "Unified tools platform",
    type: "Company product",
    preview: "One place to access every tool assigned to a user.",
    description: "One roof for access to multiple tools. Each person reaches the tools assigned to them from a single platform.",
    enables: "Every assigned tool from a single platform",
    coverageLabel: "Features",
    coverage: ["User creation and sync", "Product integrations", "Product assignment"],
  },
  {
    number: "04",
    category: "Recruiting",
    title: "Clinic recruiting platform",
    type: "Company product",
    preview: "A connected hiring flow from candidate profile to hire.",
    description: "A recruiting platform for clinics that automates the hiring process. Candidates sign in and create a profile, an agent reviews it and shows it to matching clinics, and the clinic chats with the candidate, schedules an interview and hires.",
    enables: "Hiring from first sign-in to hire, automated",
    coverageLabel: "Hiring flow",
    coverage: ["Sign in", "Profile", "Agent review", "Clinic match", "Chat", "Interview", "Hired"],
  },
  {
    number: "05",
    category: "Embedded chat",
    title: "Embedded dealer chat widget",
    type: "Company product",
    preview: "Vehicle insights, dealer contact, and search in one chat.",
    description: "A chat snippet embedded on car dealer websites. It shows visitors the vehicle market and resale values, puts them in contact with the dealer and helps them find a vehicle with specific specs. It is integrated with multiple background tools to bring the information together.",
    enables: "Market insight, dealer contact and vehicle search in one chat",
    coverageLabel: "Covers",
    coverage: ["Vehicle market", "Resale value", "Dealer contact", "Spec-based search", "Tool integrations"],
  },
];

export default function Page() {
  const [copyLabel, setCopyLabel] = useState("Copy email");
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const projectDialogRef = useRef<HTMLDialogElement>(null);
  const projectCloseRef = useRef<HTMLButtonElement>(null);
  const projectTriggerRef = useRef<HTMLButtonElement>(null);
  const selectedProject = activeProject === null ? null : projects[activeProject];

  useEffect(() => {
    if (activeProject === null || !projectDialogRef.current) return;
    const dialog = projectDialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    projectCloseRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [activeProject]);

  function openProject(index: number, trigger: HTMLButtonElement) {
    projectTriggerRef.current = trigger;
    setActiveProject(index);
  }

  function handleProjectClose() {
    setActiveProject(null);
    projectTriggerRef.current?.focus();
  }

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem("um-theme");
    } catch {}
    const theme = saved === "dark" || saved === "light"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    const button = document.getElementById("theme");
    if (button) button.textContent = theme === "dark" ? "Light" : "Dark";
  }, []);

  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("um-theme", theme);
    } catch {}
    const button = document.getElementById("theme");
    if (button) button.textContent = theme === "dark" ? "Light" : "Dark";
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyLabel("Copied");
    } catch {
      const email = document.getElementById("email");
      if (email) {
        const range = document.createRange();
        range.selectNodeContents(email);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setCopyLabel("Email selected");
    }
    window.setTimeout(() => setCopyLabel("Copy email"), 1800);
  }

  return (
    <>
<header className="nav" id="top">
  <div className="wrap nav-in">
    <a className="brand" href="#top" aria-label="Umair Mumtaz, back to top">UM<span>.</span></a>
    <nav aria-label="Sections">
      <ul className="links">
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="nav-actions">
      <button className="btn sm" id="theme" type="button" aria-label="Switch colour theme" onClick={toggleTheme}>Dark</button>
      <a className="btn sm red" href="https://www.linkedin.com/in/umair-mumtaz-dev">Hire me</a>
    </div>
  </div>
</header>

<main>
  <section className="hero">
    <div className="wrap hero-in">
      <div className="hero-copy">
        <p className="eyebrow">Software engineer &mdash; MERN stack &mdash; Next.js &mdash; Lahore, Pakistan</p>
        <h1>Muhammad Umair Mumtaz.</h1>
        <p className="lede">I&apos;m a Full-Stack Developer based in Pakistan, building modern web applications with React, Next.js, TypeScript, Node.js, and Python. From interface to API to database, I take features all the way to production.</p>
        <div className="cta">
          <a className="btn red" href="#contact">Get in touch</a>
          <a className="btn" href="#portfolio">View my work</a>
        </div>
        <p className="status"><span className="dot"></span>Available for work</p>
      </div>
      <aside className="disc" aria-label="Areas of expertise">
        <p className="label">Expertise</p>
        <ol>
          <li><span className="n">01</span><div><h3>Full-Stack Web Development</h3><p>Building scalable, production-ready web applications with modern frontend and backend technologies.</p></div></li>
          <li><span className="n">02</span><div><h3>Responsive UI Development</h3><p>Crafting intuitive, accessible, and responsive interfaces with attention to detail and performance.</p></div></li>
          <li><span className="n">03</span><div><h3>API Development &amp; Integration</h3><p>Designing and integrating secure RESTful APIs for seamless communication between applications and services.</p></div></li>
          <li><span className="n">04</span><div><h3>Backend &amp; Database Systems</h3><p>Building scalable, reliable backend systems with Node.js, Express.js, Next.js, and Python, leveraging PostgreSQL, Prisma ORM, and Redis caching for efficient data management and performance.</p></div></li>
          <li><span className="n">05</span><div><h3>SaaS Development &amp; Access Control</h3><p>Building multi-tenant SaaS applications with subscription management, authentication, and authorization through role-based access control (RBAC).</p></div></li>
        </ol>
      </aside>
    </div>
  </section>

  <section className="strip" id="skills">
    <div className="wrap">
      <div className="frame">
        <div className="cell hov">
          <div className="big">Frontend</div>
          <p>React.js, Next.js, Tailwind CSS, Axios, Swiper.js, shadcn/ui, TanStack Query (React Query)</p>
        </div>
        <div className="cell hov">
          <div className="big">Backend &amp; Integrations</div>
          <p>Node.js, Express.js, REST APIs, RBAC, Zod, NextAuth.js (Auth.js), JWT Authentication &amp; Authorization, Mailgun, Webhooks</p>
        </div>
        <div className="cell hov">
          <div className="big">Database &amp; ORM</div>
          <p>PostgreSQL, MongoDB, Redis, Prisma ORM</p>
        </div>
        <div className="cell hov"><div className="big">Languages</div><p>TypeScript, JavaScript, Python, HTML5, CSS3</p></div>
        <div className="tools"><span className="label">Tools &amp; DevOps</span><p>Git &middot; GitHub &middot; VS Code &middot; Figma</p></div>
        <div className="tools"><span className="label">Cloud &amp; Storage</span><p>AWS S3</p></div>
      </div>
    </div>
  </section>

  <section className="sec about" id="about">
    <div className="wrap">
      <div className="sec-head">
        <div>
          <p className="eyebrow">About me</p>
          <h2>Software Engineer &amp; Full Stack Developer.</h2>
        </div>
        <a className="arrow-link" href="#experience">See my experience &rarr;</a>
      </div>
      <p className="lede">I&apos;m currently an Associate Software Engineer at LogicWise.co. I hold a BS in Software Engineering from the University Of Central Punjab, and I enjoy work that spans the whole stack.</p>
      <div className="frame">
        <div className="cell hov">
          <p className="label">01 / Experience</p>
          <div className="big">1+ years</div>
          <p className="t">Building and maintaining web applications with React, Next.js and TypeScript.</p>
          <ul className="tags"><li>React.js</li><li>Next.js</li><li>TypeScript</li><li>Python</li></ul>
        </div>
        <div className="cell hov">
          <p className="label">02 / Companies</p>
          <div className="big">2 teams</div>
          <p className="t">Product work at LogicWise.co and ApplyDreams, both in Lahore.</p>
          <ul className="tags"><li>LogicWise.co</li><li>ApplyDreams</li></ul>
        </div>
        <div className="cell hov">
          <p className="label">03 / Production work</p>
          <div className="big">5+ projects</div>
          <p className="t">Built multi-tenant SaaS tools with subscription management and role-based access control, with Redis caching for performance.</p>
          <ul className="tags"><li>Multi-tenant</li><li>RBAC</li><li>Redis</li><li>SaaS</li></ul>
        </div>
      </div>
    </div>
  </section>

  <section className="sec work" id="portfolio" style={{ paddingTop: 0 }}>
    <div className="wrap">
      <div className="sec-head">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2>Selected work.</h2>
        </div>
        <a className="arrow-link" href="https://github.com/Umair617">More on GitHub &rarr;</a>
      </div>
      <p className="lede">Company products I&apos;ve built, from SEO tooling and shared data to recruiting and dealer-facing tools.</p>
      <div className="frame">
        {projects.map((project, index) => (
          <article className="card hov project-card" key={project.number}>
            <div className="card-top"><span className="n">{project.number}</span><span className="label">{project.category}</span></div>
            <h3>{project.title}</h3>
            <p className="sub">{project.type}</p>
            <p className="project-preview" title={project.preview}>{project.preview}</p>
            <span className="project-cta" aria-hidden="true">View details &rarr;</span>
            <button
              className="project-open"
              type="button"
              aria-label={`View details for ${project.title}`}
              aria-haspopup="dialog"
              onClick={(event) => openProject(index, event.currentTarget)}
            />
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="sec work" id="experience">
    <div className="wrap">
      <div className="sec-head">
        <h2>Work experience.</h2>
        <a className="arrow-link" href="https://www.linkedin.com/in/umair-mumtaz-dev">Full history on LinkedIn &rarr;</a>
      </div>
      <p className="lede">Two roles building production web applications, from interface work to APIs and caching.</p>
      <div className="frame">
        <article className="card hov">
          <div className="card-top"><span className="n">01</span><span className="label">Nov 2025 &ndash; Present</span></div>
          <h3>Associate Software Engineer</h3>
          <p className="sub"><b>LogicWise.co</b> &middot; Lahore, Punjab, Pakistan</p>
          <ul className="pts">
            <li>Building and maintaining scalable web applications using React, Next.js, CSS3, Tailwind CSS and shadcn/ui.</li>
            <li>Developing RESTful APIs with Python, integrated with PostgreSQL databases.</li>
            <li>Built SaaS tools with multi-tenant architecture, subscription management and role-based access control.</li>
            <li>Implemented Redis caching and RBAC for secure, performant applications.</li>
            <li>Integrated third-party services, including AWS S3 for secure file uploads and object storage, and Mailgun webhooks for event-driven email tracking and delivery status updates.</li>
            <li>Collaborating with cross-functional teams to deliver production-ready features on time.</li>
            <li>Participating in code reviews, Agile sprints and Git-based version control workflows.</li>
            <li>Developed RESTful APIs and integrated third-party services for analytics, marketing automation, and external platform connectivity.</li>
            <li>Implemented secure OAuth 2.0 authorization flows and multi-account connections for third-party integrations.</li>
          </ul>
          <div className="foot"><span className="label">Stack</span><ul className="tags"><li>Python</li><li>React</li><li>Next.js</li><li>CSS3</li><li>Tailwind CSS</li><li>PostgreSQL</li><li>Redis</li><li>shadcn/ui</li></ul></div>
        </article>
        <article className="card hov">
          <div className="card-top"><span className="n">02</span><span className="label">Sept 2025 &ndash; Nov 2025</span></div>
          <h3>Frontend Developer</h3>
          <p className="sub"><b>ApplyDreams</b> &middot; Lahore, Punjab, Pakistan</p>
          <ul className="pts">
            <li>Built and maintained interactive web applications using React, Next.js, TypeScript and Tailwind CSS.</li>
            <li>Implemented reusable, type-safe UI components for scalable development.</li>
            <li>Translated Figma designs into fully responsive, production-ready pages.</li>
            <li>Improved performance, accessibility and SEO through clean, optimized code.</li>
          </ul>
          <div className="foot"><span className="label">Stack</span><ul className="tags"><li>React.js</li><li>Next.js</li><li>TypeScript</li><li>Tailwind CSS</li></ul></div>
        </article>
      </div>
    </div>
  </section>

  <section className="band" id="education">
    <div className="wrap sec">
      <div className="band-head">
        <div>
          <p className="eyebrow">Education</p>
          <h2>Where I studied.</h2>
        </div>
        <p className="lede">A software engineering degree focused on development, algorithms, databases, and modern web technologies.</p>
      </div>
      <article className="education-feature">
        <div className="education-primary">
          <p className="label">Qualification</p>
          <h3>Bachelor&apos;s degree, Software Engineering</h3>
          <p className="education-school">University Of Central Punjab</p>
        </div>
        <div className="education-details">
          <div>
            <span className="label">Years</span>
            <p className="education-date">Oct 2020 &ndash; Jul 2025</p>
          </div>
          <div>
            <span className="label">Focus</span>
            <p className="education-focus">Software development, algorithms and data structures; database systems and modern web technologies; Final Year Project with distinction.</p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section className="cta-band" id="contact">
    <div className="wrap cta-in">
      <h2>Bring me the product you want to build.</h2>
      <div>
        <p className="t">Have a project in mind? I&apos;m available for freelance work and always open to discussing new opportunities.</p>
        <div className="mail">
          <span className="val" id="email">umumtaz617@gmail.com</span>
          <button className="btn light sm" id="copy" type="button" onClick={copyEmail} aria-live="polite">{copyLabel}</button>
        </div>
        <div className="cta-links">
          <a className="btn ghost-light sm" href="https://www.linkedin.com/in/umair-mumtaz-dev">LinkedIn</a>
          <a className="btn ghost-light sm" href="https://github.com/Umair617">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</main>

<dialog
  className="project-dialog"
  ref={projectDialogRef}
  aria-modal="true"
  aria-labelledby="project-dialog-title"
  onClose={handleProjectClose}
  onClick={(event) => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      event.currentTarget.close();
    }
  }}
>
  {selectedProject && (
    <div className="project-dialog-inner">
      <div className="project-dialog-top">
        <span className="label">Project {selectedProject.number} / {selectedProject.category}</span>
        <button className="project-dialog-close" type="button" ref={projectCloseRef} onClick={() => projectDialogRef.current?.close()}>
          Close <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <h2 id="project-dialog-title">{selectedProject.title}</h2>
      <p className="project-dialog-type">{selectedProject.type}</p>
      <div className="project-dialog-section">
        <p className="label">Overview</p>
        <p>{selectedProject.description}</p>
      </div>
      <div className="project-dialog-section">
        <p className="label">What it enables</p>
        <p>{selectedProject.enables}</p>
      </div>
      <div className="project-dialog-section">
        <p className="label">{selectedProject.coverageLabel}</p>
        <ul className="tags">{selectedProject.coverage.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </div>
  )}
</dialog>

<footer>
  <div className="wrap">
    <div className="foot-in">
      <div>
        <a className="brand" href="#top">UM<span>.</span></a>
        <p>Full stack developer building modern web applications. Based in Lahore, working with teams worldwide.</p>
        <p className="mailtxt">umumtaz617@gmail.com</p>
      </div>
      <div><h4>Sections</h4><ul><li><a href="#about">About</a></li><li><a href="#skills">Skills</a></li><li><a href="#portfolio">Portfolio</a></li><li><a href="#experience">Experience</a></li><li><a href="#education">Education</a></li></ul></div>
      <div><h4>Elsewhere</h4><ul><li><a href="https://github.com/Umair617">GitHub</a></li><li><a href="https://www.linkedin.com/in/umair-mumtaz-dev">LinkedIn</a></li></ul></div>
      <div><h4>Focus</h4><ul><li>React &amp; Next.js</li><li>Node.js &amp; APIs</li><li>SaaS &amp; RBAC</li></ul></div>
    </div>
    <div className="legal"><span>&copy; 2026 Muhammad Umair Mumtaz. All rights reserved.</span><span>Lahore, Pakistan</span></div>
  </div>
</footer>
    </>
  );
}
