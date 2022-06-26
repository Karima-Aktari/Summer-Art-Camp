import React from 'react';

const Review = (props) => {
    const { id, description, teacherImage, teacherName, img1, img2, img3 } = props.review;
    return (
        <div className='mx-auto'>
            <h4>{id}</h4>
            <div className='grid sm:grid-col-2 md:grid-col-2 gap-2'>
                <div>
                    <h4>{description}</h4>
                    <div>
                        <img src={teacherImage} alt="" />
                        <h3>{teacherName}</h3>
                    </div>
                </div>

                <div >
                    <div>
                        <img src={img1} className="w-" alt="" />
                    </div>
                    <div className='flex sm:flex-col'>
                        <img src={img2} className="" alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;