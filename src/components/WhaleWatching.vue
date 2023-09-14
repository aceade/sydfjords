<template>
    <h1>Whale watching</h1>

    <div id="container">
        <div class="showcase">
            <img loading="lazy" class="defaultImage" srcset="/sydfjords/whales/whale-320w.webp, /sydfjords/whales/whale-480w.webp, /sydfjords/whales/whale-600w.webp, /sydfjords/whales/whale-1080w.webp, /sydfjords/whales/whale-1920w.webp" 
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px" 
                alt="A humpback whale breaching" 
                src="/sydfjords/whales/whale-320w.webp">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!</p>
        </div>
        <div class="showcase">
            <img loading="lazy" class="defaultImage" srcset="/sydfjords/whales/whale2-320w.webp, /sydfjords/whales/whale2-480w.webp, /sydfjords/whales/whale2-600w.webp, /sydfjords/whales/whale2-1080w.webp, /sydfjords/whales/whale2-1920w.webp" 
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px" 
                alt="A humpback whale breaching" 
                src="/sydfjords/whales/whale2-320w.webp">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas maxime nulla in, fugiat, ratione iure commodi voluptas sapiente impedit aspernatur iste? Animi quas nam quis culpa blanditiis rerum corporis.</p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#container {
    margin: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    max-width: 320px;
}

.showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 10px;
}

@media (max-width: 480px) {
    .showcase {
        display: flex;
        flex-direction: column;
    }
}
</style>