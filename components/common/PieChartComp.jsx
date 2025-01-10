"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
    "Insights": {
        label: "Insights",
    },
    "Reels": {
        label: "Reels",
        color: "hsl(var(--chart-1))",
    },
    "Videos": {
        label: "Videos",
        color: "hsl(var(--chart-2))",
    },
    "Static Images": {
        label: "Static Images",
        color: "hsl(var(--chart-3))",
    },
    "Carousels": {
        label: "Carousels",
        color: "hsl(var(--chart-4))",
    },
    "Other": {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
}

// const chartDataLikes = [
//     { type: "Reels", value: 8824, fill: "hsl(var(--chart-1))" },
//     { type: "Videos", value: 7765, fill: "hsl(var(--chart-2))" },
//     { type: "Static Images", value: 3135, fill: "hsl(var(--chart-3))" },
//     { type: "Carousels", value: 5023, fill: "hsl(var(--chart-4))" },
// ]

// const chartDataComments = [
//     { type: "Reels", value: 696, fill: "hsl(var(--chart-1))" },
//     { type: "Videos", value: 587, fill: "hsl(var(--chart-2))" },
//     { type: "Static Images", value: 172, fill: "hsl(var(--chart-3))" },
//     { type: "Carousels", value: 406, fill: "hsl(var(--chart-4))" },
// ]

// const chartDataShares = [
//     { type: "Reels", value: 292, fill: "hsl(var(--chart-1))" },
//     { type: "Videos", value: 136, fill: "hsl(var(--chart-2))" },
//     { type: "Static Images", value: 54, fill: "hsl(var(--chart-3))" },
//     { type: "Carousels", value: 160, fill: "hsl(var(--chart-4))" },
// ]

// const chartDataEngagement = [
//     { type: "Reels", value: 38, fill: "hsl(var(--chart-1))" },
//     { type: "Videos", value: 34, fill: "hsl(var(--chart-2))" },
//     { type: "Static Images", value: 22, fill: "hsl(var(--chart-3))" },
//     { type: "Carousels", value: 30, fill: "hsl(var(--chart-4))" },
// ]

const PieChartComp = ({ title, data, dataKey, label }) => {
    const totalValue = React.useMemo(() => {
        return data.reduce((acc, curr) => acc + curr.value, 0)
    }, [data])

    return (
        <Card className="flex flex-col">
            <CardHeader className="text-center items-center pb-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>Insights based on average {label}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0 text-center">
                <ChartContainer
                    className="mx-auto aspect-square max-h-[250px]"
                    config={chartConfig}
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={data}
                            dataKey={dataKey}
                            nameKey="type"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalValue.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    {label}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm text-center">
                <div className="flex items-center gap-2 font-medium leading-none">
                    {label} insights <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Data derived from backend statistics
                </div>
            </CardFooter>
        </Card>
    )
}

const Dashboard = ({ analytics }) => {
    const statistics = analytics?.statistics;

    // Transform data for chart
    const chartDataLikes = statistics
        ? [
            { type: "Reels", value: statistics.reels.average_likes, fill: "hsl(var(--chart-1))" },
            { type: "Videos", value: statistics.videos.average_likes, fill: "hsl(var(--chart-2))" },
            { type: "Static Images", value: statistics.static_images.average_likes, fill: "hsl(var(--chart-3))" },
            { type: "Carousels", value: statistics.carousels.average_likes, fill: "hsl(var(--chart-4))" },
        ]
        : [];
    // Transform data for chart
    const chartDataComments = statistics
        ? [
            { type: "Reels", value: statistics.reels.average_comments, fill: "hsl(var(--chart-1))" },
            { type: "Videos", value: statistics.videos.average_comments, fill: "hsl(var(--chart-2))" },
            { type: "Static Images", value: statistics.static_images.average_comments, fill: "hsl(var(--chart-3))" },
            { type: "Carousels", value: statistics.carousels.average_comments, fill: "hsl(var(--chart-4))" },
        ]
        : [];

    // Transform data for chart
    const chartDataShares = statistics
        ? [
            { type: "Reels", value: statistics.reels.average_shares, fill: "hsl(var(--chart-1))" },
            { type: "Videos", value: statistics.videos.average_shares, fill: "hsl(var(--chart-2))" },
            { type: "Static Images", value: statistics.static_images.average_shares, fill: "hsl(var(--chart-3))" },
            { type: "Carousels", value: statistics.carousels.average_shares, fill: "hsl(var(--chart-4))" },
        ]
        : [];

    // Transform data for chart
    const chartDataEngagement = statistics
        ? [
            { type: "Reels", value: statistics.reels.average_engagement, fill: "hsl(var(--chart-1))" },
            { type: "Videos", value: statistics.videos.average_engagement, fill: "hsl(var(--chart-2))" },
            { type: "Static Images", value: statistics.static_images.average_engagement, fill: "hsl(var(--chart-3))" },
            { type: "Carousels", value: statistics.carousels.average_engagement, fill: "hsl(var(--chart-4))" },
        ]
        : [];

    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {chartDataLikes.length > 0 && (
                <PieChartComp
                    title="Average Likes by Post Type"
                    data={chartDataLikes}
                    dataKey="value"
                    label="Likes"
                />
            )}
            {chartDataComments.length > 0 && (
                <PieChartComp
                    title="Average Comments by Post Type"
                    data={chartDataComments}
                    dataKey="value"
                    label="Comments"
                />
            )}
            {chartDataShares.length > 0 && (
                <PieChartComp
                    title="Average Shares by Post Type"
                    data={chartDataShares}
                    dataKey="value"
                    label="Shares"
                />
            )}
            {chartDataEngagement.length > 0 && (
                <PieChartComp
                    title="Average Engagement by Post Type"
                    data={chartDataEngagement}
                    dataKey="value"
                    label="Engagement"
                />
            )}
        </div>
    )
}

export default Dashboard
