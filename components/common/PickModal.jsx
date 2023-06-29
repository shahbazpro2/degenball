'use client'
import Modal from '@/components/common/Modal'
import React from 'react'

export const digit = (num) => {
    return <div className=" bg-primary font-bold text-white w-9 h-9 flex items-center justify-center rounded-lg">
        {num}
    </div>
}

const PickModal = (props) => {
    const { allSelectedNumbers, setAllSelectedNumbers, editIndex, setEditIndex } = props
    const [selected, setSelected] = React.useState(allSelectedNumbers?.[editIndex] || [])

    const onSelect = (num) => {
        if (selected.length === 6 && !selected.includes(num)) return
        if (selected.includes(num)) {
            setSelected(selected.filter((item) => item !== num))
        } else {
            setSelected([...selected, num])
        }
    }

    const selectRandom = () => {
        //select 6 random numbers
        const random = []
        while (random.length < 6) {
            const num = Math.floor(Math.random() * 48) + 1
            if (!random.includes(num)) {
                random.push(num)
            }
        }
        if (allSelectedNumbers.some((item) => item.every((num) => random.includes(num)))) {
            selectRandom()
            return
        }
        setSelected(random)
    }

    const onClear = () => {
        setSelected([])
    }

    const onDone = () => {
        if (selected.length !== 6) return
        if (editIndex !== null) {
            setAllSelectedNumbers(allSelectedNumbers.map((item, i) => {
                if (i === editIndex) {
                    return selected
                }
                return item
            }))

        } else {
            setAllSelectedNumbers([...allSelectedNumbers, selected])
        }
        setSelected([])
        setEditIndex(null)
        props.closeModal()
    }


    return (
        <Modal {...props} >
            <div className="flex justify-between items-center">
                <div className="text-base">
                    {
                        editIndex !== null && `#${editIndex + 1}`
                    }
                </div>
                <div className="flex gap-2 mt-1">
                    {
                        selected.map((item, i) => {
                            return digit(item)
                        }
                        )
                    }
                </div>
                <div className="cursor-pointer" onClick={props.closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

            </div>
            <hr className="my-4" />
            <div className="text-xl text-secondary font-bold text-center">Select 6 numbers</div>
            {/* map 48 numbers */}
            <div className="grid grid-cols-6 gap-1 mt-4 md:px-14">
                {Array(48).fill(0).map((_, i) => {
                    return <div key={i} className={`font-bold text-white w-9 h-9 flex items-center justify-center rounded-lg mt-1 cursor-pointer ${selected.includes(i + 1) ? 'bg-secondary' : 'bg-primary'}`} onClick={() => onSelect(i + 1)}>
                        {i + 1}
                    </div>
                })}
            </div>
            <div className="flex justify-center mt-4 gap-2 mb-3">
                <button className="btn-outline-dark text-xs" onClick={onClear}>Clear</button>
                <button className="btn-outline-dark text-xs" onClick={selectRandom}>Quick Pick</button>
                <button className="btn-simple text-xs" onClick={onDone}>Done</button>
            </div>
        </Modal>
    )
}

export default PickModal