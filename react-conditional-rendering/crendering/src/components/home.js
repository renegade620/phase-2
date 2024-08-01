// import { backImage } from "../data/data.js";

const divStyle = {
    backgroundColor: "orange"
};

function Home() {
    return(
        <div id="home" style={divStyle}>
            <h1>Home</h1>
            <h2>Cars Galore</h2>
            <p>&#128663;We are all about cars!&#128663;</p>
        </div>
    );
}

export default Home;