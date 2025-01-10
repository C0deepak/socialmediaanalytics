import React from 'react'

const Loader = () => {
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center bg-black/60 z-50 backdrop-blur-md">
            <div className="loader"></div>
            <div className="flex flex-col justify-center opacity-50 text-center">
                <span>
                    Might take sometime as we are on free tier!
                </span>
                <span>Some time May fail! Pls reload</span>
            </div>
        </div>
    )
}

export default Loader