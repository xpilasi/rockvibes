'use client'
import React, { useState } from 'react'
import { boulderGrades, sportGrades } from './gradesData'
import FilterSelect from '../where-to-climb/components/FilterSelect'

const GradesConverter = () => {
  const [selectedBoulderSystem, setSelectedBoulderSystem] = useState('french')
  const [selectedBoulderGrade, setSelectedBoulderGrade] = useState('')
  const [selectedSportSystem, setSelectedSportSystem] = useState('french')
  const [selectedSportGrade, setSelectedSportGrade] = useState('')

  const systemOptions = ['french', 'usa']

  const getEquivalentGrade = (system, grade, type) => {
    const grades = type === 'boulder' ? boulderGrades : sportGrades
    const fromSystem = system
    const toSystem = system === 'french' ? 'usa' : 'french'
    
    const index = grades[fromSystem].indexOf(grade)
    return index !== -1 ? grades[toSystem][index] : 'Select grade'
  }

  return (
    <section className='lg:min-h-screen min-h-[calc(100vh-4rem)] bg-cover text-base text-main-gray bg-woman-climber-rocks-bn w-full flex flex-col justify-center items-center align-middle'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full lg:px-20 px-5'>
        {/* Boulder Section */}
        <article className='text-white font-riftBold'>
          <div className='text-xl flex flex-col gap-5'>
            <h2 className='text-4xl mb-5'>Boulder</h2>
            <div className='flex flex-row gap-5'>
              <FilterSelect
                label="System"
                value={selectedBoulderSystem}
                options={systemOptions}
                onChange={setSelectedBoulderSystem}
              />
              <FilterSelect
                label="Grade"
                value={selectedBoulderGrade}
                options={boulderGrades[selectedBoulderSystem]}
                onChange={setSelectedBoulderGrade}
              />
            </div>
            <div className='flex flex-row gap-5'>
              <div className='w-full px-4 py-5 flex flex-row justify-between'>
                <div className='w-full text-white'>
                  {selectedBoulderSystem === 'french' ? 'USA' : 'French'}
                </div>
              </div>
              <div className='w-full  px-4 py-5 flex flex-row justify-between'>
                <div className='w-full text-white'>
                  {selectedBoulderGrade ? 
                    getEquivalentGrade(selectedBoulderSystem, selectedBoulderGrade, 'boulder') : 
                    'Equivalent grade'}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Sport Climbing Section */}
        <article className='text-white font-riftBold'>
          <div className='text-xl flex flex-col gap-5'>
            <h2 className='text-4xl mb-5'>Sport Climbing</h2>
            <div className='flex flex-row gap-5'>
              <FilterSelect
                label="System"
                value={selectedSportSystem}
                options={systemOptions}
                onChange={setSelectedSportSystem}
              />
              <FilterSelect
                label="Grade"
                value={selectedSportGrade}
                options={sportGrades[selectedSportSystem]}
                onChange={setSelectedSportGrade}
              />
            </div>
            <div className='flex flex-row gap-5'>
              <div className='w-full  px-4 py-5 flex flex-row justify-between'>
                <div className='w-full text-white'>
                  {selectedSportSystem === 'french' ? 'USA' : 'French'}
                </div>
              </div>
              <div className='w-full  px-4 py-5 flex flex-row justify-between'>
                <div className='w-full text-white'>
                  {selectedSportGrade ? 
                    getEquivalentGrade(selectedSportSystem, selectedSportGrade, 'sport') : 
                    'Equivalent grade'}
                </div> 
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default GradesConverter