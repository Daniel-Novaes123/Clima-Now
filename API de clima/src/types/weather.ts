export interface WeatherResponse {

    results: {
        city: string
        temp: number
        description: string
        humidity: number
        wind_speedy: string
        condition_slug: string
        date: string,
        forecast: ForecastDay[]
        sunset: string,
        sunrise: string
    }



}

export interface ForecastDay {
    date: string
    weekday: string
    max: number
    min: number
    description: string
    condition: string
}