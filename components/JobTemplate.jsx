import Image from "next/image";
import Degree from "../assets/img/degree.png";
import Location from "../assets/img/location.png";
import Hour from "../assets/img/hour.png";
import Experience from "../assets/img/experience.png";
import JobTemplateStyles from "../styles/JobTemplate.module.css";

export const JobTemplate = ({ jobs }) => {
  const jts = JobTemplateStyles;
  return (
    <>
      <div
        className={jts.jobTemplateContainer}
        onClick={() => {
          console.log("x");
        }}
      >
        <div className={jts.jtcTop}>
          <h3>Customer Service Representative -</h3>
          {/* <h4>Below expected salary</h4> */}
          {/* <h4>Within expected salary</h4> */}
          {/* <h4>Above expected salary</h4> */}
          {/* <h4>Login to view salary</h4> */}
          <h3>&#8369;330k - &#8369;333k</h3>
        </div>
        <div className={jts.jtcMid}>
          <span>
            <div className={jts.jtcImg}>
              <Image src={Location} alt="location" />
            </div>
            Cebu City
          </span>
          <span>
            <div className={jts.jtcImg}>
              <Image src={Experience} alt="experience" />
            </div>
            1 - 3 Years
          </span>
          <span>
            <div className={jts.jtcImg}>
              <Image src={Degree} alt="degree" />
            </div>
            Diploma
          </span>
          <span>
            <div className={jts.jtcImg}>
              <Image src={Hour} alt="work-hour" />
            </div>
            Full Time
          </span>
        </div>
        <div className={jts.jtcBot}>
          <div className={jts.company_link}>
            <div className={jts.jtcBot_img}>
              <Image
                src={
                  "https://assets.bossjob.com/companies/13432/logo/5RTB4TrSXtqJSHdE4SDCHpaYslcTGpvcQLtsJGgZ.jpeg"
                }
                alt="company-logo"
                width="81"
                height="81"
              ></Image>
            </div>
            <span>Arc Refreshments Corp</span>
          </div>
          <span>3 hours ago</span>
        </div>
      </div>
    </>
  );
};
