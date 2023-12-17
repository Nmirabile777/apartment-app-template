import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Avatar,
    AvatarFallback,
    AvatarImage,
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
    DialogDescription,
    DialogTrigger,
    Input,
    Label,
    ScrollArea,
    Separator,
    Switch,
} from "@blueprint/ui";

import { api } from "@/trpc/react";

const friends = [
    { name: "Alice Bob", avatar: "https://github.com/shadcn.png", email: "alice@example.com" },
    { name: "Charlie Doe", avatar: "https://github.com/shadcn.png", email: "123@example.com" },
    { name: "Eve Fox", avatar: "https://github.com/shadcn.png", email: "456@example.com" },
    { name: "Alice Bob", avatar: "https://github.com/shadcn.png", email: "alice@example.com" },
    { name: "Charlie Doe", avatar: "https://github.com/shadcn.png", email: "123@example.com" },
    { name: "Eve Fox", avatar: "https://github.com/shadcn.png", email: "456@example.com" },
    { name: "Alice Bob", avatar: "https://github.com/shadcn.png", email: "alice@example.com" },
    { name: "Charlie Doe", avatar: "https://github.com/shadcn.png", email: "123@example.com" },
    { name: "Eve Fox", avatar: "https://github.com/shadcn.png", email: "456@example.com" },
    { name: "Alice Bob", avatar: "https://github.com/shadcn.png", email: "alice@example.com" },
    { name: "Charlie Doe", avatar: "https://github.com/shadcn.png", email: "123@example.com" },
    { name: "Eve Fox", avatar: "https://github.com/shadcn.png", email: "456@example.com" },
];

const groups = [
    { name: "Hopkinton Gang", members: ["Jack Quinlan", "Brian Giusti", "Justin Blanchard"] },
    { name: "Clarkson Bois", members: ["Erik Brown", "Dom Romano", "Evan Nyguen"] },
    { name: "Tom and Brianna", members: ["Tom Mirabile", "Brianna Mirabile"] },
    { name: "Hopkinton Gang", members: ["Jack Quinlan", "Brian Giusti", "Justin Blanchard"] },
    { name: "Clarkson Bois", members: ["Erik Brown", "Dom Romano", "Evan Nyguen"] },
    { name: "Tom and Brianna", members: ["Tom Mirabile", "Brianna Mirabile"] },
];

// TODO: Integrate API calls in this file

interface AvatarSectionProps {
    name: string;
    email: string;
}

interface SectionProps {
    children: React.ReactNode;
}

