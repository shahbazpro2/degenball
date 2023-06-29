/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


const Faq = () => {
    return (
        <div className='container py-20 text-secondary' id='faq'>
            <div className='text-center lg:w-[700px] m-auto'>
                <div className="text-5xl font-bold text-center">FAQs</div>
                <div className="my-3 text-center text-xl">Based on transparency, anonymity, security, and fairness, Ridotto is a fully scalable alternative to centralized gambling.</div>
            </div>
            <div className="w-full lg:px-20 pt-16">
                <div className="mx-auto w-full rounded-2xl p-2">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Q: Based on transparency, anonymity, security, and fairness, Ridotto is a fully?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, laborum exercitationem corrupti nihil molestias officia odio excepturi accusamus. Omnis commodi nostrum tempora natus aperiam odio, velit ad ut est magni.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Q: Based on transparency, anonymity, security, and fairness, Ridotto is a fully?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum, distinctio vero minus, suscipit quia possimus quo, tenetur veritatis vel facere soluta accusamus optio quam temporibus asperiores iusto error? Quia.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Q: Based on transparency, anonymity, security, and fairness, Ridotto is a fully?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum, distinctio vero minus, suscipit quia possimus quo, tenetur veritatis vel facere soluta accusamus optio quam temporibus asperiores iusto error? Quia.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Q: Based on transparency, anonymity, security, and fairness, Ridotto is a fully?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-secondary">
                                    A: Based on transparency, anonymity, security, and fairness, Ridotto is a fully.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Q: Based on transparency, anonymity, security, and fairness, Ridotto is a fully?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facilis corporis! Eum assumenda fuga, tempora recusandae ipsum provident odio facere. Aperiam velit neque excepturi animi vitae sit quaerat, sequi ullam!
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}

export default Faq