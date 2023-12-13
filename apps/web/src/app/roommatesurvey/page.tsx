"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    Label,
    RadioGroup,
    RadioGroupItem,
    Separator,
} from "@blueprint/ui";

interface Answers {
    [key: string]: string;
}

const schema = z.object({
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

function QuestionTemplate(
    questionId: string,
    questions: string[],
    onAnswer: (questionId: string, answer: string) => void,
) {
    return (
        <RadioGroup>
            <Separator className="mt-2" />
            <Label>{questions[0]}</Label>
            {questions.slice(1).map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                        value={`answer${index}`}
                        id={`answer${index}`}
                        onChange={() => onAnswer(questionId, `answer${index}`)}
                    />
                    <Label htmlFor={`answer${index}`}>{option}</Label>
                </div>
            ))}
        </RadioGroup>
    );
}

type FormData = z.infer<typeof schema>;

export default function RoommateSurvey() {
    const { control, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(schema),
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

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const questionNames = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5",
        "q6",
        "q7",
        "q8",
        "q9",
        "q10",
        "q11",
        "q12",
        "q13",
        "q14",
        "q15",
        "q16",
        "q17",
        "q18",
        "q19",
        "q20",
        "q21",
        "q22",
        "q23",
        "q24",
    ];

    return (
        <div>
            <h1 className="ml-4">Roommate Survey</h1>
            <div className="ml-4">
                CAUTION: YOU CAN ONLY FILL THIS OUT ONCE, MAKE SURE YOU ARE HONEST
            </div>
            <div className="ml-4">Survey takes about 20 minutes to complete</div>
            <Card className="mx-4 w-2/5 shadow-lg">
                <CardHeader>Roommate Survey</CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {questions.map((q, index) => (
                            <CardDescription key={index}>
                                <Controller
                                    name={questionNames[index]}
                                    control={control}
                                    render={({ field }) => (
                                        <RadioGroup {...field}>
                                            <Separator className="mt-2" />
                                            <Label>{q[0]}</Label>
                                            {q.slice(1).map((option, optionIndex) => (
                                                <div
                                                    key={optionIndex}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <RadioGroupItem value={option} />
                                                    <Label>{option}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    )}
                                />
                            </CardDescription>
                        ))}
                        <CardFooter>
                            <Button type="submit">Submit</Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
