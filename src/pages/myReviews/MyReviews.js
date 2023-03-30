import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/AuthProvider';
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../shared/useTitle';
import { toast } from 'react-hot-toast';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviewData, setReviewData] = useState([]);
    useTitle("My Reviews")


    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
               
                return res.json()
            })
            .then(data => {
                setReviewData(data)
            })
    }, [user?.email, reviewData, logOut])
   

    const deleteReview = (id) => {
        fetch(`${process.env.REACT_APP_URL}/deletereview/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                const newReviewData = reviewData.filter(review => review._id !== data._id)
                setReviewData(newReviewData)
                toast.success("review Delete")
            })
    }

    return (
        <div className='p-4'>
            <h2 className='text-3xl font-semibold py-3 mb-4'> Review List:-</h2>
            {
                reviewData.length > 0 ?

                    reviewData.map(review =>

                        <div key={review._id} className='p-3 mb-3 bg-indigo-200 grid grid-cols-5 items-center rounded-lg'>
                            <div className='col-span-4'>
                                <p className=' font-medium'>service:  {review.title}</p>
                                <p>{review.reviewText}</p>
                            </div>
                            <div className='text-right'>

                                <Link to={`/editreview/${review._id}`}><div className='inline-block  bg-white m-2 p-3 rounded-full duration-300 hover:bg-gray-300 hover:text-green-500 text-center'>
                                    <FaEdit className='text-lg sm:text-3xl ' />
                                </div></Link>
                                <Link>
                                    <div onClick={() => deleteReview(review._id)} className='inline-block m-2  bg-white p-3 rounded-full duration-300 text-red-400 hover:text-white hover:bg-red-400'>
                                        <MdDelete className='text-lg sm:text-3xl ' />
                                    </div></Link>

                            </div>
                        </div>)

                    :

                    <div className='text-5xl min-h-[50vh] flex items-center justify-center'>You Have No Review added Yet</div>
            }
        </div>
    );
};

export default MyReviews;