"use client";

import { toast } from "sonner";
import * as z from "zod";

import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTrigger,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Label,
    RadioGroup,
    RadioGroupItem,
    ScrollArea,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Separator,
    Switch,
    useZodForm,
} from "@blueprint/ui";

type QuestionName = `q${
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24}`;

const FormSchema = z.object({
    q1: z.string(),
    q2: z.string(),
    q3: z.string(),
    q4: z.string(),
    q5: z.string(),
    q6: z.string(),
    q7: z.string(),
    q8: z.string(),
    q9: z.string(),
    q10: z.string(),
    q11: z.string(),
    q12: z.string(),
    q13: z.string(),
    q14: z.string(),
    q15: z.string(),
    q16: z.string(),
    q17: z.string(),
    q18: z.string(),
    q19: z.string(),
    q20: z.string(),
    q21: z.string(),
    q22: z.string(),
    q23: z.string(),
    q24: z.string(),
});

export default function SideBarForm() {
    const form = useZodForm({
        schema: FormSchema,
    });

    const questions = [
        ["What is your typical weekday bedtime?", "Before 10 PM", "10 PM - 12 AM", "After 12 AM"],
        ["How often do you clean your living space?", "Daily", "Weekly", "Rarely"],
        [
            "How do you feel about having friends over?",
            "Love it, the more the merrier!",
            "Occasionally is fine",
            "Prefer not to",
        ],
        [
            "What's your ideal weekend like?",
            "Going out with friends",
            "A mix of going out and staying in",
            "Quiet time at home",
        ],
        [
            "How do you manage expenses?",
            "I keep a strict budget",
            "I'm generally careful but flexible",
            "I don't really track expenses",
        ],
        [
            "How prompt are you with payments (rent, bills, etc.)?",
            "Always on time",
            "Usually on time",
            "Sometimes late",
        ],
        ["Do you smoke or vape?", "Yes", "Occasionally", "No"],
        [
            "How do you feel about sharing items (food, kitchen utensils, etc.)?",
            "Completely comfortable",
            "Only certain items",
            "Prefer not to share",
        ],
        [
            "How do you handle disagreements?",
            "Discuss openly and directly",
            "Try to avoid conflict",
            "Keep to myself",
        ],
        [
            "How important is regular communication with your roommate to you?",
            "Very important",
            "Somewhat important",
            "Not important",
        ],
        [
            "What is your attitude towards alcohol and partying?",
            "I enjoy it frequently",
            "Occasionally partake",
            "Not interested",
        ],
        [
            "Are you a pet owner or do you plan to have pets?",
            "Yes, I have/want pets",
            "Maybe/Undecided",
            "No, I don't want pets",
        ],
        [
            "How do you react if a roommate doesn't clean up immediately after themselves?",
            "I don't mind and might clean it myself",
            "I'd give them a gentle reminder",
            "It bothers me a lot",
        ],
        [
            "What's your approach to handling chores in shared spaces?",
            "I take the initiative to do them regularly",
            "I do them when it's my turn or when needed",
            "I prefer if someone else handles them",
        ],
        [
            "If your roommate had guests over and you weren't feeling social, what would you do?",
            "Join them regardless",
            "Stay in my room or go out",
            "Ask them to leave",
        ],
        [
            "How would you describe your ideal roommate's social life?",
            "Very active, lots of friends coming over",
            "Moderate, occasional gatherings",
            "Quiet, very few guests",
        ],
        [
            "Have you ever had disagreements over money with someone you live with?",
            "Never",
            "Rarely, but it's been resolved",
            "Yes, it's a common issue",
        ],
        [
            "What's your stance on splitting costs for shared items (e.g., toilet paper, cleaning supplies)?",
            "Split everything equally",
            "Buy separately",
            "Flexible, as long as it's fair",
        ],
        [
            "How would you handle a situation where a roommate's habits (like smoking or eating habits) bothered you?",
            "Discuss and find a compromise",
            "Ignore unless it's unbearable",
            "Insist they change their habits",
        ],
        [
            "If you were to borrow something from a roommate, how would you go about it?",
            "Ask for permission every time",
            "Assume it's okay if we're close",
            "Prefer not to borrow",
        ],
        [
            "Describe a past conflict with a roommate or friend and how it was resolved.",
            "Open discussion and mutual agreement",
            "Time passed and it resolved itself",
            "It led to ongoing tension",
        ],
        [
            "How often do you think roommates should check in with each other about their living situation?",
            "Regularly, to ensure everything is going well",
            "Occasionally, only when needed",
            "Rarely, unless there's a problem",
        ],
        [
            "If a roommate had a significantly different lifestyle (e.g., very active nightlife), how would you feel?",
            "I'm adaptable and don't mind",
            "It's okay as long as it doesn't affect me",
            "I'd prefer a roommate with a similar lifestyle",
        ],
        [
            "How do you view the responsibility of pet ownership in a shared living space?",
            "It's solely the pet owner's responsibility",
            "Willing to help occasionally",
            "Prefer no pets in the shared space",
        ],
    ];

    const handleSubmit = () => {
        console.log("Submitted");
        console.log("Data:");
        console.log(form.getValues());
        toast.success("Submitted!");

        // TODO: Make API call to update user with "surveySubmitted=true"
    };

    return (
        <div className="ml-4 w-1/5">
            <h2 className="mb-4 font-bold">Roommate Survey:</h2>
            <div className="text-red-600">NOTE: YOU CAN ONLY COMPLETE THIS ONCE</div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
                    {questions.map((question, index) => (
                        <FormField
                            key={`q${index + 1}`}
                            control={form.control}
                            name={`q${index + 1}` as QuestionName}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <RadioGroup {...field}>
                                            <Separator className="mt-2" />
                                            <Label>{question[0]}</Label>
                                            {question.slice(1).map((option, optionIndex) => (
                                                <div
                                                    key={optionIndex}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <RadioGroupItem value={option} />
                                                    <Label>{option}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    ))}
                    <Dialog>
                        <DialogTrigger>
                            <Button>Submit</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogDescription>
                                Are you sure you want to submit? You will not be able to change your
                                answers afterwards!
                            </DialogDescription>
                            <DialogClose>
                                <Button className="mr-4">Cancel</Button>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
                </form>
            </Form>
        </div>
    );
}
