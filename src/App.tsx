import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>This is my Website</h1>
                UD CISC275 with React Hooks and TypeScript ~ Praneet Bandla
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <ul>
                <li>cat</li>
                <li>dog</li>
                <li>fish</li>
            </ul>
            <img src="downloads/catlion.jpg" alt="funny cat picture" />
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            ;
        </div>
    );
}

export default App;
