<script setup lang="ts">
import GalleryWithHover, { ImageDetails } from './GalleryWithHover.vue';

const gallery: ImageDetails[] = [{
  source: "/borealis-480w.webp",
  caption: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
  altText: "An aurora australis.",
  srcset: "/borealis-480w.webp 480w, /borealis-800w.webp 800w, /borealis-1366w.webp 1366w, /borealis-1920w.webp 1920w",
  sizes: "(max-width: 600px) 480px, 800px, 1366px, 1920px"
},{
  source: "/town2-480w.webp",
  altText: "A collection of buildings near the water's edge, in front of a mountain",
  caption: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
  srcset: "/town2-480w.webp 480w, /town2-800w.webp 800w, /town2-1080w.webp 1080w, /town2-1366w.webp 1366w, /town2-1920w.webp 1920w",
  sizes: "(max-width: 600px) 480px, 800px, 1080px, 1366px, 1920px"
},{
  source: "/town-480w.webp",
  altText: "A town near the water's edge, with snow-capped mountains in the background",
  caption: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
  srcset: "/town-480w.webp 480w, /town-800w.webp 800w, /town-1080w.webp 1080w, /town-1366w.webp 1366w, /town-1920w.webp 1920w",
  sizes: "(max-width: 600px) 480px, 800px, 1366px, 1920px"
},{
  source: "/horses-480w.webp",
  altText: "A pair of horses",
  caption: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus.",
  srcset: "/horses-480w.webp 480w, /horses-800w.webp 800w, /horses-1366w.webp 1366w, /horses-1920w.webp 1920w",
  sizes: "(max-width: 600px) 480px, 800px, 1366px, 1920px"
}, ];

</script>

<template>
    <img id="hero" srcset="/hero-480w.jpg 480w, /hero-800w.jpg 800w, /hero-1366w.jpg 1366w, /hero.jpg 1920w"
     sizes="(max-width: 600px) 480px, 800px, 1366px, 1920px"
     src="/hero-800w.jpg"
     alt="Snowy mountains above a lake in a wild setting">
     <h1>Welcome to a land steeped in magic</h1>
    <GalleryWithHover v-bind:images="gallery"></GalleryWithHover>
</template>

<style scoped>
#hero {
  margin-top: 20px;
  margin-bottom: 50px;
  max-width: 100%;
}

</style>
