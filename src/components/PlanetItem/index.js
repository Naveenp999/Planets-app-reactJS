import './index.css'

const PlanetItem = props => {
  const {content} = props
  const {id, name, imageUrl, description} = content
  console.log(id)
  return (
    <li className="content-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-icon" />
      <h1 className="sub-heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default PlanetItem
