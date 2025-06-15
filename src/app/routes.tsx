import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                Component: About
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/project",
                Component: Project
            },
            {
                path: "/resume",
                Component: Resume
            }
        ]
    }
]);

export default router;
