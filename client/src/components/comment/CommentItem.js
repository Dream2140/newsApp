import React from 'react';
import {Avatar, Card, CardContent, CardHeader, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Helper from "../../helpres/Helper";

const CommentItem = ({nickname, date, text}) => {

    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="author">
                            {nickname[0]}
                        </Avatar>
                    }
                    title={nickname}
                    subheader={Helper.formatDate(date)}
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

export default CommentItem;