import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./main.module.css";
import Header from "../../components/header/header";

const MainPage = () => {

    const navigate = useNavigate();

    const handlePlayerClick = () => {
        navigate('/session-player');
    }
    const handleOwnerClick = () => {
        navigate('/session-owner');
    }
    return  (
        <div className={style["container"]}>
            <Header/>
            <main className={style["container"]}>
                <section className={style["role-choose"]}>
                    <button className={style["role-btn"]} onClick={handlePlayerClick}>Игр<br/>ок</button>
                    <button className={style["role-btn"]} onClick={handleOwnerClick}>Соз<br/>дат<br/>ель</button>
                </section>
            </main>
        </div>
    )
}

export default MainPage;