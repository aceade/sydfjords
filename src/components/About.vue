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
                <input id="name" required minlength="1">
                <label for="email">Your address</label>
                <input type="email" id="email" required>
                <label for="message">Your query</label>
                <textarea id="message" required minlength="1"></textarea>
                <button @click="mockSend">Submit</button>
                <p id="submitStatus"></p>
            </form>
        </div>

        <h2>About</h2>
        <div id="about">
            <p>This is a practice project to get better at responsive web design. It was originally derived from <a href="https://www.frontendpractice.com/projects/monogram">this practice project</a>, but I decided to create a tourism page for a fictional setting that is part Patagonia, part Iceland.</p>
            <p>The email form above doesn't actually send anything. It just says that after a random delay to simulate network latency.</p>
        </div>
    </div>
</template>

<script setup lang="ts">

function mockSend(event: Event) {
    event.preventDefault();

    // one downside to TypeScript: I have to do all this casting crap
    let name: string = (document.getElementById("name") as HTMLInputElement).value;
    let email: string = (document.getElementById("email") as HTMLInputElement).value;
    let message: string = (document.getElementById("message") as HTMLTextAreaElement).value;

    let validation = validateDetails(name, email, message);

    if (validation.nameValid && validation.emailValid && validation.messageValid) {
        let delay: number = Math.random() * 3000;
        setTimeout(()=>{
            notifyResult("Your message has been sent");
        }, delay);
    } else {
        let message = "Please fill out all fields";
        notifyResult(message);
    }

}

function validateDetails(name: string, email: string, message: string) {
    console.log(name, email, message);
    return {
        nameValid: name?.length > 1,
        emailValid: email?.length > 1,
        messageValid: message?.length > 1
    }
}

function notifyResult(result: string) {
    let submitStatus = (document.getElementById("submitStatus") as HTMLParagraphElement);
    submitStatus.textContent = result;
    setTimeout(() => {
        submitStatus.textContent = "";
    }, 3000);
}


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

    #emailForm label {
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