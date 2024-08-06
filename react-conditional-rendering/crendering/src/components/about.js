import React, { useState } from "react";

function Toyota({ speed, colour, model }) {
    return (
        <p>Model: {model} Colour: {colour} Speed: {speed}</p>
    );
}

function Mazda({ speed, colour, model }) {
    return (
        <p>Model: {model} Colour: {colour} Speed: {speed}</p>
    );
}

function Subaru({ speed, colour, model }) {
    return (
        <p>Model: {model} Colour: {colour} Speed: {speed}</p>
    );
}

function About() {
    const [selectedCar, setSelectedCar] = useState("");

    const handleCarSelection = (car) => {
        setSelectedCar(car);
    };

    const renderSelectedCar = () => {
        if (selectedCar === "Toyota") {
            return (
                <div>
                    <img src="public/images/Luxury car garage.jpg" alt="Toyota Noah" />
                    <Toyota speed="120Km/hr" colour="Red" model="Noah" />
                </div>
            );
        } else if (selectedCar === "Mazda") {
            return (
                <div>
                    <img src="/api/placeholder/300/200" alt="Mazda Demio" />
                    <Mazda speed="120Km/hr" colour="Black" model="Demio" />
                </div>
            );
        } else if (selectedCar === "Subaru") {
            return (
                <div>
                    <img src="/api/placeholder/300/200" alt="Subaru Impreza" />
                    <Subaru speed="220Km/hr" colour="Blue" model="Impreza" />
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div id="about-us">
            <h2>About Us</h2>
            <p>What <strong>car</strong> do you want to drive?</p>
            <div>
                <button onClick={() => handleCarSelection("Toyota")}>Toyota</button>
                <button onClick={() => handleCarSelection("Mazda")}>Mazda</button>
                <button onClick={() => handleCarSelection("Subaru")}>Subaru</button>
            </div>
            {renderSelectedCar()}
        </div>
    );
}

export default About;