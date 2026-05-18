import type { WeatherResponse } from "../../types/weather"
import { InfoIcons } from "../Icons/InfoIcons"
import { WeatherIcon } from "../Icons/WeatherIcons"

interface WeatherCardProps {
    weather: WeatherResponse
}


export const WeatherCard = ({ weather }: WeatherCardProps) => {
    const today = weather.results.forecast?.[0]

    return (
        <section className="w-full max-w-md mx-auto mt-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 p-6 text-white">

            <p className="text-sm text-white/70">
                Hoje ({today?.date})
            </p>

            <div className="flex items-center justify-between mt-3">
                <WeatherIcon condition={weather.results.condition_slug} />
                <h2 className="text-5xl font-bold tracking-tight">
                    {weather.results.temp}°C
                </h2>
            </div>

            <p className="mt-2 text-white/80 capitalize">
                {weather.results.description}
            </p>

            <div className="mt-6 space-y-3">

                <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2 text-white/80">
                        <InfoIcons type="humidity" />
                        <p>Umidade</p>
                    </div>
                    <span className="font-semibold">
                        {weather.results.humidity}%
                    </span>
                </div>

                <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2 text-white/80">
                        <InfoIcons type="temperature" />
                        <p>Min / Max</p>
                    </div>
                    <span className="font-semibold">
                        {today?.min}° / {today?.max}°
                    </span>
                </div>

            </div>
        </section>
    )
}