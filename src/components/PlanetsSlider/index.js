import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetList} = props

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="main">
      <div className="slider-container" data-testid="planets">
        <h1 className="heading">PLANETS</h1>
        <Slider {...settings}>
          {planetList.map(element => (
            <PlanetItem content={element} key={element.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
