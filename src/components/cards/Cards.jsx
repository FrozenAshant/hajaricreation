import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className="cards border h-fit lg:h-fit w-40 lg:w-48 shadow-xl rounded-md p-1 lg:hover:shadow-xl lg:hover:shadow-gray-400 ">
                <a href="#">
                    <div className="card border rounded-md w-fit h-40 lg:h-48 bg-pink-300">
                        <img src="/images/hajaricreation.png" alt="image" />
                    </div>
                </a>
                <div className="title mt-2"><a href="#" className='cursor-pointer text-sm line-clamp-2 leading-tight'>Summer Collection Flexible Easy to use very comfortable</a></div>
                <div>
                    <p className='text-orange-600 font-bold mb-2'>Rs. <span>200</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
