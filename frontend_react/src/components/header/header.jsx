import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./header.module.css";

const Header = () => {

    const navigate = useNavigate();
    
    const handQuitClick = () => {
        navigate('/');
    }

    return  (
        <header className={style["header"]}>
          <button className={style["header-button"]} onClick={handQuitClick}><h1 className={style["page-title"]}>kapoot?</h1></button>
        </header>
    )
}

export default Header;