export type TMock = {
    question: string,
    count: number,
    answers: {
        correct: boolean,
        answer: string
    }[]
}