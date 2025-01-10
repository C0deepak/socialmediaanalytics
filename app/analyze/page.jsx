'use client'

import { HighlightedInsights } from '@/components/common/HighlightedInsights'
import Loader from '@/components/common/Loader'
import Dashboard from '@/components/common/PieChartComp'
import React, { useEffect, useState } from 'react'

const Analyze = () => {
    const [analytics, setAnalytics] = useState({})
    const [loading, setLoading] = useState(true)

    const callLangflowAPI = async (inputBody) => {
        const url = "https://social-medial-analyst-with-langflow.onrender.com/process";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputBody),
            });

            if (!response.ok) {
                console.log(`HTTP error! Status: ${response.status}`);
            }

            const { message } = await response.json();
            setAnalytics(message)
            setLoading(false)
        } catch (error) {
            console.error("Error calling the Langflow API:", error);
        }
    }

    useEffect(() => {
        callLangflowAPI({ "text": "videos" })
    }, [])

    return (

        <div className='py-28 md:py-32 px-4 md:px-16 flex flex-col gap-16'>
            {loading ? <Loader /> : <></>}
            <div className='flex flex-col gap-8'>
                <h2 className='text-foreground font-semibold text-xl md:text-3xl'>
                    Actionable
                    <span className="text-primary"> Insights</span>
                </h2>

                <Dashboard analytics={analytics} />
            </div>

            <div className='flex flex-col gap-8 p-8 bg-muted rounded-2xl'>
                <h2 className='text-foreground font-semibold text-xl md:text-3xl'>
                    Key
                    <span className="text-primary"> Points</span>
                </h2>

                <ul className='flex flex-col gap-1'>
                    <HighlightedInsights insights={analytics?.insights} />
                </ul>
            </div>

            <div className='flex flex-col gap-8'>
                <h2 className='text-foreground font-semibold text-xl md:text-3xl'>
                    Top
                    <span className="text-primary"> Hashtags</span>
                </h2>

                <ul className='flex flex-col gap-4'>
                    {analytics?.top_hashtags && Object.entries(analytics?.top_hashtags).map(([postType, hashtags]) => (
                        <li key={postType}>
                            <h3 className="font-semibold">{postType}</h3>
                            <ul className="flex flex-wrap gap-2">
                                {hashtags?.map((hashtag, index) => (
                                    <span
                                        key={index}
                                        className='bg-primary/80 text-foreground px-4 py-1 rounded-full w-fit'
                                    >
                                        {hashtag}
                                    </span>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='flex items-center gap-4'>
                    <h2 className='text-foreground font-semibold text-xl md:text-3xl'>
                        Compare
                        <span className="text-primary"> Posts</span>
                    </h2>
                    <span className='text-sm bg-white/20 rounded-full px-4 py-1'>coming soon</span>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <label>
                        <input type="checkbox" className="accent-rose-500 w-5 h-5 mr-2" /> Reels
                    </label>
                    <label>
                        <input type="checkbox" className="accent-rose-500 w-5 h-5 mr-2" /> Videos
                    </label>
                    <label>
                        <input type="checkbox" className="accent-rose-500 w-5 h-5 mr-2" /> Static Images
                    </label>
                    <label>
                        <input type="checkbox" className="accent-rose-500 w-5 h-5 mr-2" /> Carousels
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Analyze