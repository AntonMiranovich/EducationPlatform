import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Input from "../../components/Input/Input";

function RegistrationPage() {
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
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.singUp}>
          <h1>Sign Up</h1>
          {inpArr.map((el,index) => (
            <Input key={index} el={el} />
          ))}

          <div className={style.btnSingUp}>
            <Link to={"/listcourses"}>Sign Up </Link>
          </div>
        </div>
        <div className={style.img}></div>
      </div>
      <Footer />
    </>
  );
}

export default RegistrationPage;
