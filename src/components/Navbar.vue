
<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li class="dropdown">
                <button>See and Do</button>
                <div class="dropdown-menu">
                    <router-link to="/colwdvatn">Coldwatvn</router-link>
                    <router-link to="/">Loremvik</router-link>
                    <router-link to="/">Ipsumvatn</router-link>
                </div>
            </li>
            <li>
                <a href="#">Stay</a>
            </li>
            <li>
                <a href="#">Get Here</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        font-size: 1.2rem;
        gap: 1rem;
    }

    li {
        padding: 10px;
        background-color: #ff8b68;
        border: 0px;
        display: flex;
    }

    a {
        color: black;
        border-radius: 5px;
        padding: 10px;
    }

    a:hover {
        color: black;
        background-color: #f0efed;
    }

    .dropdown {
        padding: 5px;
        display: block;
    }

    .dropdown button {
        background-color: #ff8b68;
        padding: 10px;
        border: 0px;
        text-decoration: underline;
        font-size: 1.2rem;
        border-radius: 5px;
    }

    .dropdown button:hover {
        background-color: #f0efed;
        color: black;
        padding: 10px;
        border: 0px;
        text-decoration: underline;
        font-size: 1.2rem;
    }

    .dropdown-menu {
        display: none;
        position: absolute;
        background-color: #f0efed;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-radius: 8px;
        z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-menu a {
        color: black;
        padding: 12px 16px;
        display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-menu a:hover {background-color: #ddd;}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-menu {display: block;}

    /* Change the background color of the dropdown button when the dropdown menu is shown */
    .dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>
