<script setup lang="ts">
</script>

<template>
    <div id="container">
        <h1>How to get here</h1>

        <h2> <a href="https://aceade.github.io/colwdvatn-rails/" target="_blank">Take The Train</a></h2>
        <div id="trains">
            <img class="mainImage" src="/sydfjords/travel/train-480.webp" alt="A steam train in the snow"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcset="/sydfjords/travel/train-320w.webp 320w, /sydfjords/travel/train-480w.webp 480w, /sydfjords/travel/train-800w.webp 800w, /sydfjords/travel/train-1080w.webp 1080w"
            >
            <img class="hoverImage" src="/sydfjords/travel/train2-480.webp" alt="A steam train travelling through forested hills"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcset="/sydfjords/travel/train2-320w.webp 320w, /sydfjords/travel/train2-480w.webp 480w, /sydfjords/travel/train2-800w.webp 800w, /sydfjords/travel/train2-1080w.webp 1080w"
            >
        </div>
        <p>Two days on the train from Tinland through the pine forests and valleys. Four days from Levarche.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <h2>By Sea</h2>
        <img loading="lazy" class="defaultImage" srcset="/sydfjords/whales/whale3-320w.webp 320w, /sydfjords/whales/whale3-480w.webp 480w, /sydfjords/whales/whale3-600w.webp 600w, /sydfjords/whales/whale3-1080w.webp 1080w, /sydfjords/whales/whale3-1920w.webp" 
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px" 
                alt="A wooden sailing ship with tourists in a cold environment" 
                src="/sydfjords/whales/whale3-480w.webp">
        <p>The traditional way. Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?</p>

        <h2>Drive</h2>
        <img loading="lazy" class="defaultImage" srcset="/sydfjords/travel/road-320w.webp 320w, /sydfjords/travel/road-480w.webp 480w, /sydfjords/travel/road-600w.webp 600w, /sydfjords/travel/road-1080w.webp 1080w, /sydfjords/travel/road-1920w.webp" 
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px" 
                alt="A road through the mist" 
                src="/sydfjords/whales/whale3-480w.webp">
        <p>Historically, this was only for the adventurous and experienced motorist. In recent years, the road network has been significantly improved.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis architecto optio culpa ex adipisci laudantium animi qui neque ullam. Tempora cum culpa sint possimus velit reprehenderit necessitatibus deleniti sit.</p>
    </div>
</template>

<style scoped>

img {
    max-width: 320px;
    border-radius: 10%;
}


p {
    font-size: 1.2rem;
    margin-bottom: unset;
    max-width: 80ch;
}


@media (min-width: 600px) and (max-width: 900px) {
    .galleryItem img {
        max-width: 600px;
    }
}

@media (min-width: 900px) and (max-width: 1200px) {

    #trains img {
        width: calc(50% - 5px);
        padding: 2px;
        border-radius: 10%;
    }


    img {
        max-width: 900px;
    }

    p {
        max-width: 160ch;
    }
}
/* Note to self: do NOT use "repeat" */
@media (min-width: 1200px) {

    #trains img {
        width: calc(50% - 5px);
        padding: 2px;
        border-radius: 10%;
    }

    img {
        max-width: 1080px;
    }

    p {
        max-width: 160ch;
    }
}
</style>
