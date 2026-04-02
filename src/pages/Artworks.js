import { Gallery } from "../components/Gallery"
import { artworkImgs } from "../imgIndex"

export default function Artworks() {
  return (
  <div className="page">
    <h1>Artworks</h1>
    <Gallery pagename="artworks" imgList={artworkImgs}/>
  </div>
  )
};