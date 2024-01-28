import { Link } from "react-router-dom";
import style from "./style.module.css";

function Authorization() {
  return (
    <div className={style.wrapper}>
      <div className={style.login}>
        <h1>Login</h1>
        <input placeholder="Placeholder text"></input>
        <input placeholder="Placeholder text"></input>
        <Link to={"/listcourses"}>
          <div className={style.btnLogin}>Login</div>
        </Link>
      </div>
      <div className={style.img}></div>
    </div>
  );
}

export default Authorization;
