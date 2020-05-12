import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import './QuoteGenerator.scss'

const QuoteGenerator = (props) => {
    return (
        <div className="main-border text-center">
            <Row className="mt-3">
                <Col>
                    <h1 className="pr-1">Random Famous Quotes</h1>
                </Col>
            </Row>
            <Row className="m-3">
                <Col></Col>
                <Col xs="auto">
                    <h3>"Quote Goes Here"</h3>
                    <p className="text-right light-text"><em>~ Author Goes Here</em></p>
                </Col>
                <Col></Col>
            </Row>
            <Row className="mt-3 mb-2">
                <Col className="mx-4 px-2">
                    <Button
                        onClick={props.handleClick}
                        style={{ backgroundColor: '#333' }}
                        block
                    >Generate Quote
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default QuoteGenerator;