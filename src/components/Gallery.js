import { useState } from "react";

import { imgIndex } from "../imgIndex"

function Image({index, item}) {
  return  (
    <div className="gallery-pic" key={index}>
      <img src={item.imgSrc} alt="artwork"/>
    </div>
  )
}

export function Gallery({ pagename }) {

  const [openModal, setOpenModal] = useState(false);
  const [slideNum, setSlideNum] = useState(0);
  
  return (
    <div className="gallery">
      {imgIndex
        .filter((item) => item.page === pagename)
        .map((item, index) => (
          <Image index={index} item={item} />
        ))
      }
    </div>
  );
}
