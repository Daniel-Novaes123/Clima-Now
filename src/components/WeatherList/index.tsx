import type { ForecastDay } from "../../types/weather";
import { WeatherIcon } from "../Icons/WeatherIcons";

interface WeatherListProps {
    forecasts: ForecastDay[]
}

export function WeatherList({
    forecasts
}: WeatherListProps) {
    console.log(forecasts)

    const getWeekday = (dateString: string) => {

        const [day, month] = dateString.split('/')

        const dayNumber = Number(day)
        const monthNumber = Number(month)

        const dateObj = new Date(
            new Date().getFullYear(),
            monthNumber - 1,
            dayNumber
        );

        let weekday = new Intl.DateTimeFormat('pt-BR', {
            weekday: 'long',
        }).format(dateObj);

        weekday = weekday.split('-')[0];

        return (
            weekday.charAt(0).toUpperCase() +
            weekday.slice(1)

        );
    }

    return (
        <section className="w-full max-w-md mx-auto mt-6 grid grid-cols-1 gap-3 text-white">

            {forecasts.slice(1).map((forecast) => (
                <div
                    key={forecast.date}
                    className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-md hover:bg-white/15 transition"
                >

                    <div className="flex flex-col">
                        <p className="text-sm font-medium">
                            {getWeekday(forecast.date)}
                        </p>
                        <span className="text-xs text-white/60">
                            {forecast.date}
                        </span>
                    </div>

                    <WeatherIcon
                        condition={forecast.condition}
                        alt={forecast.description}
                    />

                    <p className="font-semibold">
                        {forecast.min}° / {forecast.max}°
                    </p>

                </div>
            ))}

        </section>
    )
}