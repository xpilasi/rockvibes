const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="text-2xl text-black text-3xl">SPINNER</div>
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-pink-500 border-t-transparent"></div>
      </div>
    </div>
  )
}

export default Spinner 