import Notejetblack from './images/notejet example.PNG'
import Notejetblack2 from './images/notejet example2.PNG'

export default function project2() {
    return(
        <div className='Notejet-container'>
            <h1 className='Notejet-title'>Notejet</h1>
            <p>Technologies Used:<span className='technologies-highlight'> React, Javascript, Showdown.js, Css </span></p>
            <p className='Notejet-description'>Notejet is a markdown note taking app that lets you write and preview you notes has quick top bar to select diffrent markdown language options example bold, italic, list, ect</p>
            <p className='Notejet-links'><a href='https://movie-verse.vercel.app/'  target="_blank">Live</a> <a href='https://github.com/K1W1-SRB/Notejet'  target="_blank">Repo</a></p>
            <img className='Notejet-img' src={Notejetblack} />
            <img className='Notejet-img' src={Notejetblack2} />
        </div>
    )
}