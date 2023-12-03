"use client";

import { useState } from "react";

import { toast } from "sonner";
import * as z from "zod";

import {
    Button,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormGroup,
    FormGroupTitle,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Label,
    ScrollArea,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    Separator,
    Switch,
    useZodForm,
} from "@blueprint/ui";

import ParameterCard from "./parameter";
import YourParameters from "./yourParameters";

const FormSchema = z.object({
    parameterName: z.string(),
    searchLocation: z.string(),
    travelTime: z.string(),
    travelMethod: z.string(),
    time: z.string(),
    arrivalOrDeparture: z.boolean(),
    ampm: z.string(),
});

export default function SideBarForm() {
    const form = useZodForm({
        schema: FormSchema,
        defaultValues: {
            parameterName: "",
            searchLocation: "",
            travelTime: "",
            travelMethod: "",
            time: "",
            arrivalOrDeparture: false,
            ampm: "",
        },
    });
    const [parameters, setParameters] = useState<z.infer<typeof FormSchema>[]>([]);

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        setParameters((currentParameters) => {
            if (currentParameters.length < 10) {
                console.log(data);
                toast.success("Parameter added");
                return [...currentParameters, data];
            } else {
                toast.error("You can only add up to 10 parameters.");
                return currentParameters;
            }
        });
        form.reset();
    };

    const handleRemoveParameter = (indexToRemove: number) => {
        setParameters((currentParameters) =>
            currentParameters.filter((_, index) => index !== indexToRemove),
        );

        toast.success("Parameter removed");
    };

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <div>
                <h2 className="mb-4 font-bold">Enter Search Information Here:</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        {/* Search Location */}
                        <FormField
                            control={form.control}
                            name="parameterName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name your search parameter</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter name (ex. Home, Work...etc)"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Search Location */}
                        <FormField
                            control={form.control}
                            name="searchLocation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Location of Interest (work, home, gym, grocery store...etc)"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Travel Time */}
                        <FormField
                            control={form.control}
                            name="travelTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Travel Time</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a Travel Time" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="5">5 Minutes</SelectItem>
                                                    <SelectItem value="10">10 Minutes</SelectItem>
                                                    <SelectItem value="15">15 Minutes</SelectItem>
                                                    <SelectItem value="20">20 Minutes</SelectItem>
                                                    <SelectItem value="30">30 Minutes</SelectItem>
                                                    <SelectItem value="45">45 Minutes</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Travel Method */}
                        <FormField
                            control={form.control}
                            name="travelMethod"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Travel Method</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a Travel Method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="walking">Walking</SelectItem>
                                                    <SelectItem value="biking">Biking</SelectItem>
                                                    <SelectItem value="driving">Driving</SelectItem>
                                                    <SelectItem value="publictransport">
                                                        Public Transport
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormLabel>Time of Day</FormLabel>
                        <div className="grid grid-cols-[1fr_2fr] gap-1">
                            {/* Arrival OR Departure Time */}
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="time"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className="h-9"
                                                    placeholder="Enter a time..."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="ampm"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <SelectTrigger className="w-[80x]">
                                                        <SelectValue placeholder="Select AM or PM" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="am">AM</SelectItem>
                                                            <SelectItem value="pm">PM</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Arrival OR Departure Toggle */}
                        <FormField
                            control={form.control}
                            name="arrivalOrDeparture"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="flex items-center space-x-2">
                                            <Label>Arrival</Label>
                                            <Switch
                                                onCheckedChange={field.onChange}
                                                id="arrivalOrDeparture"
                                            />
                                            <Label>Departure</Label>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={parameters.length >= 10}>
                            Add Parameter →
                        </Button>
                    </form>
                </Form>

                <Separator className="my-4" />

                <h2 className="mb-2 mt-6 font-bold">Or import parameters from you or a group:</h2>
                <div className="mb-4 flex space-x-2">
                    <YourParameters />
                    <Button>Group Parameters</Button>
                </div>

                <Separator className="my-4" />

                <div className="mt-4 flex justify-end">
                    <Button type="submit">Search</Button>
                </div>
            </div>

            {/* Display Parameters */}
            <div>
                <h3 className="font-bold">Parameters for this search:</h3>
                <ScrollArea className="h-[800px] overflow-auto">
                    <ParameterCard parameters={parameters} onRemove={handleRemoveParameter} />
                </ScrollArea>
            </div>
        </div>
    );
}
