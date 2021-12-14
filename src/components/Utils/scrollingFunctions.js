import { animateScroll } from "react-scroll";

export function scrollToCategoriesOnMainPage(){
    animateScroll.scrollTo(1060);
}

export function scrollToFooter(){
    animateScroll.scrollToBottom();
}