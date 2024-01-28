import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";

function ListCourses() {
  const arrObj = [
    {
      name: "JavaScript",
      text: "JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.",
      img: "img1",
    },
    {
      name: "TypeScript",
      text: "TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules",
      img: "img2",
    },
    {
      name: "Python",
      text: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
      img: "img3",
    },
  ];

  const res = arrObj.map((el) => {
    return (
      <div className={style.blockInfo}>
        <div className={style[el.img]}></div>
        <div className={style.information}>
          <h1>{el.name}</h1>
          <div className={style.vector}></div>
          <p>{el.text}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.titleCourses}>
          <div className={style.titleImg}></div>
          <h1>Courses</h1>
        </div>
      </div>
      <div className={style.allInfoBlock}>{res}</div>

      <Footer />
    </>
  );
}

export default ListCourses;
