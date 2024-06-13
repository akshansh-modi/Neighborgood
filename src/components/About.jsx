import Testimonials from "./Testimonials";
import "./about.css";
import about from "/img/about.webp";
const About = () => {
  return (
    <>
      <div className="min-h-screen darkbg dark-text">
        <div className="  flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
          <div className=" w-full lg:w-3/4 space-y-4">
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              About Us
            </h1>
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-color-brown dark:text-color-light">
                <b>NeighborGood</b> is on a mission to provide the simplest
                platform for neighborhoods to form connections &amp; community.
                We are going after this by creating an <b>Al agent</b> that acts
                as the <b>highly-social extrovert</b> neighbor who finds{" "}
                <b>symbiotic activities</b> for people to do together.
              </p>
              <p className="text-color-brown dark:text-color-light">
                We offer users the ability to screen potential nearby
                connections and arrange shared <b>face-to-face activities.</b>{" "}
                Our team previously founded{" "}
                <b>
                  Foresight Institute, Persist Ventures, &amp; Systemic
                  Altruism.
                </b>
              </p>
            </div>
          </div>
          <div className=" w-full lg:w-3/4">
            <img src={about}></img>
          </div>
        </div>
        <div></div>
        <Testimonials />
      </div>
    </>
  );
};

export default About;
