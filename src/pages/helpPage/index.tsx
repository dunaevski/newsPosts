import React from 'react';
import { Typography } from '@mui/material';
import styles from './styles.module.scss'
import MainCard from "../../components/mainCard/mainCard";

const HelpPage = () => {
    return (
        <div className={styles.Container}>
            <MainCard title="Help" boxShadow>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                    ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                    reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                    qui officiate descent molls anim id est labours.
                </Typography>
            </MainCard>
        </div>
    );
};

export default HelpPage;