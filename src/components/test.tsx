import { Box, Button, Switch, Text, Title } from "@mantine/core";
import { Link, useParams } from "react-router-dom"
import { mockTests } from "../mock/mock-tests";
import { useEffect, useState } from "react";
import { TMock } from "../types/types";

type TAnswer = { answer: string; correct: boolean }

function shuffle(array: TAnswer[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const Test = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const [questions, setQuestions] = useState<TMock[]>(mockTests[Number(id) - 1]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<TAnswer[]>([]);
    const [answersRandom, setAnswersRandom] = useState<TAnswer[]>();
    const [countCorrectAnswers, setCountCorrectAnswer] = useState<number>(0);
    const [checked, setChecked] = useState<boolean>(false);

    const handleCorrectAnswer = (el: TAnswer) => {
        setAnswers(answers => [...answers, el]);
        setCurrentQuestion(val => val + 1);
        if (el.correct) {
            setCountCorrectAnswer(val => val + 1);
        }
    }


    useEffect(() => {
        if (questions[currentQuestion]) {
            setAnswersRandom(shuffle(questions[currentQuestion].answers));
        }
    }, [currentQuestion, answersRandom, setAnswersRandom, questions])

    return <Box>
        {
            questions.length === answers.length ? <Box sx={{
                display: "flex", flexDirection: "column"
            }}>
                <Title align="end" order={1}>{`${countCorrectAnswers}/${questions.length}`}</Title>
                {
                    answers.map((el, index) => (
                        <Text size="xl" color={el.correct ? "green" : "red"} key={index}>
                            {`${index + 1}) ${el.answer}`}
                        </Text>
                    ))
                }
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px"
                }}><Link to="/"><Button size="lg">Вернуться на главную</Button></Link></Box>
            </Box> : <Box>
                <Switch
                    color="green"
                    label="Показать правильный ответы"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                />
                <Title order={3}>{`${currentQuestion + 1})`}{questions[currentQuestion].question}</Title>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "50px",
                    padding: "20px"
                }}>
                    {
                        questions[currentQuestion].answers.map(el => (
                            <Box onClick={() => handleCorrectAnswer(el)} sx={{
                                background: checked && el.correct ? "green" : "#228be6",
                                color: "white",
                                borderRadius: "20px",
                                padding: "20px",
                                height: "100%",
                                textAlign: "center",
                                fontSize: "20px"
                            }} key={el.answer}>{el.answer}</Box>
                        ))
                    }
                </Box>
            </Box>
        }

    </Box>
}