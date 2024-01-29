import "./About.scss";
import { descriptionList } from "../Data/Description";
import { aboutContentList } from "../Data/AboutContent";
import { AbstractDesign } from "../../assets/resource/ImgResource";

const About = () => {
  const renderAbout = aboutContentList.map((item) => {
    return (
      <section className="content mt-5 mb-5 " id={item.id}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="about_content_card card border-0 bg-white p-3 d-flex gap-2">
              <img src={item.content[0][0]} alt=".." />
              <h6>{item.content[0][1]}</h6>
              <p>{item.content[0][2]}</p>
            </div>
          </div>
          <div className="col">
            <div className="about_content_card card border-0 bg-white p-3 d-flex gap-2">
              <img src={item.content[1][0]} alt=".." />
              <h6>{item.content[1][1]}</h6>
              <p>{item.content[1][2]}</p>
            </div>
          </div>
          <div className="col">
            <div className="about_content_card card bg-white border-0 p-3 d-flex gap-2">
              <img src={item.content[2][0]} alt=".." />
              <h6>{item.content[2][1]}</h6>
              <p>{item.content[2][2]}</p>
            </div>
          </div>
          <div className="col">
            <div className="about_content_card card bg-white border-0 p-3 d-flex gap-2">
              <img src={item.content[3][0]} alt=".." />
              <h6>{item.content[3][1]}</h6>
              <p>{item.content[3][2]}</p>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return (
    <div>
      {descriptionList
        .filter((description) => {
          return description.title === "about";
        })
        .map((description) => {
          return (
            <section className="description_section container mt-5 mb-5 border-bottom ">
              <div className="description_container row ">
                <h1 className="col-md-6 col-12">{description.heading}</h1>
                <p className="col-md-6 col-12">{description.content}</p>
              </div>
            </section>
          );
        })}

      <section className="container bg-light">
        <div className="d-flex flex-column gap-3">{renderAbout}</div>
      </section>

      <section className="container mt-5 bg-light" id="company">
        <div className="bg-white  d-flex flex-column flex-md-row rounded">
          <div className="p-3">
            <h2>
              <span className="text-warning">Together</span>, let's shape the
              future of digital innovation
            </h2>
            <p>
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>
          <div className="d-flex flex-row-reverse flex-md-row">
            <div className="abstractDesign_image_container">
              <img src={AbstractDesign} className="abstractDesign img-fluid" />
            </div>
            <div className="d-flex align-items-center justify-content-center p-3">
              <button className="join_button rounded border-0 text-white p-2">
                Join now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
