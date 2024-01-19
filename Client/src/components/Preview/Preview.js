import style from "./style.module.css";

function Preview() {
  return (
    <div className={style.wrapper}>
      <div className={style.previewContent}>
        <div className={style.previewInfo}>
          <p className={style.textPlatforn}>E-COURSE PLATFORM</p>
          <h1>Learning and teaching online, made easy.</h1>
          <p className={style.textAdditional}>
            Any subject, in any language, on any device, for all ages!
          </p>
          <div className={style.btn}>About platform</div>
          <div className={style.statistics}>
            <div className={style.lightningImg}></div>
            <p className={style.studentsCount}>
              600<span>+</span>
            </p>
          </div>
          <p className={style.textStudent}>Students</p>
        </div>
        <div className={style.previewImg}></div>
      </div>

      <div className={style.learnContent}>
        <div className={style.learnImg}></div>
        <div className={style.learmInfo}>
          <h2>Learn a language in a playful way</h2>
          <p>Make learning programming languages more fun with mini-games</p>
          <div className={style.learmImgSet}>
            <div className={style.learnInfoImgPing}></div>
            <div className={style.learnInfoImgBlue}></div>
          </div>
        </div>
      </div>

      <div className={style.knowledgeContent}>
        <div className={style.knowInfo}>
          <h2>Increase your knowledge</h2>
          <p>Traditional and new effective approaches to learning languages</p>
          <div className={style.knowInfoBtn}>Textbook →</div>
        </div>
        <div className={style.knowImg}></div>
      </div>

      <div className={style.progressContent}></div>
    </div>
  );
}

export default Preview;
