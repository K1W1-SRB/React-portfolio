import Html from '../images/html.png'
import Css from '../images/css.png'
import javascript from '../images/Javascript.png'
import React from '../images/React.png'
import Node from '../images/ex.png'
import ex from '../images/node.png'

export default function skills() {
    return(
        <div className="skills-container">
            <div className='skills-tittle-container'>
            <h2 className="skills-tittle">My skills</h2> 
            </div>
            <div className="img-container">
            
                <img className='html-img' src={Html} />
                <img className='css-img' src={Css} />
                <img className='js-img' src={javascript} />
                <img className='react-img' src={React} />
                <img className='django-img' src={Node} />
                <img className='python-img' src={ex} />
            </div>
        </div>
    )
}