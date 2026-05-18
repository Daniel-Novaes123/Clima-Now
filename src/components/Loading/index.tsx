import { Spinner } from "../Spinner"

export const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Spinner />
            <p>Buscando clima...</p>
        </div>
    )
}