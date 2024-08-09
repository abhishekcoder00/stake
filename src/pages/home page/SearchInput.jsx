import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchInput = ({ setSearchTerm }) => {
  const [searchTerm, setLocalSearchTerm] = React.useState('');

  const handleClear = () => {
    setLocalSearchTerm('');
    setSearchTerm('');
  };

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setLocalSearchTerm(newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="justify-center p-4 max-w[200px]">
      <div className="relative w-full ">
        <FaSearch className="absolute left-3 top-2.5 text-white" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="w-full py-2 pl-10 pr-10 text-white bg-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
        />
        {searchTerm && (
          <FaTimes
            className="absolute right-3 top-2.5 text-white cursor-pointer"
            onClick={handleClear}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
