type ProjectSection = {
  title: string
  bullets: string[]
}

type ProjectCardProps = {
  title: string
  tags: string[]
  sections: ProjectSection[]
  link?: {
    href: string
    label: string
    thumbnail: string
    alt: string
  }
}

function ProjectCard({ title, tags, sections, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3>{title}</h3>
        {link ? (
          <a
            className="project-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-thumb"
              alt={link.alt}
              src={link.thumbnail}
            />
            <span>{link.label}</span>
          </a>
        ) : null}
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-card__sections">
        {sections.map((section) => (
          <div key={section.title} className="project-card__section">
            <h5>{section.title}</h5>
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
