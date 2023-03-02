import React from 'react';
import NewsContainer from "../components/news/NewsContainer";
import CategoriesBar from "../components/CategoriesBar";

const Home = () => {
    return (
        <>
            <CategoriesBar/>
            <NewsContainer/>
        </>
    );
};

export default Home;