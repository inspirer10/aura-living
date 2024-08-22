import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function OurStory() {
    return (
        <section className='ourStory-section'>
            <aside className='description'>
                <h2>Our Story</h2>
                <p>
                    Aura present a range of designed furniture, lighting and
                    home-objects. Our belief is that quality design informs a
                    quality of life
                    <button>
                        About Us
                        <MdOutlineKeyboardArrowRight className='arrow-icon' />
                    </button>
                </p>
            </aside>
        </section>
    );
}

export default OurStory;
