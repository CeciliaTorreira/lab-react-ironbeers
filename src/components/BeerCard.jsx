import React from 'react'

function BeerCard({eachBeer}) {
  return (
    
    <div className="beer-card">
    <img width={200} height={350} src={eachBeer.image_url} alt={eachBeer.name} />
      <h3>{eachBeer.name}</h3>
      <h5 className="tagline">{eachBeer.tagline}</h5>
      </div>
    
  )
}

export default BeerCard