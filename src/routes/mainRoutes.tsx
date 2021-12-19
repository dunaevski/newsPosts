import { lazy } from 'react';
import MainLayout from '../layouts/mainLayout/index';
import Loadable from '../components/loadable/index';
const MainPage = Loadable(lazy(() => import("../pages/mainPage")));
const RecordPage = Loadable(lazy(() => import('../pages/recordPage')));
const SettingsPage = Loadable(lazy(() => import('../pages/settingsPage')));
const HelpPage = Loadable(lazy(() => import('../pages/helpPage')));
const AboutPage = Loadable(lazy(() => import('../pages/aboutPage')));

const MainRouter = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <MainPage />
        },
        {
            path: 'record/:id',
            element: <RecordPage />
        },
        {
            path: 'settings',
            element: <SettingsPage />
        },
        {
            path: 'help',
            element: <HelpPage />
        },
        {
            path: 'about',
            element: <AboutPage />
        },
    ]
};

export default MainRouter;
