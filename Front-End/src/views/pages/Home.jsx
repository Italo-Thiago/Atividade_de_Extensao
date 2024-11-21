import { CardGridImage } from "../components/CardGridImage"
import { DeveloperTo } from "../components/DeveloperTo"
import { Footer } from "../components/Footer"
import { HeroBasic } from "../components/HeroBasic"
import HeroImage from "../components/HeroImage"
import { Maps } from "../components/Maps"
import { PainelImageContent } from "../components/PainelImageContent"

export const Home = () => {
    
    return (
        <>
            <HeroImage />
            <PainelImageContent />
            <CardGridImage maxCards={3}/>
            <HeroBasic />
            <Maps />
            <Footer />
            <DeveloperTo />
        </>
    )
}

export default Home;