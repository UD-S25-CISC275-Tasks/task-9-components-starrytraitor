import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function updateAtempts(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    return (
        <div>
            {" "}
            <div>
                <Button
                    onClick={() => {
                        setProgress(true);
                        updateAtempts();
                    }}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => {
                        setProgress(false);
                    }}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => {
                        setAttempts(attempts + 1);
                    }}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
            <div>Attempts: {attempts}</div>
        </div>
    );
}
