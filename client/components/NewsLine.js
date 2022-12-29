import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";

const NewsLine = () => {
    const [atricles,setAtricles]= useState([]);
    useEffect(()=>{
       const fetchArticles = async () =>{
            let res = await axios.get ('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=cZ5SMFnHR9w88kNPhFL3Q9kFTNiy0opY');
            setAtricles(res.data.results)
        }
        fetchArticles()

    },[]);


    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
        {
            atricles.map((article) =>
                <Col>
                <Card key={article.published_date} >
                    <Card.Img variant="top" src={article.multimedia[0]?.url} />
                    <Card.Body>

                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            {article.abstract}
                        </Card.Text>
                        <Button onClick={ ()=>console.log(article)} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                    </Col>
            )
        }
                </Row>
        </Container>
    );
};

export default NewsLine;