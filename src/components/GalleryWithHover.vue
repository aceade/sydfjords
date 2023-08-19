<script setup lang="ts">
// Original hover source: https://sirv.com/help/articles/hover-change-image/
// basically changes opacity on hover
// not used because I can't line it up nicely

export interface ImageDetails {
    source?: string;
    altText: string;
    caption: string;
    srcset: string;
    sizes: string;
}

defineProps<{images: ImageDetails[]}>();

</script>

<template>
    <div class="gallery">
        <div class="galleryItem" v-for="item of images">
            <img loading="lazy" class="defaultImage" v-bind:srcset="item.srcset" v-bind:sizes="item.sizes" v-bind:alt="item.altText" v-bind:src="item.source">
            <p>{{ item.caption }}</p>
        </div>
    </div>
</template>

<style scoped>



.gallery {
    display: flex;
    flex-direction: column;
    gap: 10px;

}

.galleryItem p {
    margin: 10px;
    font-size: 1.2rem;
}

.galleryItem img {
    max-width: 320px;
}

/* Larger than 600px wide, but less than 900 */
@media (min-width: 600px) and (max-width: 900px) {
    .galleryItem img {
        max-width: 600px;
    }
}

@media (min-width: 900px) and (max-width: 1200px) {

    .gallery {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    .galleryItem img {
        max-width: 600px;
    }
}
/* Note to self: do NOT use "repeat" */
@media (min-width: 1200px) {
    .gallery {
        display: grid;
        width: 100%;
        grid-template-columns: 0.5fr 0.5fr;
        gap: 20px;
    }

    .galleryItem img {
        max-width: 800px;
    }
}

</style>

