import Image from 'next/image';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function FeaturedProjects() {
    return (
        <>
            <section className='featuredProjects-section'>
                <article className='description'>
                    <h2>Discover Our Featured Products</h2>
                    <p>
                        Aura furniture combines comfort and refined design with
                        the most innovative technologies
                    </p>
                </article>

                <aside>
                    <div className='product'>
                        <Image
                            className='image'
                            src={'/coffeeTable.jpg'}
                            height={500}
                            width={400}
                            alt='product thumbnial'
                        />
                        <p>RILI COFFEE TABLE</p>
                        <p className='price'>$340</p>
                    </div>

                    <div className='product'>
                        <Image
                            className='image'
                            src={'/lamp.jpg'}
                            height={500}
                            width={400}
                            alt='product thumbnial'
                        />
                        <p>OMNI LAMP</p>
                        <p className='price'>$380</p>
                    </div>
                </aside>
            </section>

            <section className='interestingProducts-section'>
                <aside className='description'>
                    <h2>Products That May Be Of Interest</h2>
                    <p>
                        Exclusive Italian-made products for the comfort and
                        coziness of your daily life.
                    </p>
                </aside>

                <div className='products-wrapper'>
                    <div className='product_wide'>
                        <Image
                            className='image'
                            src={'/sofa.jpg'}
                            height={600}
                            width={500}
                            alt='product thumbnial'
                        />
                        <p>TATLY SOFA</p>
                        <p className='price'>$845</p>
                    </div>

                    <aside>
                        <div className='product'>
                            <Image
                                className='image'
                                src={'/stools.jpg'}
                                height={500}
                                width={400}
                                alt='product thumbnial'
                            />
                            <p>BAR STOOLS</p>
                            <p className='price'>$360</p>
                        </div>
                        <div className='product'>
                            <Image
                                className='image'
                                src={'/sofa.jpg'}
                                height={500}
                                width={400}
                                alt='product thumbnial'
                            />
                            <p>HASE SOFA</p>
                            <p className='price'>$710</p>
                        </div>
                    </aside>
                </div>

                <div className='products-wrapper'>
                    <div className='product_wide left'>
                        <Image
                            className='image'
                            src={'/chair2.jpg'}
                            height={600}
                            width={500}
                            alt='product thumbnial'
                        />
                        <p>LOOZ CHAIRS</p>
                        <p className='price'>$320</p>
                    </div>

                    <aside>
                        <div className='product'>
                            <Image
                                className='image'
                                src={'/chair.jpg'}
                                height={500}
                                width={400}
                                alt='product thumbnial'
                            />
                            <p>VOOM CHAIR</p>
                            <p className='price'>$220</p>
                        </div>
                        <div className='product'>
                            <Image
                                className='image'
                                src={'/lamp2.jpg'}
                                height={500}
                                width={400}
                                alt='product thumbnial'
                            />
                            <p>FOJI LAMP</p>
                            <p className='price'>$345</p>
                        </div>
                    </aside>
                </div>

                <div className='products-wrapper left'>
                    <aside>
                        <div className='product'>
                            <Image
                                className='image'
                                src={'/desk.jpg'}
                                height={500}
                                width={400}
                                alt='product thumbnial'
                            />
                            <p>ELO DESK</p>
                            <p className='price'>$245</p>
                        </div>
                        <div className='product'>
                            <Image
                                className='image'
                                src={'/wardrobe.jpg'}
                                height={500}
                                width={400}
                                alt='product thumbnial'
                            />
                            <p>FOJI WARDROBE</p>
                            <p className='price'>$620</p>
                        </div>
                    </aside>

                    <button>
                        Learn More
                        <MdOutlineKeyboardArrowRight className='arrow-icon' />
                    </button>
                </div>
            </section>
        </>
    );
}

export default FeaturedProjects;
