import React, { useState } from "react";

import {
    Button,
    Checkbox,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@blueprint/ui";

// Ensure correct import

type ParameterData = {
    parameterName: string;
    searchLocation: string;
    travelTime: string;
    travelMethod: string;
    time: string;
    arrivalOrDeparture: boolean;
    ampm: string;
};

interface ParametersProps {
    onImport: (importedParams: ParameterData[]) => void;
}

export default function YourParameters({ onImport }: ParametersProps) {
    const exampleParameters: ParameterData[] = [
        {
            parameterName: "Morning Workout",
            searchLocation: "Gym",
            travelTime: "15",
            travelMethod: "walking",
            time: "07:00",
            arrivalOrDeparture: true,
            ampm: "am",
        },
        {
            parameterName: "Office Commute",
            searchLocation: "Office",
            travelTime: "30",
            travelMethod: "driving",
            time: "08:30",
            arrivalOrDeparture: true,
            ampm: "am",
        },
        {
            parameterName: "Grocery Shopping",
            searchLocation: "Supermarket",
            travelTime: "10",
            travelMethod: "biking",
            time: "05:00",
            arrivalOrDeparture: false,
            ampm: "pm",
        },
        {
            parameterName: "Evening Walk",
            searchLocation: "Park",
            travelTime: "20",
            travelMethod: "walking",
            time: "06:30",
            arrivalOrDeparture: false,
            ampm: "pm",
        },
        {
            parameterName: "Weekend Brunch",
            searchLocation: "Cafe",
            travelTime: "15",
            travelMethod: "public transport",
            time: "10:00",
            arrivalOrDeparture: true,
            ampm: "am",
        },
    ];

    const [selectedParameters, setSelectedParameters] = useState<ParameterData[]>([]);

    const handleCheckboxChange = (parameter: ParameterData) => (isChecked: boolean) => {
        setSelectedParameters((prevSelected) => {
            if (isChecked) {
                return [...prevSelected, parameter];
            } else {
                return prevSelected.filter((p) => p.parameterName !== parameter.parameterName);
            }
        });
    };

    const handleImport = () => {
        onImport(selectedParameters);
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger className="rounded-md bg-black p-2 text-white">
                    Your Parameters
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>Import from your parameters:</DialogHeader>
                    <DialogDescription>Select and import your saved parameters.</DialogDescription>
                    {exampleParameters.map((param, index) => (
                        <div key={index} className="flex items-center">
                            <Checkbox
                                checked={selectedParameters.some(
                                    (p) => p.parameterName === param.parameterName,
                                )}
                                onCheckedChange={handleCheckboxChange(param)}
                            />
                            <span className="ml-2">{param.parameterName}</span>
                        </div>
                    ))}
                    <DialogFooter className="p-4">
                        <DialogClose asChild>
                            <Button className="mx-2">Close</Button>
                        </DialogClose>
                        <Button onClick={handleImport}>Import</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
