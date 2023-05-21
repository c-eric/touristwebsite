const navigation = document.querySelector(".navbar");
const navigationHeight = navigation.offsetHeight;
const scrollPadding = navigationHeight - 8;

document.documentElement.style.setProperty("--scroll-padding", `${scrollPadding}px`);
