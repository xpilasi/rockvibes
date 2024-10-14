import React from 'react';
import Filter from '../Filter';
import FilterButton from '../FilterButton';

const Filters = () => {
  return (
    <div className='py-5 flex flex-row justify-between lg:px-20 px-10'>
        <Filter filterText='Tipo de escalada'/>
        <Filter filterText='Ciudad'/>
        <Filter filterText='Indoor/Outdoor'/>
        <Filter filterText='Reviews'/>
        <FilterButton buttonText='Buscar'/>
       
    </div>
  )
}

export default Filters