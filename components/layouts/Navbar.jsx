import { MessageCircleDashed } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full px-4 md:px-16 h-20 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-between'>
            <div className='flex items-center gap-2 font-bold'>
                <MessageCircleDashed size={20}/>
                Metric Lens
            </div>
        </div>
    )
}

export default Navbar