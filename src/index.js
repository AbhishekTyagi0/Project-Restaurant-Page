import './style.css';

import { navigationBar } from './navbar';
import { initialPage } from './frontpage';

function mainPage() {
    const container = document.getElementById('content');
    container.style.width = "100vw";
    container.style.height = "100vh";

    navigationBar();
    initialPage();
};

mainPage();
