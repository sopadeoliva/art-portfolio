import { useState, useCallback, useEffect } from "react";
import crossBtn from "../assets/icons/cross.webp";
import nextBtn from "../assets/icons/rarrow.webp";
import prevBtn from "../assets/icons/larrow.webp";


function Image({index, item, onClickFunction}) {
  return  (
    <div className="gallery-pic" key={index} onClick={() => onClickFunction(index)}>
      <img src={item.imgSrc} alt="artwork"/>
    </div>
  )
}
export function Gallery({ pagename, imgList }) {
  const [openModal, setOpenModal] = useState(false);
  const [slideNum, setSlideNum] = useState(0);

  const handleOpenModal = (index) => {
    if (window.innerWidth <= 800) return;
    setSlideNum(index);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  }

  const nextSlide = useCallback(() => {
    setSlideNum((current) => (current + 1) % imgList.length);
  }, [imgList.length]);
  

  const prevSlide = useCallback(() => {
    setSlideNum((current) => 
      current === 0 ? imgList.length - 1 : current - 1
    );
  }, [imgList.length]);

  // Keyboard Event Listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!openModal) return;

      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, nextSlide, prevSlide]);
  
  return (
    <div>
      {openModal && 
        <div className="modalWrap">
          <div className="exitBtn" onClick={closeModal}>
            <img src={crossBtn} alt='"exit button'/>            
          </div>
          <div className="prevBtn" onClick={prevSlide}>
            <img src={prevBtn} alt='"previous button'/>
          </div>
          <div className="fullscreen-pic">
            <img src={imgList[slideNum].imgSrc} alt="artwork"/>
          </div>
          <div className="nextBtn" onClick={nextSlide}>
            <img src={nextBtn} alt='"next button'/>
          </div>
          {imgList[slideNum].desc !== "" && 
            <div className="description-block">
                {imgList[slideNum].desc}
              </div>
          }
        </div>
          }
      <div className="gallery">
        {imgList
          .map((item, index) => (
            <Image index={index} item={item} onClickFunction={handleOpenModal}/>
          ))
        }
      </div>
    </div>
  );
}