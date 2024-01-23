import style from "./style.module.css";

function HeaderOut() {
  return (
    <div className={style.glob}>
      <div className={style.wrapper}>
        <h1>Hschool</h1>
        <div className={style.signOut}>Sign Out →</div>
      </div>
      <div className={style.lineHeader}></div>
    </div>
  );
}

export default HeaderOut;
