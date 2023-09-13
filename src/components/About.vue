<template>

    <div id="container">
        <h1>Got a query? Contact us!</h1>

        <h2>Tourism offices</h2>
        <div id="offices">
            <div class="office">
                <p>Tinland</p>
                <p>Grand Line Station</p>
            </div>
            <div class="office">
                <p>Levarche</p>
                <p>11 Rucks Bridge</p>
            </div>
            <div class="office">
                <p>Colwdvatn</p>
                <p>3 Main Square</p>
            </div>
            <div class="office">
                <p>Kerbalstead</p>
            </div>
        </div>

        <h2>Email us</h2>
        <div id="emailForm">
            <form>
                <label for="name">Your name</label>
                <input id="name" required>
                <label for="email">Your address</label>
                <input type="email" id="email" required>
                <label for="message">Your query</label>
                <textarea id="message" required></textarea>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

    #container {
        margin: 100px 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #offices {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .office {
        border-radius: 0px 15px 15px 0px;
        background-color: #1a2456;
        color: white;
        padding: 5px;
    }

    #emailForm {
        max-width: 320px;
        border-radius: 15px;
        background-color: #ff8b68;
        padding: 10px;
        text-align: left;
    }

    #emailForm input, label, textarea {
        width: 100%;
        margin-bottom: 10px;
    }

    #emailForm label {
        font-size: 1.2rem;
    }
</style>