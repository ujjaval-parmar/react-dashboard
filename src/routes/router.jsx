import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import OverviewPage from "../pages/OverviewPage";
import ProductsPage from "../pages/ProductsPage";
import UsersPage from "../pages/UsersPage";
import SettingsPage from "../pages/SettingsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <OverviewPage />
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path: '/users',
                element: <UsersPage />
            },
            {
                path: '/settings',
                element: <SettingsPage />
            }
        ],
        errorElement: <ErrorPage />

    }
]);


export default router;