import React, {useState} from 'react';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import {Paper} from "@mui/material";
import {useDispatch} from "react-redux";
import {searchNews} from "../../store/actions/news";

const SearchBar = () => {
    const [query, setQuery] = useState();
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        e.preventDefault();

        dispatch(searchNews(query))
    }
    return (
        <>
            <Paper component="form" style={{
                padding: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                marginLeft: '24px',
                position: 'relative'

            }}>
                <InputBase
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    placeholder="Search Keywords"
                    inputProps={{"aria-label": "search google maps"}}
                    style={{flex: 1}}

                />
                <IconButton
                    style={{padding: 10}}
                    type="submit"
                    aria-label="search"
                    onClick={handleSearch}
                >
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </>
    );
};

export default SearchBar;