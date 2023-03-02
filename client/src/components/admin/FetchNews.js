import React from 'react';
import {Button, CircularProgress, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {isAdminLoading} from "../../store/accessors/admin";
import {fetchExternalNews} from "../../store/actions/admin";

const FetchNews = () => {
    const loading = useSelector(isAdminLoading);
    const dispatch = useDispatch();
    const handleCybersportSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchExternalNews(e.target.dataset.site));
    }
    const handleGuardianSubmit = (e) => {
        dispatch(fetchExternalNews(e.target.dataset.site));
        e.preventDefault();
    }

    return (
        <Container>
            <h2>Fetch news form other sites</h2>
            <form data-site="cybersport" onSubmit={handleCybersportSubmit}>
                <h3>Cybersport</h3>
                <Button
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    sx={{position: 'relative'}}
                >
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px'
                            }}
                        />
                    )}
                    Fetch news
                </Button>
            </form>
            <form data-site="guardian" onSubmit={handleGuardianSubmit}>
                <h3>Guardian</h3>
                <Button
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    sx={{position: 'relative'}}
                >
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px'
                            }}
                        />
                    )}
                    Fetch news
                </Button>
            </form>
        </Container>
    );
};

export default FetchNews;