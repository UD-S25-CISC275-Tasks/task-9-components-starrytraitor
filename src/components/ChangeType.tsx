import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function setQuestionType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
        // setType(
        //     type === "short_answer_question"
        //         ? "short_answer_question"
        //         : "multiple_choice_question"
        // );
    }

    return (
        <div>
            <Button onClick={setQuestionType}>Change Type</Button>
            <div>
                {type === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
