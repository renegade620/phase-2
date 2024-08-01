import React from 'react';

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


function About({ selectedCar }) {
    return (
        <div id="about-us">
            <h2>About Us</h2>
            <p>What <strong>car</strong> do you want to drive?</p>
            {selectedCar === "Toyota" && (
                <div>
                    <img src="" alt="Toyota Noah" />
                    <Toyota speed="120Km/hr" colour="Red" model="Know Her" />
                </div>)}
            {selectedCar === "Mazda" && (
                <div>
                    <Mazda speed="120Km/hr" colour="Black" model="Dem Yow" />
                </div>)}
            {selectedCar === "Subaru" && (
                <div>
                    <Subaru speed="220Km/hr" colour="Blue" model="Impress Her" />
                </div>)}
        </div>
    );
}

export default About;