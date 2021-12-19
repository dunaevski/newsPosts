import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea} from "@mui/material";
import {Tags} from "../../types/apiResponse";
import {cutText} from "../../helpers/misc";

interface NewsCardsProps {
    title: string;
    description: string;
    cover: string;
    tags: Tags;
    publishedAt: string;
    url: string;
}

export default function NewsCard({title, description, cover, tags, publishedAt, url}: NewsCardsProps) {
    const handleClick = () => {
        window.open(url);
    }

    const renderSubHeader = () => {
        const date = new Date(publishedAt).toLocaleDateString()
        return (
            <div>
                <Typography color="text.secondary">
                    {date} {tags.name}
                </Typography>
            </div>
        )
    }

    return (
        <Card sx={{maxWidth: 400, margin: 3}}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="194"
                    image={cover}
                    alt={title}
                />
            </CardActionArea>
            <CardHeader
                title={cutText(title)}
                subheader={renderSubHeader()}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {cutText(description, 150)}
                </Typography>
            </CardContent>
        </Card>
    );
}
