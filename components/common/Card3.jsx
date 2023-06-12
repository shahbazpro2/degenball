"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card3 = ({ data }) => {

    return (
        <div className={twMerge(`rounded-lg rounded-tr-none rounded-tl-none hover:shadow-lg bg-white pt-0 relative`)} >
            <div className='absolute top-0 right-0 px-2 py-1 flex justify-between w-full'>
                <div className="text-sm font-bold text-primary">#{data?.id}</div>
                <div className="text-sm font-medium text-white">Rarity</div>
            </div>
            <div className='h-[200px] w-[100%] m-auto'>
                <video className='w-full h-full object-cover' autoPlay loop muted>
                    <source src={data?.video} type='video/mp4' />
                </video>
            </div>
            <div className='my-4 text-center'>
                <button className='btn text-sm'>Stake/Unstake</button>
            </div>
        </div>
    )
}

export default Card3