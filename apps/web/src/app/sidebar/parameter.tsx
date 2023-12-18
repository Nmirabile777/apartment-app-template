import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@blueprint/ui";

interface Parameter {
    parameterName: string;
    searchLocation: string;
    travelTime: string;
    travelMethod: string;
    time: string;
    arrivalOrDeparture: boolean;
    ampm: string;
}

interface ParameterProps {
    parameters: Parameter[];
    onRemove: (index: number) => void;
}

export default function ParameterCard({ parameters, onRemove }: ParameterProps) {
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

    return (
        <div>
            {parameters.map((param, index) => (
                <Card
                    key={`param-${index}`}
                    style={{ backgroundColor: colors[index % colors.length] }}
                    className="my-2 mr-3"
                >
                    <CardHeader>
                        <CardTitle>{param.parameterName}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="grid grid-cols-2">
                            <div>
                                <CardDescription>Location: {param.searchLocation}</CardDescription>
                                <CardDescription>Travel Time: {param.travelTime}</CardDescription>
                                <CardDescription>Method: {param.travelMethod}</CardDescription>
                            </div>
                            <div>
                                <CardDescription>Time: {param.time}</CardDescription>
                                <CardDescription>
                                    {param.arrivalOrDeparture ? "Arrival" : "Departure"}
                                </CardDescription>
                                <CardDescription>AM/PM: {param.ampm}</CardDescription>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-end">
                        <Dialog>
                            <DialogTrigger>
                                <Button className="transform rounded-md bg-red-900 p-2 text-white transition duration-150 ease-in-out hover:translate-y-[-2px] hover:shadow-lg">
                                    Remove
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <p className="mb-4">
                                    Are you sure you want to remove this parameter?
                                </p>
                                <div className="flex justify-end space-x-2">
                                    <DialogClose>
                                        <Button className="rounded-md px-4 py-2 text-white">
                                            Cancel
                                        </Button>
                                        <Button
                                            className="rounded-md border px-4 py-2 text-white"
                                            onClick={() => onRemove(index)}
                                        >
                                            Confirm
                                        </Button>
                                    </DialogClose>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
