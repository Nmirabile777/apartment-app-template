import React from "react";

import * as z from "zod";

import {
    Card,
    CardDescription,
    CardFooter,
    CardTitle,
    Label,
    ScrollArea,
    Switch,
} from "@blueprint/ui";

import { FormSchema } from "@/app/sidebar/sidebarForm";

const colors = [
    "#BC8F8F",
    "#A8D5BA",
    "#D1C4E9",
    "#5DA0A2",
    "#BDC3C7",
    "#F1C4A1",
    "#95A5A6",
    "#C8A2C8",
    "#E6D690",
    "#7F8C8D",
];

interface ParameterMenuProps {
    parameters: z.infer<typeof FormSchema>[];
    toggleVisibility: (index: number) => void;
    visibleParameters: boolean[];
}

export default function ParameterMenu({
    parameters,
    toggleVisibility,
    visibleParameters,
}: ParameterMenuProps) {
    console.log(parameters, visibleParameters);

    return (
        <div>
            <ScrollArea className="h-full p-4">
                <h1 className="mb-4 text-2xl font-bold">Parameter Menu</h1>
                {parameters.length === 0 ? (
                    <p className="text-lg text-gray-500">No parameters added yet.</p>
                ) : (
                    parameters.map((parameter, index) => (
                        <Card
                            key={index}
                            className={`my-4 p-4`}
                            style={{ backgroundColor: colors[index % colors.length] }}
                        >
                            <CardTitle>
                                <h2 className="text-xl font-semibold">Parameter {index + 1}</h2>
                            </CardTitle>
                            <CardDescription className="mt-2">
                                <p className="mb-2">
                                    <strong>Name:</strong> {parameter.parameterName}
                                </p>
                                <p className="mb-2">
                                    <strong>Location:</strong> {parameter.searchLocation}
                                </p>
                                <p className="mb-2">
                                    <strong>Travel Time:</strong> {parameter.travelTime}
                                </p>
                            </CardDescription>
                            <CardFooter className="mt-4">
                                <Label className="mr-2">Toggle</Label>
                                <Switch
                                    checked={visibleParameters[index]}
                                    onCheckedChange={() => toggleVisibility(index)}
                                />
                            </CardFooter>
                        </Card>
                    ))
                )}
            </ScrollArea>
        </div>
    );
}
