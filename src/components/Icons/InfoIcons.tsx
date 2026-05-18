import {
    Droplets,
    Thermometer,
} from "lucide-react";

interface InfoIconProps {
    type: "humidity" | "temperature"
}

export const InfoIcons = ({
    type
}: InfoIconProps) => {

    switch (type) {

        case "humidity":
            return (
                <Droplets className="h-5 w-5 text-blue-700" />
            )

        case "temperature":
            return (
                <Thermometer className="h-5 w-5 text-red-600" />
            )

        default:
            return null
    }
}