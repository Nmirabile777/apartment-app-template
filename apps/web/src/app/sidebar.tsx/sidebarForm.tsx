"use client";


import { zodResolver } from ""
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
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
    Separator,
} from "@blueprint/ui";

const FormSchema = z.object({
    searchLocation: z.string(),
    travelTime: z.string(),
    travelMethod: z.string(),
    departureTime: z.string(),
    arrivalTime: z.string(),
});

export default function SideBarForm() {
    const form = useForm();
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("You submitted the following values");
    }
    return (
        <div className="grid grid-cols-2">
            <div>
                <h1>Enter Search Information Here:</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        {/* Search Location */}
                        <FormField
                            control={form.control}
                            name="searchLocation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Location..." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
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
                                        <Input placeholder="Enter Travel Time" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
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
                                        <Input placeholder="Enter Travel Method..." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Departure Time */}
                        <FormField
                            control={form.control}
                            name="departureTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Departure Time</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Departure Time..." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Arrival Time */}
                        <FormField
                            control={form.control}
                            name="arrivalTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Arrival Time</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Arrival Time..." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <h1>Or import parameters from you or a group:</h1>
                        <Button>Import Your Parameters</Button>
                        <Button className="ml-2">Import Group Parameters</Button>
                        <Separator />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>

            {/* Display Parameters */}
            <div>Display Parameters Here:</div>
        </div>
    );
}
