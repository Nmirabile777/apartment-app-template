import { Account } from "@prisma/client";
import { AvatarIcon } from "@radix-ui/react-icons";

import {
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
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@blueprint/ui";

export default function UserCard() {
    return (
        <div>
            <Card className="w-[350px]">
                <CardHeader className="flex items-center justify-between p-4">
                    <div>
                        <CardTitle>Nicholas Mirabile</CardTitle>
                        <CardDescription>Aerospace Engineer</CardDescription>
                    </div>
                    <Avatar className="h-1/3 w-3/4">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent>
                    <div>Works Near: Northborough Area</div>
                    <div>Age: 24</div>
                </CardContent>
                <CardFooter className="flex justify-between p-4">
                    <Button variant="outline">Do not see again</Button>
                    <Button>Contact</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
