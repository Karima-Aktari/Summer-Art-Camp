import React from 'react';
import star from '../../../../Images/star.png';
import heart from '../../../../Images/heart.png';
import share from '../../../../Images/share.png';

const Review = (props) => {
    const { description, theacherImage, teacherName, teacherReview, classReview, completed, img1, img2, img3 } = props.review;
    return (
        <div className='container mx-auto my-4'>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='container h-full'>
                    <h2 className='font-bold text-gray-700'>{description}</h2>
                    <div className='flex sm:flex-col md:flex-row p-4'>
                        <img src={theacherImage} className="w-16 h-16 rounded-full" alt="" />
                        <h3 className='px-2 flex items-center font-bold text-xl text-indigo-800'>{teacherName}</h3>
                    </div>
                    <div>
                        <div className='flex items-center text-gray-500'>
                            <img src={star} className="w-8 h-8" alt='' />
                            <img src={star} className="w-8 h-8" alt='' />
                            <img src={star} className="w-8 h-8" alt='' />
                            <img src={star} className="w-8 h-8" alt='' />
                            <img src={star} className="w-8 h-8" alt='' />
                            <p className='px-2'>{teacherReview}</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <img src={star} className="w-8 h-8" alt='' />
                            <img src={star} className="w-8 h-8" alt='' />
                            <img src={star} className="w-8 h-8" alt='' />
                            <img src={star} className="w-8 h-8" alt='' />
                            <img src={star} className="w-8 h-8" alt='' />
                            <p className='px-2'>{classReview}</p>
                        </div>

                        <h3 className='py-3 font-bold text-xl text-gray-700'>{completed}</h3>
                    </div>

                    <div className='flex items-center pt-5'>
                        <button className='btn bg-violet-600 text-white py-2 px-4 font-bold rounded-full'>See Class Shedule </button>
                        <div className='flex px-7 items-center text-violet-600'>
                            <img src={heart} className="w-5 h-5" alt='' />
                            <p className='font-bold'>Save</p>
                        </div>
                        <div className='flex px-7 items-center text-violet-600'>
                            <img src={share} className="w-5 h-5" alt='' />
                            <p className='font-bold'>Share</p>
                        </div>

                    </div>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2'>
                    <div>
                        <img src={img1} className="h-full w-full" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <img src={img2} className="h-40 w-full" alt="" />
                        <img src={img3} classsName="h-40 w-full" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;