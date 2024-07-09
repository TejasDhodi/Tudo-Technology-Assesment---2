import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import '../Styles/HeroComponent.css'

const HeroComponent = () => {

    const [heroNav, setHeroNav] = useState('Details');

    const handleHeroNav = (className) => {
        setHeroNav(className);
    }

    return (
        <section id='heroSection' className='main'>
            <SectionTitle
                heading='Yoga For Flat Abs'
                description='90 Days Program'
            />

            <div className="hero">
                <div className="heroPart1">
                    <div className="videoPart">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8fdYt5R1uUw?si=Pft-iMn1UI-t2Ss7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="heroPart2">
                    <div className="heroNav">
                        <p className={heroNav === 'Details' ? 'activeHeroNav' : ''} onClick={() => handleHeroNav('Details')}>Details</p>
                        <p className={heroNav === 'Techniques' ? 'activeHeroNav' : ''} onClick={() => handleHeroNav('Techniques')}>Techniques</p>
                    </div>

                    <div className="heroDescription">
                        {
                            heroNav === 'Details' ? <p>Choose a quite space so that you can do the session uninterrupted. Make sure there is at least 2 hours gap between a meal and the class. Put all other devices aside and enjoy the session.</p>
                             : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptas similique sit beatae, laboriosam blanditiis iste, reiciendis tempore vero atque explicabo maxime quo temporibus nulla.</p>
                        }
                        
                        
                    </div>

                    <div className="heroControls">
                        <h3>AED 99/-</h3>
                        <div className="heroControlButtons">
                        <button>Join Now</button>
                        <button>view Schedule</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
