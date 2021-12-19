import React from "react";
import {Link} from "react-router-dom";
import styles from './styles.module.scss'
import {ListItemButton, ListItemText, Typography} from '@mui/material';
import {MenuItemType} from "../../../../types/menuItem";

interface MenuItemProps {
    item: MenuItemType
}

const MenuItem: React.FC<MenuItemProps> = ({item}) => {
    return (
        <Link to={item.url} className={styles.Link}>
            <ListItemButton
                sx={{
                    borderRadius: `20px`,
                    mb: 0.5,
                    alignItems: 'flex-start',
                    py: 1.25,
                    pl: `24px`
                }}
                selected={/*customization.isOpen.findIndex((id) => id === item.id) > -1*/ false}
                onClick={() => {
                }}
            >
                <ListItemText
                    primary={
                        <Typography variant={/*customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' :*/ 'body1'}
                                    color="inherit">
                            {item.title}
                        </Typography>
                    }
                />
            </ListItemButton>
        </Link>
    );
};


export default MenuItem;
