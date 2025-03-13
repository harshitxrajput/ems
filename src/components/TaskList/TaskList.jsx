import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] mt-10 py-5 w-full'>
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Channel</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, molestias consequatur. Veniam ducimus officia quisquam.
        </p>
      </div>
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Channel</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, molestias consequatur. Veniam ducimus officia quisquam.
        </p>
      </div>
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Channel</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, molestias consequatur. Veniam ducimus officia quisquam.
        </p>
      </div>
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Channel</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, molestias consequatur. Veniam ducimus officia quisquam.
        </p>
      </div>
    </div>
  )
}

export default TaskList
