import React from 'react'

const Selector = ({text, setText}) => {

    return (
        <div className='p-2 sticky top-4 left-0 w-full z-40 rounded-full bg-neutral-600/30 backdrop-blur-sm grid grid-cols-5 gap-8'>
            <div onClick={() => setText("all post types")} className={`cursor-pointer text-center rounded-full py-2 ${text === 'all post types' && 'bg-primary'}`}>All Post Types</div>
            <div onClick={() => setText("reels")} className={`cursor-pointer text-center rounded-full py-2 ${text === 'reels' && 'bg-primary'}`}>Reels</div>
            <div onClick={() => setText("videos")} className={`cursor-pointer text-center rounded-full py-2 ${text === 'videos' && 'bg-primary'}`}>Videos</div>
            <div onClick={() => setText("carousels")} className={`cursor-pointer text-center rounded-full py-2 ${text === 'carousels' && 'bg-primary'}`}>Carousels</div>
            <div onClick={() => setText("static_images")} className={`cursor-pointer text-center rounded-full py-2 ${text === 'static_images' && 'bg-primary'}`}>Static Images</div>
        </div>
    )
}

export default Selector