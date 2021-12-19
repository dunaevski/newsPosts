import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import styles from './styles.module.scss'
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

const MainLayout = () => {
    const siteTheme = useSelector((state: RootState) => state.settings.theme)
    const isOpen = useSelector((state: RootState) => state.layout.isOpen)

    const mainStyles = [styles.MainContainer];

    if (isOpen) {
        mainStyles.push(styles.Open)
    }
    mainStyles.push(siteTheme === 'dark' ? styles.BlackMode : styles.WhiteMode)

    return (
        <>
            <Header />
            <Sidebar />
            <Box
                sx={{
                    bgcolor: 'background.default',
                    minHeight: 'calc(100vh - 56px)'
                }}
            >
                <main className={mainStyles.join(' ')}>
                    <Outlet />
                </main>
            </Box>
        </>
    );
};

export default MainLayout;
