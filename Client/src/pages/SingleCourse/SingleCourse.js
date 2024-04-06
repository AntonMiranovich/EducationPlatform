import style from "./style.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

function SingleCourse() {
    const { id } = useParams()

    const [languages, setLanguages] = useState([{}])

    async function getLenguagesbyId() {
        const response = await axios.get(`http://localhost:3001/course/${id}`)
        setLanguages(response.data)
    }

    useEffect(() => {
        getLenguagesbyId()
    }, [])

    return (
        <>
            <Header />
            <div className={style.allBoxs}>

                <div className={style.boxInfo}>
                    <div className={style.infoBlock}>
                        <div className={style.img}></div>
                        <div className={style.info}>
                            <h1>{languages[0].course}</h1>
                            <p>{languages[0].description}</p>
                        </div>
                    </div>
                    <button>Go to course</button>
                </div>

                <div className={style.boxLessons}>
                    <h1>15 lessons</h1>
                    <ol>
                        <li>1.Test</li>
                        <li>2.Test</li>
                        <li>3.Test</li>
                        <li>4.Test</li>
                        <li>5.Test</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SingleCourse;