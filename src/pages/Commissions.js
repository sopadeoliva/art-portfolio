// import im from "../assets/artworks/whoosh.webp"
import { Gallery } from "../components/Gallery"
import { comsImgs } from "../imgIndex"
import { IconLink } from "../components/Socials"
import infoIcon from "../assets/icons/notion.svg"

export default function Commissions() {
  return (
  <div className="page">
    <h1>Commissions</h1>
    <div className="coms-content">
      <p className="coms-text">If you are interested in commissioning me, please check out the Commission Information guide in my Notion in one of the links below. 
        If you have any further questions, don't hesitate to contact me!
      </p>

      Commissions are currently: OPEN!


      {/* <img src={im} className="coms-pic" alt="Nothing to see here"/> */}
      <IconLink text="Commission Info (English)" url="https://www.notion.so/Sopa-de-Oliva-Commissions-English-3fa598ac1949410ea30e46995ea34e17?source=copy_link" imgSrc={infoIcon} alt="Commission guide (English)"/>
      <IconLink text="Información Comisiones (Español)" url="https://www.notion.so/Sopa-de-Oliva-Comisiones-Espa-ol-326d36e8742f80e1949dd573fa189613?source=copy_link" imgSrc={infoIcon} alt="Commission guide (Spanish)"/>
    </div>
    <Gallery pagename="commissions" imgList={comsImgs}/>
  </div>
  )
};