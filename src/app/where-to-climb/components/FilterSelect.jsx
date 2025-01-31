import Select from 'react-select'

const FilterSelect = ({ label, value, options, onChange }) => {
  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  // Convert options array to format required by react-select
  const selectOptions = options.map(option => ({
    value: option,
    label: option === 'all' 
      ? `All ${label}s` 
      : label === 'Minimum Rating' 
        ? `${option} Stars+`
        : capitalizeFirstLetter(option)
  }))

  // Find current value object
  const currentValue = selectOptions.find(option => option.value === value)

  const customClassNames = {
    control: (state) => 
      'border border-gray-200 min-h-[42px] bg-white shadow-none hover:border-pink-500 ' + 
      (state.isFocused ? 'border-pink-500' : ''),
    menu: () => 
      'mt-0 bg-white shadow-lg absolute w-full',
    menuList: () => 
      'p-0',
    option: ({ isSelected, isFocused }) => 
      `px-4 py-2 cursor-pointer ${
        isSelected 
          ? 'bg-pink-500 text-white' 
          : isFocused 
            ? 'bg-pink-50 text-gray-700' 
            : 'bg-white text-gray-700'
      }`,
    placeholder: () => 
      'text-gray-400',
    singleValue: () => 
      'text-gray-700',
    valueContainer: () => 
      'px-3',
    dropdownIndicator: () => 
      'text-pink-500 hover:text-pink-500 px-2',
    indicatorsContainer: () => 
      'cursor-pointer'
  }

  return (
    <div className='w-full relative'>
      <Select
        value={currentValue}
        onChange={(option) => onChange(option.value)}
        options={selectOptions}
        classNames={customClassNames}
        isSearchable={false}
        className="w-full"
        classNamePrefix="select"
        placeholder={`Select ${label.toLowerCase()}`}
        unstyled
      />
    </div>
  )
}

export default FilterSelect 