"use client";
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const data = [
    { name: 'Mar', blue: 5000, pink: 0 },
    { name: 'Apr', blue: 25000, pink: 12000 },
    { name: 'May', blue: 52000, pink: 28000 },
    { name: 'Jun', blue: 35000, pink: 42000 },
    { name: 'Jul', blue: 78000, pink: 32000 },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        // We want to show the specific tooltip style from the screenshot
        // The screenshot shows "48k Visitor" and an arrow
        return (
            <Box
                sx={{
                    backgroundColor: '#1E40AF', // Dark blue
                    color: 'white',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    minWidth: '120px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px' }}>
                        {`${(payload[0].value / 1000).toFixed(0)}k`}
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            width: 20,
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ArrowUpwardIcon sx={{ fontSize: 14, color: '#10B981' }} />
                    </Box>
                </Box>
                <Typography variant="caption" sx={{ fontSize: '13px', opacity: 0.8 }}>
                    Visitor
                </Typography>

                {/* Triangle pointer */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '8px solid #1E40AF',
                    }}
                />
            </Box>
        );
    }
    return null;
};

export default function SalesforceGraph() {
    return (
        <Paper
            elevation={0}
            sx={{
                padding: { xs: "20px", md: "40px" },
                borderRadius: "24px",
                background: "#fff",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
                width: '100%',
                height: '100%',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, color: '#1F2937', fontSize: '18px' }}>
                Data Consulting Analytics
            </Typography>

            <Box sx={{ flexGrow: 1, width: '100%', minWidth: 0, minHeight: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F3F4F6" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 13 }}
                            dy={10}
                            padding={{ left: 20, right: 20 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 13 }}
                            tickFormatter={(value: number) => value === 0 ? '0' : `${value / 1000}k`}
                            ticks={[0, 10000, 30000, 60000, 90000]}
                            domain={[0, 90000]}
                            width={60}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ stroke: '#3B82F6', strokeWidth: 2, strokeDasharray: '0', strokeOpacity: 0.2 }}
                            wrapperStyle={{ outline: 'none' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="blue"
                            stroke="#2563EB"
                            strokeWidth={4}
                            fillOpacity={1}
                            fill="url(#colorBlue)"
                            activeDot={{ r: 8, fill: '#2563EB', stroke: 'white', strokeWidth: 4 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="pink"
                            stroke="#DB2777"
                            strokeWidth={4}
                            fill="none"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Paper>
    );
}
