import "./styles.css";
import { homePageLoad } from "./home-page.js";
import { menuPageLoad } from "./menu-page.js";
import { aboutPageLoad } from "./about-page.js";

const restaurantPageHandler = (() => {
    const buttonContainer = document.querySelector("#button-container");
    buttonContainer.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "home":
                homePageLoad();
                break;
            case "menu":
                menuPageLoad();
                break;
            case "about":
                aboutPageLoad();
                break;
            default:
                break;
        }
    });
    
    homePageLoad();
})();