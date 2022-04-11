import { useEffect, useRef } from "react";
import assets from "./assets";
import { SectionWrapper, FounderIntro, ContactUs } from "./components";
import styles from "./styles/Global";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      [".foundersTitleText", ".founder_intro__container"],

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
          trigger: ".foundersTitleText",
          start: "top bottom-=200",
        },
      }
    );
  });

  return (
    <>
      <div className="app__apni_academy__container">
        <SectionWrapper
          title="Apni Academy"
          description="DEMOCRATISE EDUCATION"
          banner="banner"
          showLogo
        />
        <img
          src={assets.education_illustrations}
          className="app__apni_academy_section_wrapper__image"
        ></img>
      </div>

      <SectionWrapper
        title="Our Mission"
        description="Democratise access to high quality education."
        graphicImg={assets.our_mission}
        reverse
        titleRef={useRef(null)}
        descRef={useRef(null)}
      />

      <div className={`banner03 ${styles.flexCenter} flex-col text-white`}>
        <h1 className={`${styles.h1Text} mt-10 foundersTitleText`}>Founders</h1>
        <div className={`${styles.flexTop}`}>
          <FounderIntro founderImg={assets.v_t} name="Vaibhav Tyagi (CEO)" />
          <FounderIntro founderImg={assets.m_k} name="Mahesh Kutty (CTO)" />
          <FounderIntro founderImg={assets.d_p} name="Dhawal Patil (CFO)" />
        </div>
      </div>

      <SectionWrapper
        title="About Us"
        description="We are working on a disruptive educational platform. It will
totally change the way education is delivered to everyone.
It is a highly scalable model that directly creates value for
100 million students."
        graphicImg={assets.about_us_final}
        reverse
        titleRef={useRef(null)}
        descRef={useRef(null)}
      />
      <ContactUs
        banner={"banner04"}
        titleRef={useRef(null)}
        descRef={useRef(null)}
      />
    </>
  );
};

export default App;
