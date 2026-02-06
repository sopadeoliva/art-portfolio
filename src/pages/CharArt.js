import { Gallery } from "../components/Gallery"
import { charArtImgs } from "../imgIndex"

export default function CharDesign() {
  return (
  <div className="page">
    <h1>Character Art</h1>
    <Gallery pagename="chars" imgList={charArtImgs}/>
  </div>
  )
};