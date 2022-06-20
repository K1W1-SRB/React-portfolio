import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
    return (
        <div className="socials-container">
            <h2 className="socials-title">Socials</h2>
            <div className='socials-txt-box'>
            <p className="socials-txt"><FontAwesomeIcon icon={faGithub} className="icon"/><a href="https://github.com/K1W1-SRB" target="_blank">GitHub</a></p>
            <p className="socials-txt"><FontAwesomeIcon icon={faLinkedin} className="icon"/><a href="">Indeed</a></p>
            <p className="socials-txt"><FontAwesomeIcon icon={faTwitter} className="icon"/><a href="https://twitter.com/K1w1Developer" target="_blank">Twitter</a></p>
            </div>
        </div>
    )
}