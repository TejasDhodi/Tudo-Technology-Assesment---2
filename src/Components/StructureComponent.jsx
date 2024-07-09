import React from 'react'
import SectionTitle from './SectionTitle'
import '../Styles/StructureComponent.css'

const StructureComponent = () => {
  return (
    <section id='structure' className='main'>

      <div className="structurePart1">
        <SectionTitle
          heading2='Structure Of Program'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea, cum necessitatibus.'
        />

        <div className="instructions">
          <p><span>90</span> Days</p>
          <div className='instructionTitle'>
            {
              ['Yoga', 'Recovery', 'Rest', 'Repeat'].map((currElem, index) => {
                return <p key={index}>{currElem}</p>
              })
            }
          </div>
        </div>
      </div>

      <div className="structurePart2">
        <img src="/Images/image 51.png" alt="structure image" />
      </div>

    </section>
  )
}

export default StructureComponent
