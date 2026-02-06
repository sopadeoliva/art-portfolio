import { Gallery } from "../components/Gallery"
import { artworkImgs } from "../imgIndex"

export default function Portfolio() {
  return (
  <div className="page">
    <h1>Artworks</h1>
    <Gallery pagename="portfolio" imgList={artworkImgs}/>
  </div>
  )
};