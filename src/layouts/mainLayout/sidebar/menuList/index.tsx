import React from "react";
import {Divider, List, Typography} from '@mui/material';
import {menuData} from "../../../../mockData"
import MenuItem from "../menuItem";
import {MenuItemType} from "../../../../types/menuItem";

const MenuList: React.FC = () => {
    const renderItems = (items: MenuItemType[]) => {
        return items.map(item => {
            return (<MenuItem key={item.id} item={item} />);
        })
    }

    const navItems = menuData.map((item, index) => {
        return (
            <React.Fragment key={index}>
                <List
                    subheader={
                        item.title && (
                            <Typography variant="caption" sx={{
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                padding: '6px',
                                textTransform: 'capitalize',
                                marginTop: '10px'
                            }} display="block" gutterBottom>
                                {item.title}
                            </Typography>
                        )
                    }
                >
                    {renderItems(item.children)}
                </List>

                <Divider sx={{mt: 0.25, mb: 1.25}} />
            </React.Fragment>

        )
    });

    return <>{navItems}</>;
};

export default MenuList;
