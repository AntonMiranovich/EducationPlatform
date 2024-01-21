import style from "./style.module.css";

function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.footerInfo}>
        <div className={style.navigationFooter}>
          <p>Home</p>
          <p>Textbook</p>
          <p>Statistics</p>
          <p>Sprint</p>
        </div>
        <div className={style.nameFooter}>
          <p>Alex</p>
          <p>Gabriel</p>
          <p>Marcus</p>
        </div>
      </div>

      <div className={style.bandFooter}></div>
      <div className={style.linkFooter}>
        <div className={style.link}>
          <div className={style.linkCat}></div>
          <div className={style.linkGt}></div>
          <div className={style.linkYou}></div>
        </div>
        <p className={style.developer}>©2021 Hschool. Project for Hschool</p>
      </div>
    </div>
  );
}

export default Footer;
