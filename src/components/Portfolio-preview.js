import google from '../images/google.png'
import movieverse from '../images/movie logo.png'
import notejet from '../images/notejet logo.PNG'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function portfolioPreview () {
    return(
        
        <div className='Previewcard-container'>
        <div class="card">
            <Link to="/project-1"><img className='card-image' src={movieverse} /></Link>
            <h3 class="title">MovieVerse</h3>
            <div className="description">
                <p>MovieVerse is a movie watchlist</p>
            </div>
        </div>
        <div class="card">
            <Link to="/project-2"><img className='card-image' src={notejet} /></Link>
            <h3 class="title">Notejet</h3>
            <div className="description">
                <p>Notejet is a markdown note app</p>
            </div>
        </div>
        <div class="card">
            <Link to="/project-3"><img className='card-image' src={google} /></Link>
            <h3 class="title">Card 3</h3>
            <div className="description">
                <p>this is a description</p>
            </div>
        </div>
        </div>

        
  
    )
}