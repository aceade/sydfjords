<!-- Originally derived from W3Schools: https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp -->
<!-- The main adaptations are to force all menus to close on mobile when clicking a URL -->

<template>
    <img id="logo" alt="" src="/sydfjords/icons/Sydfjords_Logo_1.png">
    <nav class="topnav">
        <div class="dropdown">
            <button className="dropbtn" @click="openSubMenu('languageMenu')">
                <img src="/sydfjords/icons/globe.svg" id="changeLang" v-bind:alt="$t('navbar.changeLang.alt')" v-bind:title="$t('navbar.changeLang.title')" />
            </button>
            <div class="dropdown-content" id="languageMenu">
                <button class="langButton" @click="$i18n.locale = locale" v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`">{{ getNativeName(locale) }}</button>
            </div>
        </div>
        <router-link to="/">{{ $t('navbar.home') }}</router-link>
        <div class="dropdown">
            <button class="dropbtn" @click="openSubMenu('attractionMenu')">{{ $t('navbar.see') }}</button>
            <div class="dropdown-content" id="attractionMenu">
                <router-link to="/colwdvatn">{{ $t('navbar.colwdvatn') }}</router-link>
                <router-link to="/loremvik">{{ $t('navbar.loremvik') }}</router-link>
                <router-link to="/ipsumvatn">{{ $t('navbar.ipsumvatn') }}</router-link>
                <router-link to="/whales">{{ $t('navbar.whales') }}</router-link>
            </div>
        </div>
        <router-link to="/hotels">{{ $t('navbar.hotels') }}</router-link>
        <router-link to="/travel">{{ $t('navbar.travel') }}</router-link>
        <router-link to="/about">{{ $t('navbar.about') }}</router-link>
        <a class="icon" @click="openMenu()">&#9776;</a>
    </nav>
</template>

<script setup lang="ts">

const localeNames: {[index: string]: string} = {
    ar: "عربي",
    de: "Deutsch",
    ga: "Gaeilge",
    it: "Italiano",
    ja: "日本語",
    en: "English"
};

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        const links = document.querySelectorAll("a");
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            if (link.className === "icon") {
                continue;
            }
            
            link.onclick = () => {
                closeAllMenus();
            }
        }
    }
}

function getNativeName(locale: string) {
    return localeNames[locale] || "English";
}

function openMenu() {
    const nav = document.querySelector("nav");

    // TypeScript's typesafety doesn't like that nav *might* be null. Even if in practice it won't be.
    if (nav) {
        if (nav.className === "topnav") {
            nav.className += " responsive";
        } else {
            nav.className = "topnav";
        }

        // prevent this hanging open or needing to be clicked twice upon loading the page
        const menus = document.querySelectorAll(".dropdown-content");
        if (menus) {
            menus.forEach(menu => {
                (menu as HTMLElement).style.display = "none"
            });
            
        }
    }
    
}

/**
 * Cleans up and resets everything.
 */
function closeAllMenus() {
    (document.querySelector("nav") as HTMLElement).className = "topnav";
    document.querySelectorAll(".dropdown-content").forEach(menu => (menu as HTMLElement).style.display = "none");
    (document.querySelector(".dropbtn") as HTMLElement).onmouseover = () => {
        document.querySelectorAll(".dropdown-content").forEach(menu => (menu as HTMLElement).style.display = "block");
    }
    (document.querySelector(".dropdown-content") as HTMLElement).onmouseleave = () => {
        document.querySelectorAll(".dropdown-content").forEach(menu => (menu as HTMLElement).style.display = "none");
    }
}

function openSubMenu(menuId: string) {
    const menu = document.getElementById(menuId);
    if (menu) {
        let menuEl = menu as HTMLElement;
        if (menuEl.style.display === "none") {
            menuEl.style.display = "block";
        } else {
            menuEl.style.display = "none";
        }
    }
    
}

</script>

<style scoped>

#logo {
    max-width: 100px;
    border-radius: 10%;
    opacity: 0.85;
    margin-top: 4px;
}

select {
    font-weight: bold;
    padding: 5px;
    border-radius: 5px;
}

/*
 * Invert the colour of the change language icon so it's easier to see.
 */
#changeLang {
    filter: invert();
}

.topnav {
    overflow: hidden;
    float:right;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
    display: none;
    cursor: pointer;
}

/* Dropdown container - needed to position the dropdown content */
.dropdown {
    float: left;
    overflow: hidden;
}

.langButton {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
}

/* Style the dropdown button to fit inside the topnav */
.dropdown .dropbtn {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    cursor: pointer;
}

/* Highlight when tabbing through things with the keyboard */
.dropbtn:focus, a:focus {
    background-color: #ff8b68;
    color: black;
    
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #ff8b68;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

/* Style the links inside the dropdown */
.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

/* Add a dark background on topnav links and the dropdown button on hover */
.topnav a:hover,
.dropdown:hover .dropbtn {
    background-color: #555;
    color: white;
}

/* Add a grey background to dropdown links on hover */
.dropdown-content a:hover {
    background-color: #ddd;
    color: black;
}

/* Show the dropdown menu when the user moves the mouse over the dropdown button */
.dropdown:hover > .dropdown-content {
    display: block;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {

    #logo {
        max-width: 50px;
    }

    .topnav a:not(:first-child),
    .dropdown .dropbtn {
        display: none;
    }

    .topnav a.icon {
        float: right;
        display: block;
    }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
    .topnav.responsive {
        position: relative;
    }

    .topnav.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
    }

    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }

    .topnav.responsive .dropdown {
        float: none;
    }

    .topnav.responsive .dropdown-content {
        position: relative;
    }

    .topnav.responsive .dropdown .dropbtn {
        display: block;
        width: 100%;
        text-align: left;
    }
}</style>
