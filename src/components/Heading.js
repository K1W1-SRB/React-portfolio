import Pfp from "../images/k1w1 logo illustator.svg"

export default function Header() {
    return(
        <div className="header-main">
            <img className="profile-pic" src={Pfp} />
            <h1 className='name'>Sebastian Somogyi</h1>
            <p className='job'>K1W1 Digital Craftsmen (Developer)</p>
        </div>
    )
}