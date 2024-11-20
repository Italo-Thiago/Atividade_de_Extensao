import { CardGridImage } from "../components/CardGridImage"
import { Footer } from "../components/Footer"
import { HeroBasic } from "../components/HeroBasic"
import HeroImage from "../components/HeroImage"
import { Maps } from "../components/Maps"
import { PainelImageContent } from "../components/PainelImageContent"

function Home() {
    return (
        <>
            <HeroImage />
            <PainelImageContent />
            <CardGridImage />
            <HeroBasic />
            <Maps />
            <Footer />
        </>
    )
}

export default Home