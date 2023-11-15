<template>
    <div id="container">
        <h1>Where to Stay</h1>
        <div class="entry">
            <img src="/sydfjords/hotels/waterfall.jpg" alt="A cabin with a waterfall in the background"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcset="/sydfjords/hotels/waterfall-320w.webp 320w, /sydfjords/hotels/waterfall-480w.webp 480w, /sydfjords/hotels/waterfall-600w.webp 600w, /sydfjords/hotels/waterfall-1080w.webp 1080w, /sydfjords/hotels/waterfall-1920w.webp"
            >
            <div>
                <h2>Brufoss House</h2>
                <p>Loremvik</p>
                <p>Self-catering with a stunning backdrop.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem provident corporis quasi aliquid perferendis minus expedita, amet delectus, ea sed! Voluptas a, dolore doloremque omnis ratione unde nisi quam.</p>
                <p>Tel: +5555555 28883399</p>
            </div>
        </div>
        <div class="entry">
            <img src="/sydfjords/hotels/turfHouse.jpg" alt="A shed half-buried in the ground"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcset="/sydfjords/hotels/turfHouse-320w.webp 320w, /sydfjords/hotels/turfHouse-480w.webp 480w, /sydfjords/hotels/turfHouse-600w.webp 600w, /sydfjords/hotels/turfHouse-1080w.webp 1080w, /sydfjords/hotels/turfHouse-1920w.webp"
            >
            <div>
                <h2>Turfdwellers</h2>
                <p>3km from Ipsumvatn</p>
                <p>Self-catering in a traditional house.</p>
                <p>Rerum veniam quasi a esse illo ab consequuntur eveniet, voluptatem in suscipit veritatis possimus ullam ea quisquam asperiores, reprehenderit velit! Autem, cum.</p>
                <p>Tel: +5555555 12346 477847474</p>
            </div>
        </div>
        <div class="entry">
            <img src="/sydfjords/town-480w.webp" alt="A town by the water"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcset="/sydfjords/town-320w.webp 320w, /sydfjords/town-480w.webp 480w, /sydfjords/town-600w.webp 600w, /sydfjords/town-1080w.webp 1080w"
            >
            <div>
                <h2>Brieborg Arms</h2>
                <p>Colwdvatn</p>
                <p>Modern living in the heart of the Sydfjords.</p>
                <p>Aspernatur commodi eos voluptates vitae corrupti? Fugit corporis facilis excepturi similique necessitatibus dolorem, odio eum illo voluptatum quas voluptates ipsa! Rerum, quod.</p>
                <p>Tel: +5555555 12346 347838</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>

    .entry {
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 10px;
        border-bottom: 5px groove #ff8b68;
        padding-bottom: 10px;
    }

@media (min-width: 481px) and (max-width: 600px) {
    img {
        max-width: 480px;
    }
}

@media (min-width: 601px) and (max-width: 800px) {
    img {
        max-width: 600px;
    }

    .entry {
        grid-template-columns: 1fr 1fr;
    }

}

@media (min-width: 801px) and (max-width: 1200px) {
    img {
        max-width: 800px;
    }

    .entry {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1201px) {
    img {
        max-width: 1080px;
    }

    .entry {
        grid-template-columns: 1fr 1fr;
    }

    .entry p {
        font-size: 1.2rem;
    }
}

</style>