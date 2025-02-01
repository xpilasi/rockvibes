'use client'

import { useState, useEffect } from 'react'
import FilterSelect from './components/FilterSelect'
import CardClimbingPlace from './CardClimbingPlace'
import Spinner from '../components/Spinner'
import { IoRefreshOutline } from 'react-icons/io5'

const ClimbingPlacesFilters = () => {
    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filters, setFilters] = useState({
        location: 'all',
        rating: 'all',
        type: 'all'
    })

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                console.log('Frontend: Starting fetch')
                setLoading(true)
                const response = await fetch('/api/climbing-places')
                console.log('Frontend: Got response:', response.status)
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                
                const data = await response.json()
                console.log('Frontend: Got data:', data)
                setPlaces(data)
            } catch (error) {
                console.error('Frontend Error:', error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPlaces()
    }, [])

    const uniqueLocations = ['all', ...new Set(places?.map(place => place.location) || [])]

    const filterConfigs = [
        {
            label: 'Location',
            value: filters.location,
            options: uniqueLocations,
            onChange: (value) => setFilters(prev => ({ ...prev, location: value }))
        },
        {
            label: 'Minimum Rating',
            value: filters.rating,
            options: ['all', '1', '2', '3', '4', '5'],
            onChange: (value) => setFilters(prev => ({ ...prev, rating: value }))
        },
        {
            label: 'Type',
            value: filters.type,
            options: ['all', 'indoor', 'outdoor'],
            onChange: (value) => setFilters(prev => ({ ...prev, type: value }))
        }
    ]

    const filteredPlaces = places.filter(place => {
        if (filters.location !== 'all' && place.location !== filters.location) return false
        if (filters.rating !== 'all' && place.rating < parseInt(filters.rating)) return false
        if (filters.type !== 'all' && place.type !== filters.type) return false
        return true
    })

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div className="text-red-500 text-center py-8">Error: {error}</div>
    }

    if (!places || places.length === 0) {
        return <div className="text-center py-8 font-soleil-regular">No climbing places found. Database might be empty.</div>
    }

    return (
        <div className='w-full'>
            <div className='flex justify-between items-center mb-6'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 grow'>
                    {filterConfigs.map((config, index) => (
                        <div key={index} className={`relative z-[${30 - index}]`}>
                            <FilterSelect {...config} />
                        </div>
                    ))}
                </div>
                <button 
                    onClick={() => {
                        setLoading(true)
                        setPlaces([])
                    }}
                    className='ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors'
                    disabled={loading}
                >
                    <IoRefreshOutline 
                        className={`w-6 h-6 text-pink-500 ${loading ? 'animate-spin' : ''}`}
                    />
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-0'>
                {filteredPlaces.map((place) => (
                    <CardClimbingPlace
                        key={place._id}
                        date={place.creationDate}
                        title={place.title}
                        description={place.description}
                        srcImg={place.scrImg}
                        location={place.location}
                        rating={place.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default ClimbingPlacesFilters 