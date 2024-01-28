import { Link } from "react-router-dom";
import style from "./style.module.css";

function Registration() {
  return (
    <div className={style.wrapper}>
      <div className={style.singUp}>
        <h1>Sign Up</h1>
        <input placeholder="Placeholder text"></input>
        <input placeholder="Placeholder text"></input>
        <input placeholder="Placeholder text"></input>
        <input placeholder="Placeholder text"></input>
        <Link to={"/listcourses"}>
          <div className={style.btnSingUp}>Sign Up</div>
        </Link>
      </div>
      <div className={style.img}></div>
    </div>
  );
}

export default Registration;
