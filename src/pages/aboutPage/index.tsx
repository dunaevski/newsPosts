import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import styles from './styles.module.scss'
import MainCard from "../../components/mainCard/mainCard";
import {Typography} from "@mui/material";

const AboutPage = () => {
    return (
        <div className={styles.Container}>
            <YMaps>
                <div>
                    <Map
                        defaultState={{
                            center: [55.751574, 37.573856],
                            zoom: 5,
                        }}
                        width={1000}
                        height={730}
                    >
                        <Placemark geometry={[55.684758, 37.738521]} />
                        <Placemark geometry={[55.751574, 37.573856]} />
                    </Map>
                </div>
            </YMaps>

            <div className={styles.Card}>
                {'Who We  Are ?'.split('  ').map((el, i) => {
                    return (
                        <MainCard title={el} boxShadow sx={{maxWidth: 300, m: 5}} key={i}>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut
                                laborers et doolie magna alissa. Ut enif
                                ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea
                                commons construal. Duos aube grue dolor in
                                reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin
                                ocean cuspidate non president, sunk in culpa
                                qui officiate descent molls anim id est labours.
                            </Typography>
                        </MainCard>
                    )
                })}
            </div>

        </div>
    );
};

export default AboutPage;
