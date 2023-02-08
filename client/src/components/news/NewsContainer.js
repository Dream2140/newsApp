import React, {useEffect, useState} from 'react';
import {Card, Container, Grid, Skeleton} from "@mui/material";
import NewsCard from "./NewsCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import {LIMIT_OF_NEWS, NEWS_API} from "../../variables/variables";
import {Link} from "react-router-dom";


const NewsContainer = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasNextPage, setHasNextPage] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        const start = Date.now();
        const response = await axios.get(NEWS_API, {
            params: {
                limit: LIMIT_OF_NEWS,
                page: page
            }
        });
        const duration = Date.now() - start;
        const delay = duration < 500 ? 300 : 0;

        setTimeout(() => {
            setNews(news.concat(response.data.docs));
            setHasNextPage(response.data.hasNextPage);
            setLoading(false);
        }, delay);
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop
            !== document.documentElement.offsetHeight
        ) {
            return;
        }

        if (loading || !hasNextPage) {
            return;
        }
        setPage(page + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <>
            <InfiniteScroll
                dataLength={news.length}
                next={() => setPage(page + 1)}
                hasMore={hasNextPage}

            >
                <Container sx={{marginTop: '100px', marginBottom: '100px'}}>

                    <Grid container spacing={3}>
                        {(loading ? Array.from(new Array(8)) : news).map((newsItem, index) => (

                            newsItem ? (

                                <Grid item xs={12} sm={6} md={4} lg={3} key={newsItem._id}>
                                    <Link to={`/article/${newsItem.slug}`} state={{...newsItem}} style={{textDecoration: 'none'}}>
                                        <NewsCard
                                            loading={false}
                                            imageUrl={newsItem.image}
                                            title={newsItem.title}
                                            description={newsItem.text}
                                        />
                                    </Link>
                                </Grid>

                            ) : (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <NewsCard
                                        loading={true}
                                    />
                                </Grid>
                            )
                        ))}
                    </Grid>
                </Container>
            </InfiniteScroll>
        </>
    );
};

export default NewsContainer;