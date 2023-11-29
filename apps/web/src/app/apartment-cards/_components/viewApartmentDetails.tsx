import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@blueprint/ui"
import { Apartment } from "@/app/apartment-cards/exampleApartmentData"


export function ViewApartment ({ apartment }: { apartment: Apartment }) {
    return (
        <Dialog>
            <DialogTrigger className="">
                Details
            </DialogTrigger>
            <DialogContent>
                View Apartment Here:
            </DialogContent>
        </Dialog>
    )
}