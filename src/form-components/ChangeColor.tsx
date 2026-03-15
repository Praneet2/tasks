import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "brown",
    "white",
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [response, setResponse] = useState<string>(DEFAULT_COLOR);
    return (
        <div>
            {COLORS.map((colors: string) => (
                <Form.Check
                    key={colors}
                    inline
                    type="radio"
                    onChange={(e) => {
                        setResponse(e.target.value);
                    }}
                    id={`colors-${colors}`}
                    label={colors}
                    value={colors}
                    checked={response === colors}
                />
            ))}
            <div
                style={{
                    marginTop: "10px",
                }}
            >
                You have chosen {""}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: response }}
                >
                    {response}
                </span>
            </div>
        </div>
    );
}
