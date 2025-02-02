'use client'
import { useEffect, useState } from 'react'
import ClimbingPlacesFilters from './ClimbingPlacesFilters'
import Title from '@/components/Title'
import { usePathname } from 'next/navigation'

const DondeEscalar = () => {
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [pathname])

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-custom-pink"></div>
            </div>
        )
    }

    return (
        <div className="bg-white z-10">
            <div className="text-base text-main-gray w-full pt-24 px-5 lg:px-20 flex flex-col">
                <Title title="WHERE TO CLIMB" subtitle="Where to climb" text="Where to climb" />
                <div className='flex lg:flex-row flex-col'>
                    <div className='flex-1 overflow-y-auto'>
                        <ClimbingPlacesFilters />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DondeEscalar