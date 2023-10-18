import React, { useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import WordSearchGame from './WordSearchGame';
import './WordSearchGame.css';
import './CardLayout.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../Redux/actions';

const CardLayout = () => {
    const dataSource = useSelector((state) => state.dataSource) || [];
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataRequest());
    }, []);
    return (
        <>
            <Row className='container-row' gutter={16}>
                {dataSource.map((card, index) => (
                    <Col span={6} key={card.id}>
                        <Card hoverable size="small" style={{ margin: 20 }} className="Card" title={card.id}>
                            <div className="CardContent">
                                <p className="CardParagraph">{card.question}</p>
                                <WordSearchGame validWords={card.answer}    />

                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CardLayout


