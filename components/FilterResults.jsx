/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Close from "../assets/img/x.png";
import Clear from "../assets/img/clear.png";
import More from "../assets/img/more.png";
import Less from "../assets/img/less.png";
import Logo from "/Logo.svg";
import FilterResultStyles from "../styles/FilterResult.module.css";
import React, { useEffect } from "react";

const FilterResults = ({ setFilter }) => {
  const frs = FilterResultStyles;
  const menu = [
    "industry",
    "work experience",
    "qualification",
    "job type",
    "salary"
  ]
  const subMenu = [
    "View verified companies only",
    "View home-based/remote jobs"
  ]
  const img = (src, width, height, alt, onClick) => {
    return <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      onClick={() => setFilter(onClick)}
    />

  }

  useEffect(() => {
    const target = document.querySelectorAll("#toggle");

    target.forEach((menu) => {
      menu.addEventListener("click", (e) => {
        const path = e.path[2].children[1].style;
        const changeImg = e.path[1].children[1];

        if (path.display !== "flex") {
          (path.display = "flex")

          changeImg.innerHTML = `<Image src=${Less.src} width="21" height="21" alt="less" />`;
        } else {
          (path.display = "none")

          changeImg.innerHTML = `<Image src=${More.src} width="21" height="21" alt="more" />`;
        }


      });
    });
  }, []);

  return (
    <>
      <div className={frs.filterResultContainer}>
        <header>
          {img(Close, "24", "24", "close", false)}
          {img(Logo, "120", "100", "Bossjob", false)}
          <Image src={Clear} width="30" height="30" alt="clear-all" />
        </header>

        <main>
          {menu.map((section) => {
            return <React.Fragment key={section}>
              <div className={frs.industry}>
                <header>
                  <h2>{section}</h2>
                  <div>
                    <Image src={More} width="21" height="21" alt="more" />
                  </div>
                  <span className={frs.overlay} id="toggle"></span>
                </header>
                <div className={frs.industryMore}>

                  {section === "industry"
                    ? <input type="text" placeholder="Search..." />
                    : null}

                  <div className={frs.industyJobList}>
                    {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((x) => {
                      return (
                        <label className={frs.checkbox} key={Math.random()}>
                          <input type="checkbox" />
                          <span>Software Engineer</span>
                        </label>
                      );
                    })}

                  </div>
                </div>
              </div></React.Fragment>
          })}
          <div className={frs.shortFilter}>
            {subMenu.map((section) => {
              return <React.Fragment key={section}>
                <label className={frs.checkbox}>
                  <input type="checkbox" />
                  <span>{section}</span>
                </label>
              </React.Fragment>
            })}
          </div>
        </main>
        <div className={frs.filterResult}>
          <button onClick={() => setFilter(true)}>Filter results</button>
        </div>
      </div>
    </>
  );
};

export default FilterResults;
