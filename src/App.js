import React from "react";
import NavBar from "./navbar";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import ApSection from "./ApSection";
import Footer from "./Footer";
import "./style.css";
const App = () => {
    return (
        <div>
        <NavBar/>
        <HeroSection/>
        <CardSection/>
        <ApSection/>
        <Footer/>
        </div>
    );
    
}
export default App;