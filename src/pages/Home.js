import Heading from '../components/Heading';
import Bio from '../components/Bio';
import Work from '../components/Work';
import Socials from '../components/Socials';
import Hobby from '../components/Hobby';
import PortfolioPreview from '../components/Portfolio-preview'
import Footer from '../components/Fotter'
import Skills from '../components/skills'


export default function Home() {
    return(
    <main>
    <Heading />
    <Work />
    <Bio />
    <Hobby />
    <Skills />
    <Socials />
    <PortfolioPreview /> 
    <Footer />
    </main>
    )
}