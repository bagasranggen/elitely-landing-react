import './styles/scss/bootstrap.scss';
import './styles/scss/main.scss';
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/600.css";

import { route } from "./data";

import { RouterProvider } from 'react-router-dom';

function App() {
    return <RouterProvider router={route} />;
}

export default App;
