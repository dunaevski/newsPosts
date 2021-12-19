import React from "react";
import {BrowserView, MobileView, isBrowser} from 'react-device-detect';
import {useTheme} from '@mui/material/styles';
import {Box, Drawer} from '@mui/material';
import MenuList from "./menuList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {setOpen} from "../../../app/slices/layout/layoutSlice";

const Sidebar: React.FC = () => {
    const dispatch = useDispatch()
    const theme = useTheme();
    const isOpen = useSelector((state: RootState) => state.layout.isOpen)

    const drawer = (
        <>
            <BrowserView>
                <div style={{
                    height: !isBrowser ? 'calc(100vh - 56px)' : 'calc(100vh - 90px)',
                    paddingLeft: '16px',
                    paddingRight: '16px'
                }}
                >
                    <MenuList />
                </div>
            </BrowserView>
            <MobileView>
                <Box sx={{px: 2}}>
                    <MenuList />
                </Box>
            </MobileView>
        </>
    );

    return (
        <Box component="nav"
             sx={{flexShrink: {md: 0}, width: isBrowser ? 260 : 'auto'}}
             aria-label="mailbox folders">
            <Drawer
                variant={isBrowser ? 'persistent' : 'temporary'}
                anchor="left"
                transitionDuration={500}
                open={isOpen}
                onClose={() => dispatch(setOpen(false))}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 260,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '80px'
                        }
                    }
                }}
                ModalProps={{keepMounted: true}}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Sidebar;
