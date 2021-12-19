import React from "react";
import {Box, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from "react-redux";
import {toggleMenuOpen} from "../../../app/slices/layout/layoutSlice";

const Header = () => {
    const dispatch = useDispatch()
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: 80,
                padding: '0 24px',
            }}
        >
            <IconButton aria-label="menuIcon" onClick={() => dispatch(toggleMenuOpen())} size={'large'}>
                <MenuIcon />
            </IconButton>
        </Box>
    );
};

export default Header;
