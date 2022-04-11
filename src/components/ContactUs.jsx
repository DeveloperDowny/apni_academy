import styles from "../styles/Global";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ContactUs = ({ banner, reverse, titleRef, descRef }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (titleRef) {
      const itemsToAnimate = [
        titleRef.current,
        descRef.current,
        ".made_by__container",
      ];
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
          stagger: 0.25,

          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  return (
    <div className={`${banner} ${styles.contactUs} contact_us__container`}>
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${reverse ? "fadeRightMini" : "fadeLeftMini"}

          `}
        >
          <div className="contact_ur_container">
            <div className="contact_ur__text_container">
              <h1
                ref={titleRef}
                className={`${styles.h1Text}
          
          ${reverse ? styles.blackText : styles.whiteText}`}
              >
                Contact Us
              </h1>
              <p
                ref={descRef}
                className={`
           
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
              >
                Location:
                <br />
                8th Floor, Sardar Patel Technology Business Incubator, Bharatiya
                Vidya Bhavans Sardar Patel Institute of Technology Munshi Nagar,
                Andheri (West), Mumbai 400 058
                <br />
                <br />
                Email: <br />
                <a href="mailto:vtvaibhavtyagi@gmail.com">
                  vtvaibhavtyagi@gmail.com
                </a>
              </p>
              <div className={`${styles.flexCenter} made_by__container`}>
                <p className={`${styles.madeByText} ${styles.whiteText}`}>
                  Website built by{" "}
                  <a
                    href="https://www.linkedin.com/in/vedant-panchal-b1480619b"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="italic underline made_by__name">
                      Vedant Panchal
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
