import styles from "../styles/Global";
import React from "react";
import assets from "../assets";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SectionWrapper = ({
  title,
  description,
  showLogo,
  graphicImg,
  banner,
  reverse,
  titleRef,
  descRef,
}) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (titleRef) {
      const itemsToAnimate = [titleRef.current, descRef.current];
      gsap.fromTo(
        itemsToAnimate,

        {
          opacity: 0,
          ease: "none",
        },
        {
          opacity: 1,
          ease: "none",

          duration: 0.5,
          stagger: 0.5,

          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=200",

            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd-3/4`}
      >
        <div
          className={`${styles.descDiv} this_div_is_the_enclosing_div 
          ${reverse ? "fadeRightMini" : "fadeLeftMini"}

          `}
        >
          <div className="section__wrapper_container">
            {showLogo && (
              <img
                src={assets.round_logo}
                className="section_wrapper__logo_image"
              />
            )}

            <div className="section_wrapper__text_container">
              <h1
                ref={titleRef}
                className={`${styles.h1Text}
          
          ${reverse ? styles.blackText : styles.whiteText}`}
              >
                {title}
              </h1>
              <p
                ref={descRef}
                className={`
           
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
        {graphicImg && (
          <div
            className={`flex-1 ${styles.flexCenter} p-8 sm:px-0
         ${reverse ? "fadeLeftMini" : "fadeRightMini"}
        `}
          >
            <img src={graphicImg} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper;
