import type { WeatherResponse } from "../types/weather";
const KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city: string): Promise<WeatherResponse> => {
    try {
        const url = `https://api.hgbrasil.com/weather?format=json-cors&key=${KEY}&city_name=${city}`
        const response = await fetch(url)
        const data: WeatherResponse = await response.json()
        return data
    } catch (error) {
        console.error('não foi possível buscar os dados da api', error)
        throw error;
    }
}