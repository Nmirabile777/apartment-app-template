import React from "react";
import { redirect } from "next/navigation";

import { stripe } from "@blueprint/api/src/routers/stripe";
import { getServerAuthSession } from "@blueprint/auth";
import {
    Alert,
    AlertDescription,
    AlertTitle,
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@blueprint/ui";
import { getUserPlan } from "@blueprint/utils";

import { BillingInfo } from "./_components/billing";
import { ProfileSettings } from "./_components/profile-settings";

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
            <TabsContent value="publicprofile" className="w-full md:w-2/3">
                <h1 className="py-4 text-3xl font-medium">Customize Your Public Profile</h1>
                <div>Looking for a roommate? checkbox, this will show a big customization menu...etc stuff like that</div>
            </TabsContent>
            <TabsContent value="preview">
                <h1 className="py-4 text-3xl font-medium">This is how you will be seen by others</h1>
                
            </TabsContent>
        </Tabs>
    );
}
