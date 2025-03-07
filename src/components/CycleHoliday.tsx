import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Holidays (2025 Dates)
// 🧧 - Lunar New Year - Jan 29
// 🏮 - Lantern Festival - Feb 12
// ⚰️ - Tomb Sweeping Day - Apr 4
// 🎏 - Dragon Boat Festival - May 31
// 🥮 - Mid-Autumn Festival - Oct 6

const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
    "🧧": "🏮",
    "🏮": "⚰️",
    "⚰️": "🎏",
    "🎏": "🥮",
    "🥮": "🧧"
};

const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "🧧": "🥮",
    "🥮": "⚰️",
    "⚰️": "🎏",
    "🎏": "🏮",
    "🏮": "🧧"
};

type Holiday = "🥮" | "🧧" | "⚰️" | "🏮" | "🎏";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🧧");

    return (
        <div>
            <div>Cycle Holiday</div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(ALPHABET_TRANSITIONS[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(YEAR_TRANSITIONS[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
