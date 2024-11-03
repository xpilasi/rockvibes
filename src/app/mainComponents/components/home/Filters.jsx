import React from 'react';
import Filter from '../Filter';
import FilterButton from '../FilterButton.jsx';

const Filters = () => {

   
  const tipoDeEscalada = ['Tipo 1', 'Tipo 2', 'Tipo 3']  
  const indoorOutdoor = ['Indoor/Outdoor','Indoor', 'Outoor']  
  const reviews = ['Reviews', '1 pto', '2 ptos']  
  const ciudad = ['Tipo 1', 'Tipo 2', 'Tipo 3']  

  return (
    <div className='py-5 grid  grid-cols-2 lg:flex  flex-col gap-3 lg:flex-row justify-between lg:justify-start md:justify-start md:gap-2 lg:px-0  xl:gap-7'>
        <Filter optionsArray={tipoDeEscalada}/>
        <Filter optionsArray={indoorOutdoor}/>
        <Filter optionsArray={reviews}/>
        <Filter optionsArray={ciudad}/>
        {/* <FilterButton buttonText='Buscar'/> */}
        
    </div>
  )
}

export default Filters