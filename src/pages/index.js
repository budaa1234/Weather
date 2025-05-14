import { Sun } from "@/Components/Sun";
import { Moon } from "@/Components/Moon";
import { Sum } from "@/Components/Sum";
import { useState } from "react";
export default function Home() {
  const [weather, setWeather] = useState({});

  const cityUrl = `https://api.api-ninjas.com/v1/city?name=Ulaanbaatar`;

  const getCity = async () => {
    try {
      const response = await fetch(cityUrl, {
        headers: {
          "X-Api-Key": "JAmSPW3U/yuidAkPKuBopg==EhSpVGxOD4Ck9ZQ7",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getWeather = async () => {
    try {
      const cityLocation = await getCity();

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[0].latitude}&lon=${cityLocation[0].longitude}&appid=b70b0a8300df32bea5bb56e1a9d00a88`
      );

      const data = await response.json();
      setWeather(data)
    } catch (error) {
      console.log(error);
    }
  };
  console.log("first", weather);
  return (
    // <div>
    //   <button onClick={getWeather}>get</button>
    //   <p>date:{weather.name}</p>
    //   <p>temp:{weather.main?.temp}</p>
    // </div>
    <div className="flex min-h-screen">
      <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[140px] h-[140px]">
        <Sum />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[540px] h-[540px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[940px] h-[940px]"></div>
      {/* zuun */}
      <div className="relative flex flex-1/2 items-center justify-center gap-y-[20px]">
        <div className="relative flex w-[567px] justify-center ">
          <div className="w-103 h-207 rounded-[48px] overflow-hidden shadow-lg bg-[#F3F4F6]">
            <input
              type="text"
              placeholder="Search"
              className="absolute  right-[70px] pl-[30px] w-full -top-16 text-[32px] bg-[#FFFFFF] shadow-md rounded-[48px] "
            />
            <div className="flex-col items-center justify-center gap-y-20">
              <p className="p-[40px] h-12 text-3xl font-extrabold text-gray-900">
                {weather.name}
              </p>
              <Sun />
              <p className="p-[40px] text-transparent bg-clip-text font-extrabold text-[100px] -mt-10 bg-gradient-to-b from-black to-white ">
                {weather.main?.temp}
              </p>
              <button className="border" onClick={getWeather} >get</button>
            </div>
          </div>
        </div>
      </div>
      {/* baruun */}
      <div className="relative flex flex-1/2 items-center justify-center bg-[#0F141E]">
        <div className="relative flex w-[567px] justify-center z-10">
          <div className="z-20 w-103 h-207 rounded-[48px] overflow-hidden shadow-lg bg-[#111827]/75">
            <p className=" p-[40px] h-12 text-3xl font-extrabold text-[#FFFFFF]">
              {weather.name}
            </p>
            <Moon />
            <p className="p-[40px]  text-transparent bg-clip-text font-extrabold text-[100px] -mt-10 bg-gradient-to-b from-black to-white ">
              {weather.main?.temp}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
