import {
    Sun,
    Moon,
    Cloud,
    CloudRain,
    CloudLightning
} from "lucide-react"

interface WeatherIconProps {
    condition: string,
    alt?: string,
}

export const WeatherIcon = ({
    condition
}: WeatherIconProps) => {

    switch (condition) {

        case "clear_day":
            return (
                <Sun className="w-12 h-12 text-yellow-400" />
            )

        case "clear_night":
            return (
                <Moon className="w-12 h-12 text-slate-300" />
            )

        case "rain":
            return (
                <CloudRain className="w-12 h-12 text-blue-400" />
            )

        case "storm":
            return (
                <CloudLightning className="w-12 h-12 text-yellow-300" />
            )

        default:
            return (
                <Cloud className="w-12 h-12 text-slate-400" />
            )
    }
}