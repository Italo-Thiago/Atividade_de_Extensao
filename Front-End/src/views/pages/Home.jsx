import { CardGridImage } from "../components/CardGridImage"
import HeroImage from "../components/HeroImage"
import { PainelImageContent } from "../components/PainelImageContent"

function Home() {
    return (
        <>
            <HeroImage />
            <PainelImageContent />
            <CardGridImage />
        </>
    )
}

export default Home