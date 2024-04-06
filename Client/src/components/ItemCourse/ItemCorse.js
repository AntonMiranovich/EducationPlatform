import { useEffect, useState } from "react";
import style from "./style.module.css";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import axios from 'axios'

function ItemCourse() {
  const [languages, setLanguages] = useState([{}])

  async function getLenguages() {
    const response = await axios.get('http://localhost:3001/course')
    setLanguages(response.data)
  }

  useEffect(() => {
    getLenguages()
  }, [])

  const [itemOnThePage] = useState(3);
  const [paginalPageNumber, setPaginalPageNumber] = useState(1);

  const displayedArray = languages.slice(
    itemOnThePage * paginalPageNumber - itemOnThePage,
    itemOnThePage * paginalPageNumber
  );

  return (
    <div className={style.allInfoBlock}>
      {displayedArray.map((el, index) => (
        <Link to={`/${el.id}`} key={index}>
          <div className={style.blockInfo}>
            <div className={style.img1}></div>
            <div className={style.information}>
              <h1>{el.course}</h1>
              <div className={style.vector}></div>
              <p>{el.description}</p>
            </div>
          </div>
        </Link>
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
