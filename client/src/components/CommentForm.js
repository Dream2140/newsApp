import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import axios from "axios";
import {COMMENT_API} from "../variables/variables";
import Box from "@mui/material/Box";
import {useLocation} from "react-router-dom";

const CommentForm = () => {
    const {state} = useLocation();
    const {id}=state
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();
        await axios.post(COMMENT_API, {

            content: text,
            userId: 'b5849ae9-7eca-4173-ab97-1c5cd2edbd4b',
            newsId: id,
            publishedAt: Date.now().toString()

        })

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <Box sx={{width:'100%'}}>
            <TextField
                label="Comment"
                value={text}
                onChange={(e) => setText(e.target.value)}
                multiline
                rows={1}

            />
            </Box>
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Submit
            </Button>
        </form>
    );
};

export default CommentForm;