import { Button } from "@mantine/core"
import { Link } from "react-router-dom";

type TProps = {
    count: number;
}

export const Variant = (props: TProps) => {
    const { count } = props;
    return <Link to={`/variant/${count}`}>
        <Button fullWidth size="xl" color="teal">
            {
                count
            }
        </Button >
    </Link>
}