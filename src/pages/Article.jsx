import {useLocation} from "react-router-dom";
import {Card, CardContent, CardMedia, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import CommentsList from "../components/comment/CommentsList";
import React from 'react';

const Article = () => {
    const {state} = useLocation();
    const {id, title, text, image} = state;

    return (
        <Container>

            <Grid container spacing={3} sx={{marginTop: '100px', marginBottom: '100px'}}>
                <Grid item xs={12}>
                    <Card>
                        <CardMedia
                            sx={{height: 440}}
                            image={image}
                            title="News Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <CommentsList newsId={id}/>
        </Container>
    );
};

export default Article;