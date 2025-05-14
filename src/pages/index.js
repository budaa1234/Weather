import { Sun } from "@/Components/Sun";
import { Moon } from "@/Components/Moon";
import { useState } from "react";
export default function Home() {
  const [weather, setWeather] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=b70b0a8300df32bea5bb56e1a9d00a88`;
  const cityUrl = `https://api.api-ninjas.com/v1/city?name=Ulaanbaar`;

  const getCity = async () => {
    try {
      const response = await fetch(cityUrl, {
        headers: {
          "X-Api-Key": "JAmSPW3U/yuidAkPKuBopg==EhSpVGxOD4Ck9ZQ7",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getWeather = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={getCity}>city</button>
      <button onClick={getWeather}>get</button>
      <p>date:{weather.name}</p>
      <p>temp:{weather.main?.temp}</p>
    </div>
    // <div className="flex min-h-screen">
    //   <div className="relative flex flex-1/2 items-center justify-center">
    //     <div className="relative flex w-[567px] justify-center z-10">
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         className="absolute right-[70px] w-full -top-16 z-30 text-[32px]"
    //       />
    //       <div className="z-20 w-103 h-207 rounded-[48px] overflow-hidden shadow-lg bg-white/75">
    //         <Sun />
    //       </div>
    //     </div>
    //   </div>
    //   {/* baruun */}
    //   <div className="relative flex flex-1/2 items-center justify-center ">
    //     <div className="relative flex w-[567px] justify-center z-10">
    //       <div className="z-20 w-103 h-207 rounded-[48px] overflow-hidden shadow-lg bg-[#111827]/75">
    //         <Moon />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
