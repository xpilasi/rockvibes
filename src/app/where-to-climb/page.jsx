'use client'
import Layout from '../layout.jsx'
import ArnesImg from '../../../public/assets/img/img-blog/arnes.jpg'
import PiesDeGatoImg from '../../../public/assets/img/img-blog/pies-de-gato.jpg'
import MagnesioImg from '../../../public/assets/img/img-blog/magnesio.jpg'
import CardClimbingPlace from './CardClimbingPlace';
import Filters from '../mainComponents/components/home/Filters';
import Sharma from '../../../public/assets/img/places/StockCake-Indoor Climbing Gym_1730730764.jpg'
import ClimbingCenter from '../../../public/assets/img/places/StockCake-Vibrant Climbing Gym_1730731561.jpg'
import BlockDistrict from '../../../public/assets/img/places/block-district.jpg'
import Rock1 from '../../../public/assets/img/places/rock-q.jpg'
import Monoblock from '../../../public/assets/img/places/monoblock.jpg'
import Foixarda from '../../../public/assets/img/places/foixarda.jpg'
import SharmaGava from '../../../public/assets/img/places/sharma-gava.jpg'
import IndorwallClot from '../../../public/assets/img/places/indorwall-clot.jpg'
import Center from '../../../public/assets/img/places/center.jpg'
import { useRef, useState, useEffect } from 'react'
import ClimbingPlacesFilters from './ClimbingPlacesFilters'

const DondeEscalar = () => {

    const filtersRef = useRef(null);
    const [showFilters,setShowFilters] = useState(false)

    useEffect(() => {
        if (filtersRef.current) {
            filtersRef.current.classList.add('-translate-x-[15rem]');
        }
    }, []);

    useEffect(() => {
        if (filtersRef.current) {
            if (showFilters) {
                filtersRef.current.classList.remove('-translate-x-[15rem]');
                filtersRef.current.classList.add('translate-x-0');
            } else {
                filtersRef.current.classList.add('-translate-x-[15rem]');
                filtersRef.current.classList.remove('translate-x-0');
            }
        }
    }, [showFilters]);

    const handleFilter = () => {
        setShowFilters(!showFilters);
    }


    
    return (
        <Layout>
            <div className=" bg-white z-10">
                <div className=']  text-base text-textMainText  w-full pt-24  px-5 lg:px-20 0 flex flex-col  '>
                    <div className='lg:text-6xl text-3xl  md:text-5xl font-rift-demi lg:pb-5   '>Dónde escalar</div>
                    <div className='flex lg:flex-row flex-col'>
                       
                        
                        <div className='flex-1 overflow-y-auto '>
                            <ClimbingPlacesFilters  />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default DondeEscalar