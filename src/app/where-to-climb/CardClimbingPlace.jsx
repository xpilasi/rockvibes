import React from 'react'
import Image from 'next/image'
import { 
    IoStarOutline, 
    IoChatbubbleOutline, 
    IoLocationOutline,
    IoHeartOutline 
} from 'react-icons/io5'


const CardClimbingPlace = ({
    date,
    title,
    description,
    srcImg,
    location,
    rating
}) => {
    const desc = description ? `${description.substring(0,65)}...` : ''
    const imageSrc = srcImg || '/placeholder-image.jpg'

    return (
        <div className='flex flex-col z-10 gap-0 hover:scale-95 hover:cursor-pointer transition-all duration-300 ease-in-out'>
            <div className="relative z-0 h-40 w-full">
                <Image
                    src={imageSrc}
                    alt={title || 'Climbing place'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    className="object-cover z-0"
                    unoptimized={true}
                />
                <div className='z-50'></div>
                <IoChatbubbleOutline className="w-4 h-4 absolute top-2 right-2 text-pink-500" />
            </div>
            
            <div className='pb-5 flex flex-col'>
                <div className='font-rift-bold text-sm py-2'>{title}</div>
                <div className='font-soleil-light text-sm text-gray-500 leading-5'>{desc}</div>
                <div className='flex flex-row justify-between text-sm tracking-tight text-gray-400 font-soleil-light'>
                    <div className='flex flex-row justify-start gap-1 py-3'>
                        <IoLocationOutline className="w-4 h-4 text-pink-500" />
                        <div>{location}</div>
                    </div>

                    <div className='flex flex-row justify-start gap-1 py-3'>
                        <span className='text-gray-700 mr-1'>{rating}</span>
                        <IoStarOutline className="w-4 h-4 text-pink-500" />
                    </div>

                    <div className='flex flex-row justify-start gap-1 py-3'>
                        <IoChatbubbleOutline className="w-4 h-4 text-pink-500" />
                        <div>103</div>
                    </div>

                    <div className='flex flex-row justify-start gap-1 py-3'>
                        <IoHeartOutline className="w-4 h-4 text-pink-500" />
                        <div>34</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardClimbingPlace