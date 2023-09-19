<script setup lang="ts">
</script>

<template>
    <div id="container">
        <h1>Ipsumvatn</h1>
        <p class="blurb">Gateway to Brieborg</p>

        <img src="/sydfjords/hotels/turfHouse.jpg" alt="A shed half-buried in the ground"
            sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
            srcset="/sydfjords/hotels/turfHouse-320w.webp 320w, /sydfjords/hotels/turfHouse-480w.webp 480w, /sydfjords/hotels/turfHouse-600w.webp 600w, /sydfjords/hotels/turfHouse-1080w.webp 1080w, /sydfjords/hotels/turfHouse-1920w.webp"
        >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam.</p>

        <img loading="lazy" class="defaultImage" srcset="/sydfjords/whales/whale3-320w.webp 320w, /sydfjords/whales/whale3-480w.webp 480w, /sydfjords/whales/whale3-600w.webp 600w, /sydfjords/whales/whale3-1080w.webp 1080w, /sydfjords/whales/whale3-1920w.webp" 
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px" 
                alt="A wooden sailing ship with tourists in a cold environment" 
                src="/sydfjords/whales/whale3-480w.webp">
        <p>Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?</p>
    </div>
</template>

<style scoped>

/* #container {
    margin: 100px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
} */

img {
    max-width: 320px;
}

.blurb {
    font-size: 1.5rem;
}

@media (min-width: 600px) and (max-width: 900px) {
    .galleryItem img {
        max-width: 600px;
    }
}

@media (min-width: 900px) and (max-width: 1200px) {

    img {
        max-width: 900px;
    }
}
/* Note to self: do NOT use "repeat" */
@media (min-width: 1200px) {

    img {
        max-width: 1080px;
    }
}
</style>
