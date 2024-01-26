import style from "./style.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.glob}>
      <div className={style.wrapper}>
        <h1> <Link to={"/"}>Hschool</Link></h1>
        <div className={style.btns}>
          <div className={style.login}>
            <Link to={"/auth"}>Login →</Link>
          </div>
          <div className={style.reg}>
            <Link to={"/reg"}>Sign Up</Link>
          </div>
        </div>
      </div>
      <div className={style.lineHeader}></div>
    </div>
  );
}

export default Header;
