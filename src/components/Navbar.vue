<!-- Originally derived from W3Schools: https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp -->

<template>
    <img id="logo" alt="" src="/sydfjords/icons/Sydfjords_Logo_1.png">
    <nav class="topnav">
        <router-link to="/">Home</router-link>
        <div class="dropdown">
            <button class="dropbtn" @click="openSubMenu()">See and Do</button>
            <div class="dropdown-content">
                <router-link to="/colwdvatn">Coldwatvn</router-link>
                <router-link to="/">Loremvik</router-link>
                <router-link to="/">Ipsumvatn</router-link>
            </div>
        </div>
        <router-link to="/">Stay</router-link>
        <router-link to="/">Get Here</router-link>
        <a class="icon" @click="openMenu()">&#9776;</a>
    </nav>
</template>

<script setup lang="ts">


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
        const menu = document.querySelector(".dropdown-content");
        if (menu) {
            (menu as HTMLElement).style.display = "none";
        }
    }
    
}

function openSubMenu() {
    const menu = document.querySelector(".dropdown-content");
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
.dropdown:hover .dropdown-content {
    display: block;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {

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
