import styles from "../styles/Global";

const FounderIntro = ({ founderImg, name }) => {
  return (
    <div className={`flex-col mt-5 ml-5 mr-5 founder_intro__container`}>
      <img
        src={founderImg}
        alt="founder_img"
        width={200}
        height={200}
        className="founder_intro__image"
      />
      <p className={`${styles.founderNameText} founder_intro__p`}>{name}</p>
    </div>
  );
};

export default FounderIntro;
