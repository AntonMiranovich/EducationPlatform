import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemCourse from "../../components/ItemCourse/ItemCorse";
import style from "./style.module.css";

function ListCourses() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.titleCourses}>
          <div className={style.titleImg}></div>
          <h1>Courses</h1>
        </div>
      </div>
      <ItemCourse/>

      <Footer />
    </>
  );
}

export default ListCourses;
