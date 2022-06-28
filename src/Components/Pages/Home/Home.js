import React from 'react';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold">Summer Art Camp! 5 Days of Artistis a Painting Monet Van Gogh, Matisse, & More</h2>
            <p className='text-gray-400 font-bold'>Multi-Day Course @</p>
            <div className='mt-7'>
                <Reviews />
            </div>
        </div>
    );
};

export default Home;