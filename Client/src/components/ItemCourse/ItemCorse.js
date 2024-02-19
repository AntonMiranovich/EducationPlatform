import style from "./style.module.css";

function ItemCourse() {
  const languages = [
    {
      id: 1,
      course: "JavaScript",
      description:
        "JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.",
      img: "img1",
    },
    {
      course: "TypeScript",
      description:
        "TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules",
      img: "img2",
    },
    {
      course: "Python",
      description:
        "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
      img: "img3",
    },
  ];

  return (
    <div className={style.allInfoBlock}>
      {languages.map((el, index) => (
        <div key={index} className={style.blockInfo}>
          <div className={style[el.img]}></div>
          <div className={style.information}>
            <h1>{el.course}</h1>
            <div className={style.vector}></div>
            <p>{el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCourse;
