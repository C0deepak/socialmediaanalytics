import { MessageCircleDashed } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full px-4 md:px-16 h-20 bg-neutral-600/30 backdrop-blur-sm flex items-center justify-between'>
            <Link href='/' className='flex items-center gap-2 font-bold'>
                <MessageCircleDashed size={20} />
                Metric Lens
            </Link>
        </div>
    )
}

export default Navbar