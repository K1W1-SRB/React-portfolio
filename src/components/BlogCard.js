import { Link } from "react-router-dom"

export default function BlogPost({title, author, coverPhoto, datePubllished, slug}) {
    return(
        <div className="blog-card-container">
            <Link href={'/posts/' + slug}>
                <div className='imgContainer'>
                    <img src={coverPhoto.url} alt="" />
                </div>
            </Link>
            <div className="text-container">
                <h2>{title}</h2>
                <div className="">
                    <img src={author.avatar.url} alt="avatar-img" />
                    <h3>{author.name}</h3>
                </div>
                <div className="date-Publlished">
                    <h3>{datePubllished}</h3>
                </div>
            </div>
        </div>
    )
}