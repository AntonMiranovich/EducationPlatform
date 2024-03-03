import { useState } from "react";
import style from "./style.module.css";
import Pagination from "@mui/material/Pagination";

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
      id: 2,
      course: "TypeScript",
      description:
        "TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules",
      img: "img2",
    },
    {
      id: 3,
      course: "Python",
      description:
        "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
      img: "img3",
    },
    {
      id: 4,
      course: "Ruby",
      description:
        "Ruby is a dynamic, object-oriented programming language known for its simplicity and readability. It has a strong focus on programmer happiness with its elegant syntax and powerful metaprogramming capabilities. Ruby is often used for web development and scripting tasks due to its extensive library ecosystem and Rails framework.",
      img: "img3",
    },
    {
      id: 5,
      course: "Swift",
      description:
        "Swift is a modern, powerful programming language developed by Apple. It is designed for iOS, macOS, watchOS, and tvOS app development. Swift offers a clean syntax, type inference, and safety features, making it efficient and easy to learn. It supports both object-oriented and functional programming paradigms..",
      img: "img2",
    },
    {
      id: 6,
      course: "C++",
      description:
        "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
      img: "img1",
    },
    {
      id: 7,
      course: "C#",
      description:
        "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
      img: "img3",
    },
  ];

  const [itemOnThePage] = useState(3);
  const [paginalPageNumber, setPaginalPageNumber] = useState(1);

  const displayedArray = languages.slice(
    itemOnThePage * paginalPageNumber - itemOnThePage,
    itemOnThePage * paginalPageNumber
  );

  return (
    <div className={style.allInfoBlock}>
      {displayedArray.map((el, index) => (
        <div key={index} className={style.blockInfo}>
          <div className={style[el.img]}></div>
          <div className={style.information}>
            <h1>{el.course}</h1>
            <div className={style.vector}></div>
            <p>{el.description}</p>
          </div>
        </div>
      ))}
      <Pagination
        className={style.pagination}
        count={Math.ceil(languages.length / itemOnThePage)}
        onChange={(event, value) => setPaginalPageNumber(value)}
        color="primary"
      />
    </div>
  );
}

export default ItemCourse;
