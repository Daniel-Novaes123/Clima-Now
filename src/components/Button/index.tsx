import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

export const Button = ({
    children,
    isLoading,
    ...rest
}: ButtonProps) => {
    return (
        <button
            disabled={isLoading || rest.disabled}
            className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 active:scale-95 transition-all duration-200 font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-35"
            {...rest}
        >
            {isLoading ? 'Carregando...' : children}
        </button>
    );
};