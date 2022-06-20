import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Work () {
    return (
        <div className="work-container">
            <h2 className="work-title">Work</h2>
            <p className="work-txt">K1W1 is a freelance and a full-stack developer based in Scotland Perth with a passion for building digital services/stuff he wants.
                from planning and designing all the way to solving real-life problems with code. </p>
                <Link to ="/portfolio" className="portfolio-btn">Portfolio {">"}</Link>
        </div>
    )
}