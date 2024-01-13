import { Fragment, useState } from "react";
import search from "./assets/icons/search.svg";
import Background from "./components/Background";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";
import { useStateContext } from "./context/Index";

const App = () => {
  const [input, setInput] = useState("");
  const {weather, place, values, setPlace}=useStateContext()

  const submitCity=()=>{
    setPlace(input)
    setInput('')
  }
  return (
    <Fragment>
    <div className="w-full h-screen text-black px-8">
      <nav className="w-full p-3 justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-br from-purple-200 via-pink-600 text-transparent bg-clip-text">
          Weather Here
          <div className="bg-white w-[15rem] overflow-hidden  shadow-2xl rounded flex text-center p-2 gap-2 float-right">
            <img src={search} className="w-[0.8rem] h-[1rem]" />
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submitCity()
                }
              }}
              type="text"
              placeholder="Type city name"
              className="focus:outline-none w-full text-black text-xs border-solid"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </h1>
      </nav>
      <Background />
      <main className="w-full flex flex-wrap grap-8 py-4 px-[10%] items-center justify-center">
        <div className="float-left">
          <WeatherCard 
          place={place}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
          />
        </div>
        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>

        {
          values?.slice(1, 7).map(curr => {
            console.log(curr);
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })
          
        }
        
      </div>
    </main>
    </div>
    </Fragment>
  );
};

export default App;

