import React from "react";
import { redirect } from "next/navigation";

import { stripe } from "@blueprint/api/src/routers/stripe";
import { getServerAuthSession } from "@blueprint/auth";
import {
    Alert,
    AlertDescription,
    AlertTitle,
    Button,
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    Input,
    Label,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@blueprint/ui";
import { getUserPlan } from "@blueprint/utils";

import UserCard from "@/app/userProfile/_components/userCard";
import { BillingInfo } from "./_components/billing";
// import  ProfileSettings  from "./_components/profile-settings";
import  UserDashboard  from "./_components/userDashboard";

const exampleUserData = {
    userName: "John Doe",
};

export default async function UserProfile() {
    const session = await getServerAuthSession();
    if (!session) {
        return redirect("/");
    }
    const subscription = await getUserPlan(session.user.id);
    let isCanceled = false;
    if (subscription.isPremium && subscription.stripeSubscriptionId) {
        const stripePlan = await stripe.subscriptions.retrieve(subscription.stripeSubscriptionId);
        isCanceled = stripePlan.cancel_at_period_end;
    }
    return (
        <Tabs className="container" defaultValue="publicprofile">
            <TabsList>
                <TabsTrigger value="publicprofile">Public Profile</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="publicprofile" className="w-full">
                <h1 className="py-4 text-3xl font-medium">Customize Your Public Profile</h1>
                <UserDashboard />


                {/* <div>
                    Looking for a roommate? checkbox, this will show a big customization menu...etc
                    stuff like that
                </div>
                <Label className="mt-2">Occupation: (Current: Aerospace Engineer)</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="occupation" placeholder="Occupation" />
                    <Button type="submit">Update</Button>
                </div>
                <Label className="mt-2">Location: (Current: Northborough Area)</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="location" placeholder="Location" />
                    <Button type="submit">Update</Button>
                </div>
                <Label className="mt-2">Age: (Current: 24)</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="age" placeholder="Age" />
                    <Button type="submit">Update</Button>
                </div>
                <Label className="mt-2">Profile Picture</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input id="picture" type="file" />
                    <Button type="submit">Update</Button>
                </div> */}
            </TabsContent>
            <TabsContent value="preview">
                <h1 className="py-4 text-3xl font-medium">
                    This is how you will be seen by others
                </h1>
                <div>Example user card:</div>
                <UserCard />
            </TabsContent>
        </Tabs>
    );
}
