<template>

    <div id="container">
        <h1>Got a query? Contact us!</h1>

        <h2>Tourism offices</h2>
        <div id="offices">
            <div class="office">
                <p class="officeTitle">Tinland</p>
                <p>Grand Line Station</p>
            </div>
            <div class="office">
                <p class="officeTitle">Levarche</p>
                <p>11 Rucks Bridge</p>
            </div>
            <div class="office">
                <p class="officeTitle">Colwdvatn</p>
                <p>3 Main Square</p>
            </div>
            <div class="office">
                <p class="officeTitle">Kerbalstead</p>
                <p>Einagatan</p>
            </div>
        </div>

        <h2>Email us</h2>
        <div id="emailForm">
            <form>
                <label for="name">Your name</label>
                <input id="name" v-model="name" required minlength="1">
                <label for="email">Your address</label>
                <input type="email" v-model="email" id="email" required minLength="1">
                <label for="message">Your query</label>
                <textarea id="message" v-model="message" required minlength="1"></textarea>
                <button @click="mockSend">Submit</button>
            </form>
            <p id="submitStatus"><span>{{ statusText }}</span></p>
        </div>

        <h2>About</h2>
        <div id="about">
            <p>This is a practice project to get better at responsive web design and Vue. It was originally derived from <a href="https://www.frontendpractice.com/projects/monogram">this practice project</a>, but I decided to create a tourism page for a fictional setting that is part Patagonia, part Iceland.</p>
            <p>The email form above doesn't actually send an email; it just posts a request to an Azure Function that echoes the body back. <a href="https://github.com/aceade/sydfjords">The source code</a> is available for you to look at if you wish.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { makePrediction } from '../sentiment/sentiment';

// define references
const name = ref("");
const email = ref("");
const message = ref("");
const statusText = ref("");

async function mockSend(event: Event) {
    event.preventDefault();

    let validation = validateDetails(name.value, email.value, message.value);

    if (validation.nameValid && validation.emailValid && validation.messageValid) {
        notifyResult("Sending...")
        const prediction = await makePrediction(message.value);
        console.info(prediction);
        let body = {
            name: name.value,
            email: email.value,
            message: message.value,
            sentiment: prediction
        }
        let response = await window.fetch("https://aceade-express-echo.azurewebsites.net/api/email", {
            method: "POST",
            body: JSON.stringify(body),
            
        });
        if (response.status === 200) {
            notifyResult("Your email has been 'sent'")
        } else {
            notifyResult("Could not send your email. Please try again later")
        }
    } else {
        console.log("Invalid!!");
        notifyResult("Please fill out all fields");
    }
}


function validateDetails(name: string, email: string, message: string) {
    return {
        nameValid: name?.length > 1,
        emailValid: email?.length > 1,
        messageValid: message?.length > 1
    }
}

function notifyResult(result: string) {
    statusText.value = result;
    setTimeout(() => {
        statusText.value = "";
    }, 3000);
}


</script>

<script>
</script>

<style scoped>

    #container {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #offices {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 3px solid #1a2456;
        border-radius: 0px 0px 10px 10px;
        justify-content: center;
        width: 100%;
    }

    .office {
        border-radius: 0px 15px 15px 15px;
        background-color: #1a2456;
        color: white;
        padding: 5px;
    }

    .officeTitle {
        font-style: italic;
    }

    #emailForm {
        max-width: 320px;
        border-radius: 15px;
        background-color: #ff8b68;
        padding: 10px;
        text-align: left;
    }

    /* Using border-box to keep things consistently sized */
    #emailForm input, label, textarea, button, p {
        width: 100%;
        margin-bottom: 15px;
        border-radius: 5px;
        box-sizing: border-box;
    }

    #emailForm label, input, textarea {
        font-size: 1.2rem;
    }
    #emailForm button, p {
        font-size: 1.3rem;
    }

    @media screen and (min-width: 600px) and (max-width: 900px) {
        #container {
            margin-left: 100px;
            margin-right: 100px;
        }

        .office {
            max-width: 300px;
        }

        #emailForm {
            max-width: 600px;
        }
    }

    @media screen and (min-width: 901px) {
        #container {
            margin-left: 200px;
            margin-right: 200px;
        }

        #offices {
            grid-template-columns: 1fr 1fr 1fr;
        }


        #emailForm {
            max-width: 900px;
        }
    }

</style>