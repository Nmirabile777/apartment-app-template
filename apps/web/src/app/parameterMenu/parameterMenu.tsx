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

interface SidebarProps {
    parameters: z.infer<typeof FormSchema>[];
}

export default function ParameterMenu({ parameters }: SidebarProps) {
    return (
        <div>
            <ScrollArea className="h-full p-4">
                <h1 className="mb-4 text-2xl font-bold">Parameter Menu</h1>
                {parameters.length === 0 ? (
                    <p className="text-lg text-gray-500">No parameters added yet.</p>
                ) : (
                    parameters.map((parameter, index) => (
                        <Card key={index} className="my-4 p-4">
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
                                <Switch defaultChecked={true} />
                            </CardFooter>
                        </Card>
                    ))
                )}
            </ScrollArea>
        </div>
    );
}
