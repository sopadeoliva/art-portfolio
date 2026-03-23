export function IconLink({text, url, imgSrc, alt}) {
  return (
    <div className="icon-link">
      <img src={imgSrc} alt={alt}/>
      <a href={url}>{text}</a>
    </div>
  )
}