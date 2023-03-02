import React, {useEffect, useRef, useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {NEWS_CATEGORIES} from "../../variables/variables";
import {postNews} from "../../store/actions/admin";

const AddNews = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const formData = new FormData();
    let imageForm = useRef();

    const [titleError, setTitleError] = useState(false);
    const [textError, setTextError] = useState(false);
    const [slugError, setSlugError] = useState(false);
    const [imageError, setImageError] = useState(false);
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        setImage(selectedFile);
        setImageError(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title) {
            setTitleError(true);
            return;
        }

        if (!image) {
            setImageError(true);
            return;
        }

        if (!text) {
            setTextError(true);
            return;
        }

        if (!slug) {
            setSlugError(true);
            return;
        }

        formData.append('title', title);
        formData.append('text', text);
        formData.append('slug', slug);
        formData.append('category', category);
        formData.append('publishedAt', event.timeStamp);
        formData.append('image', image);

        dispatch(postNews(formData))

        setTitle('');
        setImage('');
        setText('');
        setSlug('');
        setCategory('');
        imageForm.current.value = '';
    };


    useEffect(() => {
        setTitleError(false);
        setSlugError(false);
        setImageError(false);
    }, [title, slug, image]);

    return (
        <form encType="multipart/form-data"
              onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <TextField
                error={titleError}
                helperText={titleError ? "Title is required" : ""}
                label="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                autoFocus={titleError}
            />
            <div>
                <input
                    ref={imageForm}
                    accept="image/*"
                    id="image-file-input"
                    type="file"
                    name='image'
                    onChange={handleImageChange}
                />
                {imageError && <div style={{color: "red"}}>Image is required</div>}
            </div>
            <TextField
                id="news-text-field"
                label="News Text"
                multiline
                rows={15}
                fullWidth
                variant="outlined"
                value={text}
                onChange={(event) => setText(event.target.value)}
                error={textError}
                helperText={textError ? "Text is required" : ""}
            />
            <TextField
                error={slugError}
                helperText={slugError ? "Slug is required" : ""}
                label="Slug"
                value={slug}
                onChange={(event) => setSlug(event.target.value)}
            />
            <FormControl fullWidth margin="normal">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                    labelId="category-label"
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    {NEWS_CATEGORIES.map((category) => (
                        <MenuItem key={category.id} value={category.type}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                type="submit" variant="contained" color="primary">
                Submit
            </Button>

        </form>

    );

};

export default AddNews;