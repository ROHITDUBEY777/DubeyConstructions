import './Gallery.css';

export default function Gallery() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1541888086925-ebca89547dcd?q=80&w=2070&auto=format&fit=crop",
      title: "Residential Complex Layout",
      category: "Site Marking Out"
    },
    {
      image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=2070&auto=format&fit=crop",
      title: "Foundation Blueprint Realization",
      category: "Planning & Design"
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop",
      title: "Multi-story Structure Check",
      category: "Site Supervision"
    },
    {
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
      title: "Quality Control Phase",
      category: "Site Supervision"
    },
    {
      image: "https://images.unsplash.com/photo-1621614538965-0219ca0ba7f4?q=80&w=2034&auto=format&fit=crop",
      title: "Plot Dimension Accuracy",
      category: "Site Marking Out"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      title: "Completed Independent Villa",
      category: "Completed Project"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Our Track Record</div>
          <h2 className="section-title">4000+ Projects <span className="text-secondary">Delivered</span></h2>
          <p className="section-subtitle">
            A glimpse into our ongoing and completed projects across the region.
          </p>
        </div>

        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="gallery-item">
              <img src={project.image} alt={project.title} className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <span className="gallery-category">{project.category}</span>
                  <h3 className="gallery-title">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
