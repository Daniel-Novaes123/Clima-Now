import { useState } from 'react';
import { Button } from '../Button';
import React from 'react';

interface SearchBarProps {
    onSearch: (city: string) => void;
    isLoading?: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        const city = inputValue.trim();

        if (!city) return;

        onSearch(city);
        setInputValue('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        >
            <div className="relative flex-1">
                <label htmlFor="city" className="sr-only">
                    Cidade
                </label>

                <input
                    id="city"
                    type="text"
                    placeholder="Ex: Digite sua cidade..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50"
                />
            </div>

            <Button
                type="submit"
                isLoading={isLoading}
                disabled={isLoading}
            >
                Buscar Clima
            </Button>
        </form>
    )
}