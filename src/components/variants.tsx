import { Box, Title } from "@mantine/core";
import { mockTests } from "../mock/mock-tests";
import { Variant } from "./variant";

export const Variants = () => {
    return (
        <Box>
            <Title sx={{
                textAlign: "center",
                fontSize: "27px"
            }}>Варианты</Title>
            <Box
                sx={{
                    display: "grid",
                    // gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    // gridTemplateRows:"1fr 1fr",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "20px",
                    padding: "20px",
                }}
            >
                {mockTests.map((el, i) => (
                    <Variant key={i} count={i + 1} />
                ))}
            </Box>
        </Box>

    );
};
