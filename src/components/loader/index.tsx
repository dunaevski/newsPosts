import React from 'react';
import styles from "./styles.module.scss";
import {CircularProgress} from "@mui/material";

export const Loader = () => {
    return (
        <div className={styles.Loader}>
            <CircularProgress />
        </div>
    );
};
