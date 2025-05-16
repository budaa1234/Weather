import { Sun } from "@/Components/Sun";
import { Moon } from "@/Components/Moon";
import { User } from "@/Components/User";
import { Circle } from "@/Components/circle";
import { Narb } from "@/Components/Narb";
import { Sarz } from "@/Components/Sarz";
import { useEffect, useState } from "react";
import { SearchBar } from "@/Components/SearchBar";
export default function Home() {
  const [weather, setWeather] = useState({});
  const [searchValue, setSearchValue] = useState("ulaanbaatar");
  const [cities, setCities] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=e6600c3f220e429fa5e25438251505&q=${searchValue}`
      );

      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCities = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const data = await response.json();
      setCities(data.data);
    } catch (error) {
      setError("No location found");
    }
  };

  useEffect(() => {
    getWeather();
    getCities();
  }, []);
  const handleChange = (event) => {
    setSearchValue(event.target.value);

    const citiesAndcounty = cities.flatMap((country) =>
      country.cities.map((city) => `${city}, ${country.country}`)
    );

    const city = citiesAndcounty
      ?.filter((item) =>
        item.toLowerCase().startsWith(searchValue.toLocaleLowerCase())
      )
      .slice(0, 4);
    setFilteredCity(city);
  };
  return (
    <div className="flex min-h-screen">
      {/* zuun */}

      <div className="relative flex flex-1/2 items-center justify-center">
        <Narb />
        <div className=" relative flex-col w-[567px] justify-center z-20">
          <div className="absolute flex w-full  pl-[30px]  -top-16 text-[30px] bg-[#FFFFFF] shadow-md rounded-[48px] z-20">
            <SearchBar
              handleChange={handleChange}
              searchValue={searchValue}
              filteredCity={filteredCity}
              setSearchValue={setSearchValue}
              getWeather={getWeather}
            />
            {error && <div>{error}</div>}
          </div>
          <div className="relative flex w-[567px] justify-center z-10">
            <div className=" z-20 w-103 h-207 rounded-10.5 overflow-hidden shadow-lg bg-white/75 rounded-[48px]">
              <div className="flex-col items-center justify-center gap-y-20">
                <p className="pl-[40px] text-[#9CA3AF]">
                  {weather.forecast?.forecastday[0]?.date}
                </p>
                <p className="p-[40px] h-12 text-3xl font-extrabold text-gray-900">
                  {weather.location?.name}
                </p>
                <Sun />
                <p className="p-[40px] text-transparent bg-clip-text font-extrabold text-[80px] -mt-10 bg-gradient-to-b from-black to-white ">
                  {weather.forecast?.forecastday[0]?.day?.maxtemp_c}°C
                </p>
                <h6 className="font-extrabold h-6 text-[#FF8E27] p-[40px]">
                  {weather.forecast?.forecastday[0]?.day?.condition?.text}
                </h6>
                <User />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Circle />

      {/* baruun */}

      <div className="relative flex flex-1/2 items-center justify-center bg-[#0F141E]">
        <div className="relative flex w-[567px] justify-center z-10 pt-[57px]">
          <div className="z-20 w-103 h-207 rounded-10.5 overflow-hidden shadow-lg bg-[#111827]/75  rounded-[48px]">
            <p className="pl-[40px] text-[#9CA3AF]">
              {weather.forecast?.forecastday[0]?.date}
            </p>
            <p className=" p-[40px] h-12 text-3xl font-extrabold text-[#FFFFFF]">
              {weather.location?.name}
            </p>
            <Moon />
            <p className="p-[40px]  text-transparent bg-clip-text font-extrabold text-[80px] -mt-10 bg-gradient-to-b from-black to-white ">
              {weather.forecast?.forecastday[0]?.day?.mintemp_c}°C
            </p>
            <h6 className="font-extrabold h-6 text-[#777CCE] p-[40px]">
              {weather.forecast?.forecastday[0]?.day?.condition?.text}
            </h6>
            <User />
          </div>
        </div>
        <Sarz />
      </div>
    </div>
  );
}
