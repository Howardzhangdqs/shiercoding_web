import React from "react";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Details from '@theme/Details';

export type ChoiceType = {
    context: string,
    right: string[],
    wrong: string[],
    explain?: string,
};

export type ChoiceTypeBuiled = {
    context: string,
    choices: string[],
    index: number[],
    explain?: string,
}

const choices_index = [
    "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y",
    "Z"
];

const BuildChoiceSingle = (question: ChoiceType): ChoiceTypeBuiled => {
    const Choices: string[] = [...question.wrong, ...question.right];
    const shuffledChoices = Choices.sort(() => Math.random() - 0.5);

    const convertedQuestion: ChoiceTypeBuiled = {
        context: question.context,
        choices: shuffledChoices,
        index: [],
    };

    (question.explain ? convertedQuestion.explain = question.explain : {})

    for (let i in question.right)
        convertedQuestion.index.push(shuffledChoices.indexOf(question.right[i]));

    return convertedQuestion;
}

const BuildChoice = (choices: ChoiceType[]): ChoiceTypeBuiled[] => {
    const res: ChoiceTypeBuiled[] = [];
    for (let i in choices)
        res.push(BuildChoiceSingle(choices[i]));
    return res;
};

const BuildChoices = (indexlist: number[]) => {
    if (indexlist.length == 0) return "无正确答案";
    return indexlist.sort().map((item) => choices_index[item]);
}

const BuildExplanation = (explain: string, indexlist: number[]) => {
    for (let i = 0; i < 10; i++)
        explain = explain.replace(`%${i}`, choices_index[indexlist[i]]);
    return explain;
};

const RenderChoiceSingle = (question: ChoiceTypeBuiled) => {
    return (
        <>
            <p>{question.context}</p>
            <ol type="A" key={Math.ceil(Math.random() * 10000)}>
                {question.choices.map((item, index) => (
                    <li type="A" key={index}>{item}</li>
                ))}
            </ol>
            <p>
                <Details summary="答案（点击展开）">
                    <p>
                        答案：{BuildChoices(question.index)}
                    </p>
                    {question.explain ?
                        <div style={{ textIndent: "2em" }} dangerouslySetInnerHTML={{ __html: BuildExplanation(question.explain, question.index)}}>
                            {/* {BuildExplanation(question.explain, question.index)} */}
                        </div> : <></>}
                </Details>
            </p>
        </>
    );
};

const RenderChoice = (questions: ChoiceTypeBuiled[]) => (
    <ol>
        {questions.map((question, index) => (
            <li key={index}>{RenderChoiceSingle(question)}</li>
        ))}
    </ol>
);

export const Test = () => RenderChoice(BuildChoice(stem));

import stem from "./stem/DeepLearning1";

console.log(BuildChoice(stem));