import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({ data, selectedAll, setSelectedAll }) => {

    const onSelectUnSelect = () => {
        if (selectedAll.includes(data?.id)) {
            setSelectedAll(selectedAll.filter(item => item !== data?.id))
        } else {
            setSelectedAll([...selectedAll, data?.id])
        }
    }

    const isSelected = selectedAll.includes(data?.id)

    return (
        <div className={twMerge(`grid grid-cols-12 p-3 gap-5 rounded-lg hover:shadow-lg border bg-white cursor-pointer`, `${isSelected ? 'bg-light border border-primary shadow-lg' : ''}`)} onClick={onSelectUnSelect}>
            <div className='col-span-5'>
                <video className='w-full h-full object-cover' autoPlay loop muted>
                    <source src={data?.video} type='video/mp4' />
                </video>
            </div>
            <div className='col-span-7'>
                <div className="text-xl">#{data?.id}</div>
                <div className="grid grid-cols-2 gap-0 items-center justify-center  text-sm">
                    <div className='  font-bold '>Account:</div>
                    <div> {data?.account}</div>
                </div>
                <div className="grid grid-cols-2 gap-0 items-center justify-center  text-sm">
                    <div className='  font-bold '>Deposits:</div>
                    <div> {data?.deposits}</div>
                </div>
                <div className="grid grid-cols-2 gap-0 items-center justify-center  text-sm">
                    <div className=' font-bold '>Net Positive:</div>
                    <div > {data?.net_positive}</div>
                </div>
                <div className="grid grid-cols-2 gap-0 items-center justify-center  text-sm">
                    <div className=' font-bold '>AIDRIP airdrop:</div>
                    <div > {data?.drop}</div>
                </div>
                <div className="grid grid-cols-2 gap-0 items-center justify-center  text-sm">
                    <div className=' font-bold '>AIDRIP</div>
                </div>
            </div>
        </div>
    )
}

export default Card