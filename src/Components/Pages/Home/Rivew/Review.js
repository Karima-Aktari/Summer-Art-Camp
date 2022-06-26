import React from 'react';
import star from '../../../../Images/star.png';
import heart from '../../../../Images/heart.png';
import share from '../../../../Images/share.png';

const Review = (props) => {
    const { description, theacherImage, teacherName, teacherReview, classReview, completed, img1, img2, img3 } = props.review;
    return (
        <div className='container mx-auto my-4'>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='container'>
                    <h2 className='font-bold text-gray-700'>{description}</h2>
                    <div className='flex sm:flex-col md:flex-row p-4'>
                        <img src={theacherImage} className="w-16 h-16 rounded-full" alt="" />
                        <h3 className='px-2 flex items-center font-bold text-xl text-indigo-800'>{teacherName}</h3>
                    </div>
                    <div>
                        <p><span></span> {teacherReview}</p>
                        <p>{classReview}</p>
                        <h3>{completed}</h3>
                    </div>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2'>
                    <div>
                        <img src={img1} className="h-full" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <img src={img2} className="h-40" alt="" />
                        <img src={img3} classsName="h-40" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;