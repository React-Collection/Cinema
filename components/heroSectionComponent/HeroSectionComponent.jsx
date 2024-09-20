import { HERO_SECTION_BANNER } from "../../constants/constImages";
import styleHero from "./index.module.scss";

const HeroSectionComponent = ()=> {
    return(
<div className={styleHero.heroSection}>
<img src={HERO_SECTION_BANNER} alt="image" />
</div>

    )
}


export default HeroSectionComponent