function FriendsList() {
    // const { data: friends, isLoading } = api.friends.getFriends.useQuery();
    return (
        <>
            {friends.map((friend, index) => (
                <Card key={index} className="col-span-1">
                    <CardHeader>
                        <Avatar className="h-10 w-10">
                            <AvatarImage alt={`${friend.name} avatar`} src={friend.avatar} />
                            <AvatarFallback>
                                {friend.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{friend.name}</CardTitle>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

function GroupsList() {
    return (
        <>
            {groups.map((group, index) => (
                <Card key={index}>
                    <CardHeader>{group.name}</CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>
                                    <CardDescription>
                                        {group.members.length} members
                                    </CardDescription>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <>
                                        {group.members.map((member, index) => (
                                            <div>{member}</div>
                                        ))}
                                    </>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

function UserProfileSection() {
    return (
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
            <div className="flex flex-col">
                <AvatarSection name="Nicholas Mirabile" email="nickmirabile777@gmail.com" />
                <Separator className="mt-2" />

                {/* Looking for a roommate */}
                <Label className="mt-4" htmlFor="lookingforroommate">
                    Looking for a Roommate?
                </Label>
                <div className="text-sm">(Allows other members to contact you)</div>
                <Switch id="lookingforroommate" />

                {/* Occupation */}
                <Label className="mt-4">Occupation: (Current: Aerospace Engineer)</Label>
                <div className="mb-4 flex w-full max-w-xs items-center space-x-2">
                    <Input type="occupation" placeholder="Occupation" />
                    <Button type="submit" size={"sm"}>
                        Update
                    </Button>
                </div>

                {/* Location  */}
                <Label className="mt-2">Location: (Current: Northborough Area)</Label>
                <div className="mb-4 flex w-full max-w-xs items-center space-x-2">
                    <Input type="location" placeholder="Location" />
                    <Button type="submit" size={"sm"}>
                        Update
                    </Button>
                </div>

                {/* Age */}
                <Label className="mt-2">Age: (Current: 24)</Label>
                <div className="mb-4 flex w-full max-w-xs items-center space-x-2">
                    <Input type="age" placeholder="Age" />
                    <Button type="submit" size={"sm"}>
                        Update
                    </Button>
                </div>

                {/* Price Range */}
                <Label className="mt-4">Your Private Price Range: (Current: Less than $1500)</Label>
                <div className="mb-4 flex w-full max-w-xs items-center space-x-2">
                    <Input type="age" placeholder="Your Price Range" />
                    <Button type="submit" size={"sm"}>
                        Update
                    </Button>
                </div>
            </div>
        </div>
    );
}

function FriendsAndGroupsSection() {
    return (
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg lg:col-span-2">
            <FriendsSection>
                <FriendsList />
            </FriendsSection>
            <GroupsSection>
                <GroupsList />
            </GroupsSection>
        </div>
    );
}

function AvatarSection({ name, email }: AvatarSectionProps) {
    return (
        <Dialog>
            <div className="grid place-items-center">
                <DialogTrigger>
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                </DialogTrigger>
                <h2 className="mt-4 text-lg font-semibold">{name}</h2>
                <p className="text-gray-500">{email}</p>
            </div>
            <DialogContent>
                <div>update profile picture here</div>
                <DialogClose>
                    <Button>Close</Button>
                    <Button>Update</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

function FriendsSection({ children }: SectionProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Friends</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                            Manage Friends
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="h-4/5 w-4/5">
                        <DialogDescription>Manage Friends Here:</DialogDescription>
                        <div className="grid grid-cols-2 gap-4 overflow-auto md:grid-cols-3">
                            {friends.map((friend, index) => (
                                <Card key={index} className="col-span-1 mx-1 flex h-full flex-col">
                                    <CardHeader>
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage
                                                alt={`${friend.name} avatar`}
                                                src={friend.avatar}
                                            />
                                            <AvatarFallback>
                                                {friend.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                    </CardHeader>
                                    <CardContent className="flex-grow overflow-auto">
                                        <CardTitle>{friend.name}</CardTitle>
                                        <CardDescription>
                                            Friend contact info, available?, other info Email:{" "}
                                            {friend.email}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="grid grid-cols-2">
                                        <Button className="mx-2 rounded border border-red-700 bg-red-500 px-4 py-2 font-semibold text-white shadow hover:bg-red-600">
                                            Remove
                                        </Button>
                                        <Button className="mx-2 rounded border border-blue-700 bg-blue-500 px-4 py-2 font-semibold text-white shadow hover:bg-blue-600">
                                            Form Group
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                        <DialogClose asChild>
                            <Button className="w-1/5">Close</Button>
                        </DialogClose>
                    </DialogContent>
                </Dialog>
            </div>
            <ScrollArea className="max-h-60 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">{children}</div>
            </ScrollArea>
        </div>
    );
}

function GroupsSection({ children }: SectionProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Groups</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="sm" variant="outline">
                            Manage Groups
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-4/4 h-4/5">
                        <DialogDescription>Manage Groups Here:</DialogDescription>
                        <div className="grid grid-cols-3">
                            {groups.map((group, index) => (
                                <Card className="col-span-1 mx-1 flex h-full flex-col" key={index}>
                                    <CardHeader>{group.name}</CardHeader>
                                    <CardContent className="flex-grow overflow-auto">
                                        <CardDescription>
                                            {group.members.length} members
                                        </CardDescription>
                                        <>
                                            {group.members.map((member, index) => (
                                                <div>{member}</div>
                                            ))}
                                        </>
                                    </CardContent>
                                    <CardFooter className="grid grid-cols-3">
                                        <Button className="mx-1">Disband</Button>
                                        <Button className="mx-1">Add</Button>
                                        <Button className="mx-1">Remove</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                        <DialogClose asChild>
                            <Button className="w-1/5">Close</Button>
                        </DialogClose>
                    </DialogContent>
                </Dialog>
            </div>
            <ScrollArea className="max-h-72 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">{children}</div>
            </ScrollArea>
        </div>
    );
}



export default function Component() {
    return (
        <div className="mx-auto grid  w-full gap-8 p-4 md:p-6 lg:grid-cols-3 lg:p-10">
            <UserProfileSection />
            <FriendsAndGroupsSection />
        </div>
    );
}
