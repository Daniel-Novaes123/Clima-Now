import { useEffect, useState } from "react";
import type { WeatherResponse } from "../types/weather";
import { getWeather } from "../services/api";

export const useWeather = (city: string) => {
    const [data, setData] = useState<WeatherResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await getWeather(city);
                setData(result);
            } catch (err) {
                console.error("Erro na busca do clima:", err);
                setError('Não foi possível carregar o clima.')
            } finally {
                setLoading(false)
            }
        }

        if (city) {
            fetchData();
        }

    }, [city])

    return { data, loading, error };
}