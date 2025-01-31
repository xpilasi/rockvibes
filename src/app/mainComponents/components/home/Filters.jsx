import React from 'react';
import Filter from '../Filter';
import FilterButton from '../FilterButton.jsx';

const Filters = ({showFilters}) => {

  console.log(`MY-FILTER = ${showFilters}`);
   

  const tipoDeEscalada = ['Tipo 1', 'Tipo 2', 'Tipo 3']  
  const indoorOutdoor = ['Indoor/Outdoor','Indoor', 'Outoor']  
  const reviews = ['Reviews', '1 pto', '2 ptos']  
  const ciudad = ['Tipo 1', 'Tipo 2', 'Tipo 3']  

  return (
    <div className='container mx-auto px-4 py-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3'>
        <div className={`lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ${showFilters ? 'block' : 'hidden'}`}>
          <Filter optionsArray={tipoDeEscalada} showFilter={true} />
          <Filter optionsArray={indoorOutdoor} showFilter={true} />
          <Filter optionsArray={reviews} showFilter={true} />
          <Filter optionsArray={ciudad} showFilter={true} />
        </div>
        <FilterButton buttonText={showFilters ? 'Cerrar Filtros' : 'Abrir Filtros'} showFilter={true} />
      </div>
    </div>
  )
}

export default Filters