import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Routes from './routes';
import {useSelector} from "react-redux";
import {RootState} from "./app/store";

function App() {
    const {theme: mode, fontSize} = useSelector((state: RootState) => state.settings)
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                typography: {
                    fontSize
                }
            }),
        [mode, fontSize],
    );

    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}

export default App;
