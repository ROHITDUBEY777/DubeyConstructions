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
    <section id="projects" className="py-20 bg-light">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Track Record
          </div>
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4 leading-tight">
            4000+ Projects <span className="text-secondary">Delivered</span>
          </h2>
          <p className="text-[1.15rem] text-muted max-w-[600px] mx-auto">
            A glimpse into our ongoing and completed projects across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden h-[300px] shadow-md cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-[ease] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-overlay-up flex items-end p-8 opacity-0 transition-opacity duration-300 ease-[ease] group-hover:opacity-100">
                <div className="translate-y-5 transition-transform duration-300 ease-[ease] group-hover:translate-y-0">
                  <span className="inline-block text-secondary text-sm font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold m-0 text-left">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
