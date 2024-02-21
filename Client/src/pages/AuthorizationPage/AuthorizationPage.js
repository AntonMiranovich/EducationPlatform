import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Input from "../../components/Input/Input";

function AuthorizationPage() {
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
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.login}>
          <h1>Login</h1>
          {inpArr.map((el, index) => (
            <Input key={index} el={el} />
          ))}
          <Link to={"/listcourses"}>
            <div className={style.btnLogin}>Login</div>
          </Link>
        </div>
        <div className={style.img}></div>
      </div>

      <Footer />
    </>
  );
}

export default AuthorizationPage;
