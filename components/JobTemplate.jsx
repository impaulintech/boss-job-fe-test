import Image from "next/image";
import Degree from "../img/degree.png";
import Location from "../img/location.png";
import Hour from "../img/hour.png";
import Experience from "../img/experience.png";
import JobTemplateStyles from "../styles/JobTemplate.module.css";

export const JobTemplate = () => {
  const jts = JobTemplateStyles;
  return (
    <>
      <div
        className={jts.job_template_container}
        onClick={() => {
          console.log("x");
        }}
      >
        <div className={jts.jtc_top}>
          <h3>Customer Service Representative -</h3>
          {/* <h4>Below expected salary</h4> */}
          {/* <h4>Within expected salary</h4> */}
          {/* <h4>Above expected salary</h4> */}
          {/* <h4>Login to view salary</h4> */}
          <h3>&#8369;30k - &#8369;35k</h3>
        </div>
        <div className={jts.jtc_mid}>
          <span>
            <div className={jts.jtc_img}>
              <Image src={Location} alt="location" />
            </div>
            Cebu City
          </span>
          <span>
            <div className={jts.jtc_img}>
              <Image src={Experience} alt="experience" />
            </div>
            1 - 3 Years
          </span>
          <span>
            <div className={jts.jtc_img}>
              <Image src={Degree} alt="degree" />
            </div>
            Diploma
          </span>
          <span>
            <div className={jts.jtc_img}>
              <Image src={Hour} alt="work-hour" />
            </div>
            Full Time
          </span>
        </div>
        <div className={jts.jtc_bot}>
          <div className={jts.company_link}>
            <div className={jts.jtc_bot_img}>
              <Image
                src={
                  "https://assets.bossjob.com/companies/3687/logo/6acda9caa4c2393abfff543c47b786fb.png"
                }
                alt="company-logo"
                width="100"
                height="100"
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
