"use client"

import React, { useEffect, useRef } from 'react'

type TStar = {
    x: number
    y: number
    radius: number
    baseX: number
    baseY: number
}

export default function Stars() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const starcount = 250;
        const stars: TStar[] = [];

        const mouse = {
            x: null as null | number,
            y: null as null | number,
            radious: 100
        }

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY
        })

        window.addEventListener('touchmove', (e) => {
            const touch = e.touches[0]
            mouse.x = touch.clientX;
            mouse.y = touch.clientY
        })

        for (let i = 0; i < starcount; i++) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const radius = Math.random() * 1.5

            stars.push({
                x,
                y,
                radius,
                baseX: x,
                baseY: y
            })
        }

        function animate() {
            if (!ctx) return
            if (!canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {


                if (mouse.x !== null && mouse.y !== null) {
                    const dx = star.x - mouse.x;
                    const dy = star.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radious) {
                        const repel = (mouse.radious - distance) / mouse.radious * 10
                        star.x += (dx / distance) * repel
                        star.y += (dy / distance) * repel
                    } else {
                        star.x += (star.baseX - star.x) * 0.1
                        star.y += (star.baseY - star.y) * 0.1
                    }
                } else {
                    star.x += (star.baseX - star.x) * 0.1
                    star.y += (star.baseY - star.y) * 0.1
                }

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = 'white'
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('mouseout', () => { })
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <canvas ref={canvasRef} className='absolute -z-10 w-full h-full' />
    )
}
