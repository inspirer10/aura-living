import Image from 'next/image';
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

            <summary>
                <div>
                    <Image
                        className='image'
                        src={'/furniture.jpg'}
                        height={500}
                        width={400}
                        alt='product thumbnial'
                    />

                    <Image
                        className='image'
                        src={'/lamp.jpg'}
                        height={500}
                        width={400}
                        alt='product thumbnial'
                    />
                </div>

                <Image
                    className='image top'
                    src={'/lamp3.jpg'}
                    height={500}
                    width={400}
                    alt='product thumbnial'
                />
            </summary>
        </section>
    );
}

export default OurStory;
