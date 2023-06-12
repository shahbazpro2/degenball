import React from 'react'

const TableLayout = ({ children, title }) => {
    return (
        <div className="border  rounded-lg bg-white">
            <div className="py-5 border-b  px-5 text-lg font-bold">
                {title}
            </div>
            {children}
        </div>
    )
}

export default TableLayout  