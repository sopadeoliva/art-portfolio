import im from "../assets/artworks/whoosh.webp"

export default function Commissions() {
  return (
  <div className="page">
    <h1>Commissions</h1>
    <div className="coms-content">
      <p>Here you will find information about character and illustration commissions. Don't hesitate to contact me if you have any questions!</p>

      Commissions are currently: <span>CLOSED</span>

      <img src={im} className="coms-pic" alt="Nothing to see here"/>
    </div>
  </div>
  )
};