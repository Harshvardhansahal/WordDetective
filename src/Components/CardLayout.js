import React from 'react';
import { Card, Row, Col } from 'antd';
import WordSearchGame from './WordSearchGame';
import './WordSearchGame.css';
import './CardLayout.css';

const validWords = ['PRABHAS', 'STYLING', 'BAHUBALI', 'DEEPIKA', 'DEEWAR', 'ABCD', 'DANGAL', 'URI', 'SALMAN', 'AKSHAY'];
const cardData = [
    {
        title: 'Q1',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: 'Who is the lead actor in the Baahubali series?',
    },
    {
        title: 'Q2',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: 'Which Bollywood actor is involved in a blackbuck hunting case controversy?',
    },
    {
        title: 'Q3',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: 'What is the highest-grossing Indian film of all time ?',
    },
    {
        title: 'Q4',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: 'Who played the lead role of Padmavati in the movie Padmaavat?',
    },
    {
        title: 'Q5',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: 'Which film is known for the iconic dialogue Mere paas maa hai?',
    },
    {
        title: 'Q6',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: 'What is the title of the first Indian 3D dance film?',
    },
    {
        title: 'Q7',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: "What is the name of India's highest-grossing film of all time?",
    },
    {
        title: 'Q8',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: "In 2019, which film starred Vicky Kaushal as an army officer?",
    },
    {
        title: 'Q9',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: "Which Bollywood actor is known as the Bhai of the industry?",
    },
    {
        title: 'Q10',
        component: <WordSearchGame validWords={validWords} />,
        paragraph: "Who holds the title Khiladi in the world of Bollywood today?",
    },
    // Add more card data with components and paragraphs as needed
];

const CardLayout = () => {
    return (
        <>
            <Row className='container-row' gutter={16}>
                {cardData.map((card, index) => (
                    <Col span={6} key={card.title}>
                        <Card hoverable size="small" style={{margin:20}} className="Card"  title={card.title}>
                            <div className="CardContent">
                                <p className="CardParagraph">{card.paragraph}</p>
                                {card.component}

                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CardLayout  


