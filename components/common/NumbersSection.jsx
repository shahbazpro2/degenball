import React from 'react'
import { Tab } from '@headlessui/react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const NumbersSection = () => {
    return (
        <div className="border border-secondary text-secondary py-5 px-7 rounded-3xl">
            <Tab.Group>
                <Tab.List className="flex space-x-1 bg-secondary text-white">
                    {['Play Now', 'My Tickets', 'Draw History'].map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 font-medium leading-5  text-xs md:text-sm',
                                    ' focus:outline-none shadow-none',
                                    selected
                                        ? 'border-b-primary border-4 border-t-0 border-l-0 border-r-0'
                                        : 'text-blue-100 hover:bg-white/[0.12] '
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel
                        className={classNames(
                            'p-3'
                        )}
                    >
                        <Tab1 />

                    </Tab.Panel>
                    <Tab.Panel
                        className={classNames(
                            'p-3'
                        )}
                    >
                        <Tab2 />

                    </Tab.Panel>
                    <Tab.Panel
                        className={classNames(
                            'p-3'
                        )}
                    >
                        <Tab3 />

                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default NumbersSection