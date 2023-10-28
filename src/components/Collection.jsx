import React from 'react';
import Cards from './Cards';

const Collection = () => {
    return (
        <div>
            <div className='ml-10 lg:ml-32 mt-5'>
                <h2 className='text-2xl '>All Collection</h2>
                <div className='w-12 h-2 rounded-md bg-orange-500 mt-1 -mb-4' />
            </div>
            <div className="cards flex space-x-3 space-y-5 p-2 flex-wrap mx-2 lg:mx-28">
                <div />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default Collection
