import { Box } from "@mantine/core"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return <Box>
        <Outlet />
    </Box>
}