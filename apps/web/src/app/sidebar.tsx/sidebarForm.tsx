"use client";

import { useForm } from "react-hook-form";
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
} from "@blueprint/ui";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

export default function SideBarForm() {
    const form = useForm();
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit()} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}

// export default function SideBarForm() {
//     const form = useForm();
//     return (
//         <div>
//             <Form>
//                 <div>
//                     <Label className="block text-sm font-medium text-gray-700">Location</Label>
//                     <Input placeholder="Enter location..." className="mt-1" />
//                 </div>

//                 <div>
//                     <Label className="block text-sm font-medium text-gray-700">Travel Time</Label>
//                     <Input placeholder="Enter travel time..." className="mt-1" />
//                 </div>

//                 <div>
//                     <Label className="block text-sm font-medium text-gray-700">Travel Method</Label>
//                     <Input placeholder="Enter travel method..." className="mt-1" />
//                 </div>

//                 <div>
//                     <Label className="block text-sm font-medium text-gray-700">
//                         Departure Time
//                     </Label>
//                     <Input placeholder="Enter departure time..." className="mt-1" />
//                 </div>

//                 <div>
//                     <Label
//                         htmlFor="arrival-time"
//                         className="block text-sm font-medium text-gray-700"
//                     >
//                         Arrival Time
//                     </Label>
//                     <Input id="arrival-time" placeholder="Enter arrival time..." className="mt-1" />
//                 </div>

//                 <Button type="submit" className="w-full">
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     );
// }
