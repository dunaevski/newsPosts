import {useTheme} from '@mui/material/styles';
import {Card, CardContent, CardHeader, Divider, Typography} from '@mui/material';
import React from "react";

const headerSX = {
    '& .MuiCardHeader-action': {mr: 0}
};

interface MainCardProps {
    border?: boolean
    boxShadow?: boolean
    content?: boolean;
    contentClass?: string;
    contentSX?: any;
    darkTitle?: boolean;
    secondary?: JSX.Element | JSX.Element[];
    shadow?: string;
    sx?: any;
    title?: string;
}

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard: React.FC<MainCardProps> = (
    {
        border = false,
        boxShadow,
        children,
        content = true,
        contentClass = '',
        contentSX = {},
        darkTitle,
        secondary,
        shadow,
        sx = {},
        title,
        ...others
    }) => {
    const theme = useTheme();

    return (
        <Card
            {...others}
            sx={{
                border: border ? '1px solid' : 'none',
                borderColor: theme.palette.primary.light,
                ':hover': {
                    boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                },
                ...sx
            }}
        >
            {!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}
            {darkTitle && title && (
                <CardHeader sx={headerSX}
                            title={<Typography variant="h3">{title}</Typography>}
                            action={secondary} />
            )}

            {/* content & header divider */}
            {title && <Divider />}

            {/* card content */}
            {content && (
                <CardContent sx={contentSX} className={contentClass}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    );
}
export default MainCard;
