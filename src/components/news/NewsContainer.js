import React, {useEffect, useMemo, useState} from 'react';
import {Container, Grid} from "@mui/material";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {LIMIT_OF_NEWS} from "../../variables/variables";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    getNews,
    getSearch,
    hasNewsError,
    hasNextNewsPage,
    isNewsLoading,
    selectedCategory
} from "../../store/accessors/news";
import {fetchNews} from "../../store/actions/news";


const NewsContainer = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const news = useSelector(getNews);
    const loading = useSelector(isNewsLoading);
    const error = useSelector(hasNewsError);
    const search = useSelector(getSearch);

    const category = useSelector(selectedCategory);
    const nextPage = useSelector(hasNextNewsPage);

    const params = useMemo(() => ({
        limit: LIMIT_OF_NEWS,
        page,
        category
    }), [page, category]);

    useEffect(() => {

        dispatch(fetchNews(params));
    }, [dispatch, params, category]);

    const newsList = useMemo(() => {
        if (category !== "all") {
            return news.filter((newsItem) => newsItem.category[0] === category);
        } else if (search) {
            return news;
        } else {
            return news;
        }
    }, [news, category, search]);

    return (
        <>
            {error && <Container>{error}</Container>}
            <InfiniteScroll
                dataLength={news.length}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>No more news yet</b>
                    </p>
                }
                next={() => setPage(page + 1)}
                hasMore={nextPage}
            >
                <Container sx={{marginBottom: "100px"}}>
                    <Grid container spacing={3}>
                        {loading ? (
                            newsList.length > 8 ? (
                                <>
                                    {newsList.map((newsItem) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={newsItem._id}>
                                            <Link
                                                to={`/article/${newsItem.slug}`}
                                                state={{ ...newsItem }}
                                                style={{ textDecoration: "none" }}
                                            >
                                                <NewsCard
                                                    loading={false}
                                                    imageUrl={newsItem.image}
                                                    title={newsItem.title}
                                                    description={newsItem.text}
                                                />
                                            </Link>
                                        </Grid>
                                    ))}
                                    {Array.from(new Array(8)).map((newsItem, index) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                            <NewsCard loading={true} />
                                        </Grid>
                                    ))}
                                </>
                            ) : (
                                Array.from(new Array(8)).map((newsItem, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <NewsCard loading={true} />
                                    </Grid>
                                ))
                            )
                        ) : (
                            newsList.map((newsItem) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={newsItem._id}>
                                    <Link
                                        to={`/article/${newsItem.slug}`}
                                        state={{ ...newsItem }}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <NewsCard
                                            loading={false}
                                            imageUrl={newsItem.image}
                                            title={newsItem.title}
                                            description={newsItem.text}
                                        />
                                    </Link>
                                </Grid>
                            ))
                        )}
                    </Grid>

                </Container>
            </InfiniteScroll>
        </>
    );
};

export default NewsContainer;