import { SVGProps } from "react";

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
    CardHeader,
    CardTitle,
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
    Input,
    Label,
    ScrollArea,
    Separator,
} from "@blueprint/ui";

const friends = [
    { name: "Alice Bob", avatar: "/placeholder-avatar.jpg" },
    { name: "Charlie Doe", avatar: "/placeholder-avatar.jpg" },
    { name: "Eve Fox", avatar: "/placeholder-avatar.jpg" },
];

const groups = [
    { name: "Hopkinton Gang", members: ["Jack", "Brian", "Justin"] },
    { name: "Clarkson Bois", members: ["Erik", "Dom", "Evan"] },
    { name: "Kyle and Tom", members: ["Tom", "Kyle"] },
];

interface HeaderProps {
    title: string;
    buttonText: string;
}

interface AvatarSectionProps {
    name: string;
    email: string;
}

interface SectionProps {
    title: string;
    buttonText: string;
    children: React.ReactNode;
}

function FriendsList() {
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
                    <CardHeader>
                        <GroupIcon className="h-10 w-10" />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{group.name}</CardTitle>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
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

function GroupIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    // GroupIcon component as in the original code
    return <div></div>;
}

export default function Component() {
    return (
        <div className="mx-auto grid min-h-screen w-full gap-8 p-4 md:p-6 lg:grid-cols-3 lg:p-10">
            <UserProfileSection />
            <FriendsAndGroupsSection />
        </div>
    );
}

function UserProfileSection() {
    return (
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
            <Header title="User Profile" buttonText="Edit Profile" />
            <div className="flex flex-col">
                <AvatarSection name="John Doe" email="johndoe@example.com" />
                <Separator className="mt-2" />

                {/* Occupation */}
                <Label className="mt-4">Occupation: (Current: Aerospace Engineer)</Label>
                <div className="mb-4 flex w-full max-w-xs items-center space-x-2">
                    <Input type="occupation" placeholder="Occupation" />
                    <Button type="submit">Update</Button>
                </div>

                {/* Location  */}
                <Label className="mt-2">Location: (Current: Northborough Area)</Label>
                <div className="mb-4 flex w-full max-w-xs items-center space-x-2">
                    <Input type="location" placeholder="Location" />
                    <Button type="submit">Update</Button>
                </div>

                {/* Age */}
                <Label className="mt-2">Age: (Current: 24)</Label>
                <div className="mb-4 flex w-full max-w-xs items-center space-x-2">
                    <Input type="age" placeholder="Age" />
                    <Button type="submit">Update</Button>
                </div>

                {/* Price Range */}
                <Label className="mt-4">Your Private Price Range: (Current: Less than $1500)</Label>
                <div className="mb-4 flex w-full max-w-xs items-center space-x-2">
                    <Input type="age" placeholder="Your Price Range" />
                    <Button type="submit">Update</Button>
                </div>
            </div>
        </div>
    );
}

function FriendsAndGroupsSection() {
    return (
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg lg:col-span-2">
            <Section title="Friends" buttonText="Manage Friends">
                <FriendsList />
            </Section>
            <Section title="Groups" buttonText="Manage Groups">
                <GroupsList />
            </Section>
        </div>
    );
}

function Header({ title, buttonText }: HeaderProps) {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <Button size="sm" variant="outline">
                {buttonText}
            </Button>
        </div>
    );
}

function AvatarSection({ name, email }: AvatarSectionProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="grid place-items-center">
                    <Avatar className="h-24 w-24">
                        <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <h2 className="mt-4 text-lg font-semibold">{name}</h2>
                    <p className="text-gray-500">{email}</p>
                </div>
            </DialogTrigger>
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

function Section({ title, buttonText, children }: SectionProps) {
    return (
        <div className="space-y-4">
            <Header title={title} buttonText={buttonText} />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">{children}</div>
        </div>
    );
}
