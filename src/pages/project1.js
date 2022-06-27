import movieverseblack from '../images/movieverse example.PNG'
import movieverseblack2 from '../images/movieverse example2.PNG'

export default function project1() {
    return(
        <div className='movieverse-container'>
            <h1 className='movieverse-title'>MovieVerse</h1>
            <p>Technologies Used:<span className='technologies-highlight'> REST API, Javascript, Html, Css</span></p>
            <p className='movieverse-description'>MovieVerse is a movie watchlist that uses IMDb API to show all movies with a duration, genre, short summary, and poster image you are able to add your watchlist that can be  seen on the other page that then u can remove once you have watched </p>
            <p className='movieverse-links'><a href='https://movie-verse.vercel.app/'  target="_blank">Live</a> <a href='https://github.com/K1W1-SRB/MovieVerse'  target="_blank">Repo</a></p>
            <img className='movieverse-img' src={movieverseblack} />
            <img className='movieverse-img' src={movieverseblack2} />
        </div>
    )
}