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
    ScrollArea,
} from "@blueprint/ui";

export default function GroupCard() {
    const dateCreated = new Date().toLocaleDateString();
    const parameters = ["Parameter 1", "Parameter 2", "Parameter 3"];

    // Example user data with names and placeholder image URLs
    const users = [
        { name: "Nicholas Mirabile", imageUrl: "https://github.com/shadcn.png" },
        { name: "Jack Quinlan", imageUrl: "https://github.com/shadcn.png" },
        { name: "Brian Giusti", imageUrl: "https://github.com/shadcn.png" },
    ];

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Group XYZ</CardTitle>
                <CardDescription>Date Created: {dateCreated}</CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <strong>Search Parameters:</strong>
                    <ul>
                        {parameters.map((parameter, index) => (
                            <li key={index}>{parameter}</li>
                        ))}
                    </ul>
                </CardDescription>
                <CardDescription>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Users in Group</AccordionTrigger>
                            <AccordionContent>
                                <ScrollArea className="h-32">
                                    <div className="grid grid-cols-2 gap-4">
                                        {users.map((user, index) => (
                                            <div
                                                key={index}
                                                className="rounded bg-white p-2 shadow"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <Avatar>
                                                        <AvatarImage
                                                            src={user.imageUrl}
                                                            alt={user.name}
                                                        />
                                                        <AvatarFallback>
                                                            {user.name[0]}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <CardTitle>{user.name}</CardTitle>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button className="mr-2 w-1/4">Leave</Button>
                <Button className="mr-2 w-1/4">Edit</Button>
                <Button className="w-1/4">Delete</Button>
            </CardFooter>
        </Card>
    );
}
