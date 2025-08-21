import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="card-grid">
        <div className="card">
          <h3>Wireshark Network Tracking with Google Maps</h3>
          <p>Network threat monitoring tool using Python, Tkinter, Folium, and AbuseIPDB+VirusTotal APIs</p>
        </div>
        <div className="card">
          <h3>Employee Management System</h3>
          <p>Developed using Java Swing and MySQL</p>
        </div>
        <div className="card">
          <h3>Spotify EDA</h3>
          <p>EDA using Pandas, NumPy, Matplotlib, Seaborn</p>
        </div>
        <div className="card">
          <h3>MERN Hotel Booking System</h3>
          <p>Built with MERN Stack + Bootstrap</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
