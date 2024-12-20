import React from 'react';
import Filter from '../Filter';
import FilterButton from '../FilterButton.jsx';

const Filters = (showFilters) => {

  console.log(`MY-FILTER = ${showFilters}`);
   

  const tipoDeEscalada = ['Tipo 1', 'Tipo 2', 'Tipo 3']  
  const indoorOutdoor = ['Indoor/Outdoor','Indoor', 'Outoor']  
  const reviews = ['Reviews', '1 pto', '2 ptos']  
  const ciudad = ['Tipo 1', 'Tipo 2', 'Tipo 3']  

  return (
    <div className='py-5 grid  grid-cols-2 lg:flex flex-col gap-3  justify-between lg:justify-start md:justify-start md:gap-2   xl:gap-7'>
        <Filter optionsArray={tipoDeEscalada} showFilter={showFilters}/>
        <Filter optionsArray={indoorOutdoor}showFilter={showFilters}/>
        <Filter optionsArray={reviews} showFilter={showFilters}/>
        <Filter optionsArray={ciudad}showFilter={showFilters}/>
        <FilterButton buttonText='Filtrar'/>
        
    </div>
  )
}

export default Filters