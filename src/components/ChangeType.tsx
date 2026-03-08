import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType(): void {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        }
        if (questionType === "multiple_choice_question") {
            setQuestionType("short_answer_question");
        }
    }

    questionType === "multiple_choice_question" && <div>Multiple Choice</div>;
    questionType === "short_answer_question" && <div>Short Answer</div>;
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
