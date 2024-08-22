import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Introduction() {
    return (
        <section className='introduction-section'>
            <div className='introduction-description'>
                <h1>
                    Comfort <br />
                    In Furniture
                </h1>
                <p>
                    See our thoughtfully curated collection of furniture,
                    lighting and objects
                </p>
                <button>
                    View Collection
                    <MdOutlineKeyboardArrowRight className='arrow-icon' />
                </button>
            </div>

            <p className='subHeading'>
                Functional, practical interior solutions <br /> that make life
                simple and beautiful
            </p>
        </section>
    );
}

export default Introduction;
