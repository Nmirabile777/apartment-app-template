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
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@blueprint/ui";
import { getUserPlan } from "@blueprint/utils";
import GroupCard from "./_components/groupCard";

export default async function Groups() {
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
        <Tabs className="container" defaultValue="create">
            <TabsList>
                <TabsTrigger value="create">Create a Group</TabsTrigger>
                <TabsTrigger value="yourgroups">Your Groups</TabsTrigger>
            </TabsList>
            <TabsContent value="create" className="w-full md:w-2/3">
                <h1 className="py-4 text-3xl font-medium">Groups</h1>
                <div>Create a group here:</div>
                <Button>+ Create Group</Button>
            </TabsContent>
            <TabsContent value="yourgroups">
                <h1 className="py-4 text-3xl font-medium">Your Groups</h1>
                <GroupCard />
            </TabsContent>
        </Tabs>
    );
}
