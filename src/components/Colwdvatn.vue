<script setup lang="ts">
</script>

<template>
    <div id="container">
        <h1>Colwdvatn</h1>
        <p class="blurb">The heart of the Sydfjords</p>

        <img srcset="/town-480w.webp 480w, /town-800w.webp 800w, /town-1080w.webp 1080w, /town-1366w.webp 1366w, /town-1920w.webp 1920w"
    sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1366px, 1920px" alt="Town">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam.</p>

        <img loading="lazy" srcset="/town2-480w.webp 480w, /town2-800w.webp 800w, /town2-1080w.webp 1080w, /town2-1366w.webp 1366w, /town2-1920w.webp 1920w"
    sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1366px, 1920px" alt="Town">
    </div>
</template>

<style scoped>

#container {
    margin: 100px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

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
