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
                <p>Self-catering</p>
            </div>
        </div>
        <div class="entry">
            <img src="/sydfjords/hotels/turfHouse.jpg" alt="A shed half-buried in the ground"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcset="/sydfjords/hotels/turfHouse-320w.webp 320w, /sydfjords/hotels/turfHouse-480w.webp 480w, /sydfjords/hotels/turfHouse-600w.webp 600w, /sydfjords/hotels/turfHouse-1080w.webp 1080w, /sydfjords/hotels/turfHouse-1920w.webp"
            >
            <div>
                <h2>Turfdwellers</h2>
                <p>3km from Ipsemvatn</p>
                <p>Self-catering in a traditional house</p>
            </div>
        </div>
        <div class="entry"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>

@media (min-width: 481px) and (max-width: 600px) {
    img {
        max-width: 480px;
    }
}

@media (min-width: 601px) and (max-width: 800px) {
    img {
        max-width: 600px;
    }
}

@media (min-width: 801px) and (max-width: 1200px) {
    img {
        max-width: 800px;
    }
}

@media (min-width: 1201px) {
    img {
        max-width: 1080px;
    }
}

</style>