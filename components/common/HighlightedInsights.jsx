'use client'

import React from "react"
import { Dot } from "lucide-react"

export const HighlightedInsights = ({ insights }) => {
    const highlightRegex = /\b(\d[\d,]*(?:\.\d+)?|likes?|comments?|shares?|average|engagement|rate|virality|visibility|hashtags?)\b/gi;

    const getHighlightedText = (text) => {
        const parts = text.split(highlightRegex)
        return parts.map((part, index) => {
            if (highlightRegex.test(part)) {
                return (
                    <span key={index} className="font-bold text-primary">
                        {part}
                    </span>
                )
            }
            return part
        })
    }

    return (
        <ul className="flex flex-col gap-1">
            {insights?.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                    <Dot size={20} className="mt-1" />
                    <span>{getHighlightedText(point)}</span>
                </li>
            ))}
        </ul>
    )
}

