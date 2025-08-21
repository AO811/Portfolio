import "./Projects.css";
import WiresharkImg from '../assets/Wireshark.png';
import EMSImg from '../assets/EMS.png';
import SpotifyImg from '../assets/Spotify.png';
import HotelImg from '../assets/Hotel.png';

function Projects() {
  const projects = [
  {
    title: "Wireshark Network Tracking with Google Maps",
    desc: "Network threat monitoring tool using Python, Tkinter, Folium, and AbuseIPDB+VirusTotal APIs",
    img: WiresharkImg,
    caption: "Real-time network monitoring dashboard",
  },
  {
    title: "Employee Management System",
    desc: "Developed using Java Swing and MySQL",
    img: EMSImg,
    caption: "User interface for managing employee data",
  },
  {
    title: "Spotify EDA",
    desc: "EDA using Pandas, NumPy, Matplotlib, Seaborn",
    img: SpotifyImg,
    caption: "Data visualization of Spotify data",
  },
  {
    title: "MERN Hotel Booking System",
    desc: "Built with MERN Stack + Bootstrap",
    img: HotelImg,
    caption: "Responsive hotel booking platform",
  },
];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <figure>
              <img src={project.img} alt={project.title} />
              <figcaption>{project.caption}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
