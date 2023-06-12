import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card2 = ({ data }) => {


    return (
        <div className={twMerge(`rounded-lg rounded-tr-none rounded-tl-none hover:shadow-lg bg-white cursor-pointer`, !data?.active && 'bg-gray-200 hover:shadow-none')}>
            <div className='h-[200px]'>
                <video className='w-full h-full object-cover' autoPlay loop muted>
                    <source src={data?.video} type='video/mp4' />
                </video>
            </div>
            <div className='px-5 py-3 space-y-2'>
                <div className="text-xl font-medium">{data?.title}</div>
                <div>
                    {data?.description}
                </div>
            </div>
        </div>
    )
}

export default Card2