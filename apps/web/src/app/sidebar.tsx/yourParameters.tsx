import React from "react";

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

export default function YourParameters() {
    function handleClose(): void {}

    function handleSend(): void {
        console.log("Imported");
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger>Your Parameters</DialogTrigger>
                <DialogContent>
                    <DialogHeader>Import from your parameters:</DialogHeader>
                    <DialogDescription>YEET</DialogDescription>
                    <DialogFooter className="p-4">
                        <DialogClose>
                            <Button className="mx-2" onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={handleSend}>Send</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
