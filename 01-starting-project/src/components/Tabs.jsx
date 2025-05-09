import React from 'react'

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // A wrapper components for all the tab buttons
    // Exempel på "Multiple Component Slots"
    // buttonsContainer är exampel på "Element Identifiers as Props"
    // Sätter stor bokstav kommer göra att react tolkar en prop som en custom komponent

    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}
