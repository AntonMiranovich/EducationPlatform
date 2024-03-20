import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Input from "../../components/Input/Input";
import { useState } from "react";
import axios from "axios";

function AuthorizationPage() {
  const [inp, setInp] = useState({ email: "", pwd: "" });

  async function clickButton() {
    const response = await axios.post("http://localhost:3001/api/auth", inp, {
      withCredentials: true,
    });
    console.log(response);
  }

  const inpArr = [
    {
      id: 1,
      placeholdervalue: "Enter Email...",
      inpType: "text",
      name: "email",
    },
    {
      id: 2,
      placeholdervalue: "Enter Password...",
      inpType: "password",
      name: "pwd",
    },
  ];

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.login}>
          <h1>Login</h1>
          {inpArr.map((el, index) => (
            <Input key={index} inp={inp} setInp={setInp} el={el} />
          ))}
          <Link to={"/listcourses"}>
            <div onClick={clickButton} className={style.btnLogin}>
              Login
            </div>
          </Link>
        </div>
        <div className={style.img}></div>
      </div>

      <Footer />
    </>
  );
}

export default AuthorizationPage;
