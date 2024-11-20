import { CardGridImage } from "../components/CardGridImage"
import { HeroBasic } from "../components/HeroBasic"
import HeroImage from "../components/HeroImage"
import { PainelImageContent } from "../components/PainelImageContent"

function Home() {
    return (
        <>
            <HeroImage />
            <PainelImageContent />
            <CardGridImage />
            <HeroBasic />
        </>
    )
}

export default Home