import React from 'react';

//styles
import styles from "./Loading.module.css";

//Gif
import gif from "../../Gif/loading-gif.gif";

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={gif} alt="loading" />
            <h1>LOADING...</h1>
        </div>
    );
};

export default Loading;