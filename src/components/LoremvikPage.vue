<script setup lang="ts">
</script>

<template>
    <div id="container">
        <h1>Loremvik</h1>
        <p class="blurb">The horse and livestock capital</p>

        <img loading="lazy" srcset="/sydfjords/horses-480w.webp 480w, /sydfjords/horses-800w.webp 800w, /sydfjords/horses-1080w.webp 1080w"
    sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px" alt="A pair of horses">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut.</p>

        <img src="/sydfjords/hotels/waterfall.jpg" alt="A cabin with a waterfall in the background"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcset="/sydfjords/hotels/waterfall-320w.webp 320w, /sydfjords/hotels/waterfall-480w.webp 480w, /sydfjords/hotels/waterfall-600w.webp 600w, /sydfjords/hotels/waterfall-1080w.webp 1080w, /sydfjords/hotels/waterfall-1920w.webp"
            >
        <p>Brufoss Waterfall. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!</p>
        
    </div>
</template>

<style scoped>


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
