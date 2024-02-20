import { Link } from "react-router-dom";
import style from "./style.module.css";
import Input from "../Input/Input";

function Authorization() {
  const inpArr = [
    {
      id: 1,
      placeholdervalue: "Enter Email...",
      inpType: "text",
    },
    {
      id: 2,
      placeholdervalue: "Enter Password...",
      inpType: "password",
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.login}>
        <h1>Login</h1>
        {inpArr.map((el) => (
          <Input el={el} />
        ))}
        <Link to={"/listcourses"}>
          <div className={style.btnLogin}>Login</div>
        </Link>
      </div>
      <div className={style.img}></div>
    </div>
  );
}

export default Authorization;
