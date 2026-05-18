
import { SearchBar } from './components/Searchbar';
import { WeatherCard } from './components/WeatherCard'
import { WeatherList } from './components/WeatherList';
import { Loading } from './components/Loading';
import { useWeather } from './hooks/useWeather';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const { data, loading, error } = useWeather(city)


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 p-4">

      <div className="w-full max-w-2xl text-white space-y-6">

        <SearchBar onSearch={setCity} />

        {loading && <Loading />}

        {error && (
          <p className="text-center text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg p-3">
            {error}
          </p>
        )}

        {!loading && data && (
          <div className="text-center space-y-4">

            <h1 className="text-3xl font-bold">
              {data.results.city}
            </h1>

            <span className="text-sm text-white/70">
              Nascer do Sol: {data.results.sunrise} | Pôr do Sol: {data.results.sunset}
            </span>

            <WeatherCard weather={data} />
            <WeatherList forecasts={data.results.forecast} />

          </div>
        )}

      </div>
    </div>
  )
}



export default App
