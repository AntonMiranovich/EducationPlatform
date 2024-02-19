import { Link } from "react-router-dom";
import style from "./style.module.css";
import Input from "../Input/Input";

function Registration() {
  const inpArr = [
    {
      id: 1,
      placeholdervalue: "Enter Name...",
      inpType: "text",
    },
    {
      id: 2,
      placeholdervalue: "Enter Surname...",
      inpType: "text",
    },
    {
      id: 3,
      placeholdervalue: "Enter Email...",
      inpType: "text",
    },
    {
      id: 4,
      placeholdervalue: "Enter Password...",
      inpType: "password",
    },
    {
      id: 5,
      placeholdervalue: "Enter ConfirmPassword...",
      inpType: "password",
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.singUp}>
        <h1>Sign Up</h1>
        {inpArr.map((el) => (
          <Input el={el} />
        ))}

        <div className={style.btnSingUp}>
          <Link to={"/listcourses"}>Sign Up </Link>
        </div>
      </div>
      <div className={style.img}></div>
    </div>
  );
}

export default Registration;
