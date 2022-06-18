import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'

export default (props) => {
    const { placeholder, data, defaultValue, valueKey, transition, onChange } = props
    const [current, setCurrent] = React.useState(defaultValue)
    const currentText = React.useMemo(() => {
        return current?.[valueKey ?? 'name'] ?? placeholder ?? 'select...'
    }, [current, placeholder])
    
    const Trigger = React.useMemo(() => {
        return (
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    {currentText}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>
        )
    }, [currentText])
    const onChangeHandle = React.useCallback((v) => {
        setCurrent(v)
        onChange?.(v)
    }, [onChange])
    const mapItems = React.useCallback((v, k) => {
        return (
            <Menu.Item as='li' key={`${v?.[valueKey ?? 'name'] ?? v} - k`}>
                {({ active }) => (
                    <a href="#" 
                        onClick={() => onChangeHandle(v)}
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}>
                        {v?.[valueKey ?? 'name'] ?? v}
                    </a>
                )}
            </Menu.Item>
        )
    }, [onChangeHandle])
    return (
        <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
            {Trigger}
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95" >
                <Menu.Items as='ul' className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {data?.map(mapItems)}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
        </div>
    )
}
