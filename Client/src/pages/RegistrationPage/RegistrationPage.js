import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Input from "../../components/Input/Input";
import { useState } from "react";
import axios from "axios";

function RegistrationPage() {
  const [inp, setInp] = useState({});

  async function requestToTheServer() {
    try {
      if (!inp.name || !inp.surname || !inp.email || !inp.pwd)
        throw new Error("You have not filled the necessary fields");

      if (inp.pwd !== inp.confPwd)
        throw new Error("You repeated the foal incorrectly");

      const response = await axios.post("http://localhost:3001/api/reg", inp);
      console.log(response);
    } catch (error) {
      alert(error.message);
    }
  }

  const inpArr = [
    {
      id: 1,
      placeholdervalue: "Enter Name...",
      inpType: "text",
      name: "name",
    },
    {
      id: 2,
      placeholdervalue: "Enter Surname...",
      inpType: "text",
      name: "surname",
    },
    {
      id: 3,
      placeholdervalue: "Enter Email...",
      inpType: "text",
      name: "email",
    },
    {
      id: 4,
      placeholdervalue: "Enter Password...",
      inpType: "password",
      name: "pwd",
    },
    {
      id: 5,
      placeholdervalue: "Enter ConfirmPassword...",
      inpType: "password",
      name: "confPwd",
    },
  ];

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.singUp}>
          <h1>Sign Up</h1>
          {inpArr.map((el, index) => (
            <Input key={index} inp={inp} setInp={setInp} el={el} />
          ))}

          <div onClick={requestToTheServer} className={style.btnSingUp}>
            <Link to={"/auth"}>Sign Up </Link>
          </div>
        </div>
        <div className={style.img}></div>
      </div>
      <Footer />
    </>
  );
}

export default RegistrationPage;
