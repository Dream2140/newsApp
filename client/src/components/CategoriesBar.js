import React from 'react';
import {Container, Grid, ListItem, ListItemText} from "@mui/material";
import {useDispatch} from "react-redux";
import {changeNewsCategory} from "../store/actions/news";
import {NEWS_CATEGORIES} from "../variables/variables";

const CategoriesBar = () => {
    const dispatch = useDispatch();

    const handleClick = (category) => {
        dispatch(changeNewsCategory(category))
    }

    return (
        <Container>
            <Grid container style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {NEWS_CATEGORIES.map((category) => (
                    <Grid item key={category.id}>
                        <ListItem button>
                            <ListItemText onClick={() => handleClick(category.type)} primary={category.name}/>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CategoriesBar;