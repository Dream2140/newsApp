import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Card, CardContent, CardMedia, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import axios from "axios";
import {COMMENT_API} from "../variables/variables";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";



const Article = ({location}) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const {state} = useLocation();
    const {id, title,text, image}=state
    const COMMENTS_LIST_URL = COMMENT_API+ 'news-coments/'+id;
    const [comments,setComments] = useState([]);
    const fetchComments = async ()=>{
        const response = await axios.get(COMMENTS_LIST_URL,{id})

        setComments(response.data);
    }
    useEffect( ()=>{
        fetchComments()
    },[])


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

                <Grid container spacing={2}>
                    {isAuthenticated&&<CommentForm/>}

                    { comments.length ?(   comments.map((comment, index) => (

                        <Comment key={comment._id} author={comment.author} date={comment.publishedAt} text={comment.content} />
                    ))):(
                        <Box>There are no comment yet</Box>
                    )}
                </Grid>

            </Container>
    );
};

export default Article;