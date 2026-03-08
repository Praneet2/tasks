import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "christmas"
    | "halloween"
    | "thanksgiving"
    | "diwali"
    | "new_years";

const holidayEmoji: Record<Holiday, string> = {
    christmas: "🎄",
    halloween: "🎃",
    thanksgiving: "🦃",
    diwali: "🪔",
    new_years: "🎆",
};

const nextAlphabet: Record<Holiday, Holiday> = {
    christmas: "diwali",
    diwali: "halloween",
    halloween: "new_years",
    new_years: "thanksgiving",
    thanksgiving: "christmas",
};

const nextYear: Record<Holiday, Holiday> = {
    new_years: "diwali",
    diwali: "halloween",
    halloween: "thanksgiving",
    thanksgiving: "christmas",
    christmas: "new_years",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("christmas");

    function advanceAlphabet(): void {
        setHoliday(nextAlphabet[holiday]);
    }

    function advanceYear(): void {
        setHoliday(nextYear[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holidayEmoji[holiday]}</div>
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
