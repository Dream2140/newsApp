import React from 'react';
import {Card, CardContent, CardMedia, Skeleton} from "@mui/material";
import Typography from "@mui/material/Typography";

const NewsCard = ({loading, imageUrl, title, description}) => (
    loading ? (
        <Card sx={{maxWidth: 345, height: '100%', justifyContent: 'space-between'}}>

            <Skeleton animation="wave" width={'100%'} height={140}/>
            <CardContent>
                <Skeleton animation="wave" width={'80%'} height={90}/>
                <Skeleton animation="wave" width={'100%'} height={100}/>
            </CardContent>
        </Card>
    ) : (
        <Card sx={{maxWidth: 345, height: '100%'}}>
            <CardMedia
                image={imageUrl}
                title={title}
                sx={{height: 140}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description.substring(0, 150)}
                </Typography>
            </CardContent>
        </Card>
    )
);


export default NewsCard;