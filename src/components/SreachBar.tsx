import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className="hidden md:flex mb-3 items-center gap-2 rounded-md ring-1 ring-gray-200 bg-gray-100 px-2 py-1 w-64 shadow-md">
      <Search size={20} className=" h-4 w-4 text-gray-500" />
      <input
        id="search"
        placeholder="Search..."
        className=" text-sm outline-0 "
      />
    </div>
  )
}
export default SearchBar
