"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CaseImageModal({open, setOpen, images}) {
  const [mainImage, setMainImage] = useState(images[0]?.url);

  useEffect(() => {
    setMainImage(images[0])
  }, [images])
    return (
        open &&
        <div className="case-image-modal" onClick={(e) =>  e.target.classList.contains("case-image-modal") && setOpen(false) }>
        <div className="case-image-modal__grid">
          <div className="case-image-modal__grid__preview">
          <Image
              alt=""
              src={`https://${mainImage?.url}`}
              layout="fill"
              objectFit="cover"
              style={{borderRadius: "16px"}}
            />
          </div>

          <div className="case-image-modal__grid__slide">
          <svg className="case-image-modal__grid__slide__nav-left" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
          onClick={() => setMainImage(images[images?.indexOf(mainImage) - 1] ? images[images?.indexOf(mainImage) - 1] : images[images?.length - 1])}
          >
<rect x="64" y="64" width="64" height="64" rx="32" transform="rotate(-180 64 64)" fill="#009B07"/>
<path d="M40 32L26 32M26 32L33 39M26 32L33 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="case-image-modal__grid__slide__thumbnails">
{images?.map((image, index) => <Image
              alt="["
              key={index}
              src={`https://${image?.url}`}
              width={80}
              height={80}
              style={{borderRadius: "8px"}}
              onClick={() => setMainImage(image)}
              className="pointer"
            />
          )}
</div>

          

<svg className="case-image-modal__grid__slide__nav-right" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
onClick={() => setMainImage(images[images?.indexOf(mainImage) + 1] ? images[images?.indexOf(mainImage) + 1] : images[0])}

>
<rect width="64" height="64" rx="32" fill="#009B07"
/>
<path d="M24 32H38M38 32L31 25M38 32L31 39" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
        </div>
      </div>
    )
}