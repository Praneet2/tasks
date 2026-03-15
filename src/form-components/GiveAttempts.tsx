import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [attemptsWanted, setAttemptsWanted] = useState<string>("");

    function useAttempt() {
        setAttempts(attempts - 1);
    }

    function gainAttempts() {
        const addAttempts = parseInt(attemptsWanted) || 0;
        setAttempts(attempts + addAttempts);
    }
    return (
        <div>
            <h3>Attempts left: {attempts}</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsWanted}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsWanted(e.target.value);
                    }}
                />
            </Form.Group>

            <Button onClick={useAttempt} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={gainAttempts}>Gain</Button>
        </div>
    );
}
