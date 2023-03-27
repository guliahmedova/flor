import video from '../images/video.mp4';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>about </span>Us</h1>

      <div className="row">
        <div className="vidoe-container">
          <video src={video} loop autoPlay muted></video>
          <h3>best flower sellers</h3>
        </div>
        <div className="content">
          <h3>why choose us?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum incidunt magnam libero eaque,
            natus eveniet id inventore, quasi autem numquam
            eum cumque labore officiis maxime, quisquam earum laboriosam corrupti?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolore exercitationem iusto similique adipisci dolorum earum recusandae
            asperiores aliquid harum.</p>
            <a href="#" className="btn">learn more</a>
        </div>
      </div>

    </section>
  )
};

export default About