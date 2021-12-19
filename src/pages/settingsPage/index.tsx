import React from 'react';
import styles from './styles.module.scss'
import {
    Box,
    FormControl,
    Grid, IconButton, InputLabel, MenuItem,
    Select, Slider,
    Typography
} from '@mui/material';
import {useTheme} from "@mui/material/styles";
import {RootState} from '../../app/store'
import {useSelector, useDispatch} from 'react-redux'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {setCountNews, setFontSize, setTheme} from '../../app/slices/settings/settingsSlice'
import MainCard from "../../components/mainCard/mainCard";

const SettingsPage = () => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const {fontSize, countNews, theme: siteTheme} = useSelector((state: RootState) => state.settings)

    return (
        <div className={styles.Container}>
            <MainCard title="Site Theme" sx={{my: 2}}>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3,
                    }}
                >
                    {theme.palette.mode} mode
                    <IconButton sx={{ ml: 1 }} onClick={() => dispatch(setTheme(siteTheme === 'dark' ? "light" : 'dark'))} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </MainCard>
            <MainCard title="Font Size" sx={{my: 2}}>
                <Grid item xs={12} container spacing={2} alignItems="center" sx={{mt: 2.5}}>
                    <Grid item>
                        <Typography variant="h6" color="primary">
                            4px
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Slider
                            size="small"
                            value={fontSize}
                            onChange={(evt, newValue) => dispatch(setFontSize(newValue as number))}
                            valueLabelDisplay="on"
                            aria-labelledby="discrete-slider-small-steps"
                            marks
                            step={2}
                            min={4}
                            max={24}
                            color="primary"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" color="primary">
                            24px
                        </Typography>
                    </Grid>
                </Grid>
            </MainCard>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">News on page</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={countNews}
                        label="News on page"
                        onChange={(evt) => dispatch(setCountNews(evt.target.value as number))}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default SettingsPage;
