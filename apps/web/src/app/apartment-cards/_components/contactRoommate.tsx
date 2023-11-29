import React, { useState } from "react";

import { toast } from "sonner";

import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@blueprint/ui";

interface Roommate {
    name: string;
    details: string;
    image: string;
}

interface ContactRoommateProps {
    roommate: Roommate;
}

export const ContactRoommate: React.FC<ContactRoommateProps> = ({ roommate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSend = () => {
        // Function to send a message to roommate here:

        toast.success("Message sent successfully");
        handleClose();
    };

    return (
        <Dialog>
            <DialogTrigger
                className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                onClick={() => setIsOpen(true)}
            >
                Contact
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>{roommate.name}</DialogHeader>
                <DialogDescription>{roommate.details}</DialogDescription>
                <DialogFooter className="flex justify-between p-4">
                    <DialogClose>
                        <Button className="mr-2 bg-red-500" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="bg-blue-500" onClick={handleSend}>
                            Send
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
