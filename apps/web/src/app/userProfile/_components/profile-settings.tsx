"use client";

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

import type { User } from "next-auth";
import { toast } from "sonner";
import { z } from "zod";

import { Loader } from "@/components/loading-animation";
import { Shell } from "@/components/shell";
import { api } from "@/trpc/react";

interface Props {
    user: User;
}

const updateProfileSchema = z.object({
    name: z.string().min(3).max(32),
});

// export default function ProfileSettings() {
//     return (
//         <div className="min-h-screen w-full bg-gray-100 p-4 md:p-6 lg:p-10">
//             <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
//                 <div className="space-y-6 rounded-lg bg-white p-6 shadow">
//                     <div className="flex items-center justify-between">
//                         <h1 className="text-2xl font-semibold">User Profile</h1>
//                         <Button size="sm" variant="outline">
//                             Edit Profile
//                         </Button>
//                     </div>
//                     <div className="grid place-items-center">
//                         <Avatar className="h-24 w-24">
//                             <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
//                             <AvatarFallback>JP</AvatarFallback>
//                         </Avatar>
//                         <h2 className="mt-4 text-lg font-semibold">John Doe</h2>
//                         <p className="text-gray-500">johndoe@example.com</p>
//                     </div>
//                 </div>
//                 <div className="space-y-6 rounded-lg bg-white p-6 shadow lg:col-span-2">
//                     <div className="space-y-4">
//                         <div className="flex items-center justify-between">
//                             <h2 className="text-xl font-semibold">Friends</h2>
//                             <Button size="sm" variant="outline">
//                                 Manage Friends
//                             </Button>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
//                             <Card>
//                                 <CardHeader>
//                                     <Avatar className="h-10 w-10">
//                                         <AvatarImage
//                                             alt="Friend avatar"
//                                             src="/placeholder-avatar.jpg"
//                                         />
//                                         <AvatarFallback>AB</AvatarFallback>
//                                     </Avatar>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <CardTitle>Alice Bob</CardTitle>
//                                     <CardDescription>5 mutual friends</CardDescription>
//                                 </CardContent>
//                             </Card>
//                             <Card>
//                                 <CardHeader>
//                                     <Avatar className="h-10 w-10">
//                                         <AvatarImage
//                                             alt="Friend avatar"
//                                             src="/placeholder-avatar.jpg"
//                                         />
//                                         <AvatarFallback>CD</AvatarFallback>
//                                     </Avatar>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <CardTitle>Charlie Doe</CardTitle>
//                                     <CardDescription>10 mutual friends</CardDescription>
//                                 </CardContent>
//                             </Card>
//                             <Card>
//                                 <CardHeader>
//                                     <Avatar className="h-10 w-10">
//                                         <AvatarImage
//                                             alt="Friend avatar"
//                                             src="/placeholder-avatar.jpg"
//                                         />
//                                         <AvatarFallback>EF</AvatarFallback>
//                                     </Avatar>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <CardTitle>Eve Fox</CardTitle>
//                                     <CardDescription>3 mutual friends</CardDescription>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </div>
//                     <div className="space-y-4">
//                         <div className="flex items-center justify-between">
//                             <h2 className="text-xl font-semibold">Groups</h2>
//                             <Button size="sm" variant="outline">
//                                 Manage Groups
//                             </Button>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
//                             <Card>
//                                 <CardHeader>
//                                     <GroupIcon className="h-10 w-10" />
//                                 </CardHeader>
//                                 <CardContent>
//                                     <CardTitle>Outdoor Enthusiasts</CardTitle>
//                                     <CardDescription>1,587 members</CardDescription>
//                                 </CardContent>
//                             </Card>
//                             <Card>
//                                 <CardHeader>
//                                     <GroupIcon className="h-10 w-10" />
//                                 </CardHeader>
//                                 <CardContent>
//                                     <CardTitle>Book Club</CardTitle>
//                                     <CardDescription>457 members</CardDescription>
//                                 </CardContent>
//                             </Card>
//                             <Card>
//                                 <CardHeader>
//                                     <GroupIcon className="h-10 w-10" />
//                                 </CardHeader>
//                                 <CardContent>
//                                     <CardTitle>Coding Community</CardTitle>
//                                     <CardDescription>3,215 members</CardDescription>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function GroupIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M3 7V5c0-1.1.9-2 2-2h2" />
//             <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
//             <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
//             <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
//             <rect width="7" height="5" x="7" y="7" rx="1" />
//             <rect width="7" height="5" x="10" y="12" rx="1" />
//         </svg>
//     );
// }
