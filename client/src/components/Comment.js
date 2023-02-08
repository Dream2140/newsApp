import React from 'react';
import {Avatar, Card, CardContent, CardHeader, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const Comment = ({ author, date, text }) => {

    return (
        <Grid item xs={12}>
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="author">
                           G
                        </Avatar>
                    }
                    title={author}
                    subheader={date}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Comment;