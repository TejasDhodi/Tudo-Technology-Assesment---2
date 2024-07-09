import React from 'react'
import '../Styles/SectionTitle.css'

const SectionTitle = ({ heading, description, heading2 }) => {
  return (
    <div className='sectionTitle'>
      {heading && <h1>{heading}</h1>}
      {heading2 && <h2>{heading2}</h2>}
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionTitle
