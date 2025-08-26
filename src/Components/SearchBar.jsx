import { Search } from "lucide-react";

export const SearchBar = ({
  searchValue,
  handleChange,
  filteredCity,
  setSearchValue,
  getWeather,
  setFilteredCity, // ⬅️ энэ проп нэмэгдсэн
}) => {
  const changeWeather = (value) => {
    setSearchValue(value.split(",")[0]); 
    setFilteredCity([]); // ⬅️ сонгосон даруйд жагсаалт алга болгоно
    getWeather();
  };

  return (
    <div className="relative w-full">
      {/* input wrapper */}
      <div className="relative w-full bg-white shadow-md rounded-full">
        <Search
          size={24}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          value={searchValue}
          placeholder="search city ..."
          onChange={handleChange}
          className="w-full py-4 pl-16 pr-6 text-[32px] font-bold outline-none rounded-full"
        />
      </div>

      {/* Suggestions */}
      {filteredCity.length > 0 && (
        <div className="absolute top-full w-full mt-1 bg-white shadow-md rounded-b-md overflow-hidden z-50">
          {filteredCity.map((city, index) => (
            <div
              key={index}
              onClick={() => changeWeather(city)}
              className="px-6 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
