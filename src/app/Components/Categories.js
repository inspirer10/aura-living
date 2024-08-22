import Image from 'next/image';
import React from 'react';

function Categories() {
    return (
        <section className='categories-section'>
            <div className='product'>
                <h2>Product Categories</h2>
                <div className='product_image'>
                    <Image
                        className='image'
                        src={'/chair.jpg'}
                        height={500}
                        width={400}
                        alt='product thumbnial'
                    />
                    <div className='category-overlay'>
                        <p>Chairs</p>
                    </div>
                </div>
            </div>

            <div className='product'>
                <p>Exquisite furniture design for your comfort</p>

                <div className='product_image'>
                    <Image
                        className='image'
                        src={'/sofa.jpg'}
                        height={500}
                        width={400}
                        alt='product thumbnial'
                    />
                    <div className='category-overlay'>
                        <p>Sofas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
