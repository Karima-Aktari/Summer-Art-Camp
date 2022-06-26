import React, { useEffect, useState } from 'react';
import Review from '../Rivew/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div>
            <div>
                {
                    reviews.map(review =>
                        <Review review={review} />
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;