<template>
    

    <div id="container">
        <h1>Whale watching tours</h1>
        <p class="blurb">Few wildlife encounters can match coming face-to-face with a whale. The perfect family day out or bucket list entry.</p>

        <div class="showcase">
            <img loading="lazy" class="defaultImage" srcset="/sydfjords/whales/whale-320w.webp 320w, /sydfjords/whales/whale-480w.webp 480w, /sydfjords/whales/whale-600w.webp 600w, /sydfjords/whales/whale-1080w.webp 1080w, /sydfjords/whales/whale-1920w.webp" 
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px" 
                alt="A humpback whale breaching" 
                src="/sydfjords/whales/whale-480w.webp">
            <div>
                <p>The bumpback whale is one of the most prevalent and majestic species in these waters.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!</p>
                <p>Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?</p>
            </div>
        </div>
        <div class="showcase">
            <img loading="lazy" class="defaultImage" srcset="/sydfjords/whales/whale2-320w.webp 320w, /sydfjords/whales/whale2-480w.webp 480w, /sydfjords/whales/whale2-600w.webp 600w, /sydfjords/whales/whale2-1080w.webp 1080w, /sydfjords/whales/whale2-1920w.webp" 
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px" 
                alt="A humpback whale breaching" 
                src="/sydfjords/whales/whale2-480w.webp">
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas maxime nulla in, fugiat, ratione iure commodi voluptas sapiente impedit aspernatur iste? Animi quas nam quis culpa blanditiis rerum corporis.</p>
                <p>Lenetur at eos aliquam, nesciunt, adipisci libero dolores qui blanditiis debitis minima nostrum, vel voluptatum. Quibusdam ex officia saepe, excepturi sunt blanditiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore sequi, nemo dolores quia eaque aliquid deserunt nam quae aut unde voluptate, vitae saepe perferendis sunt culpa ipsum suscipit ab?</p>
            </div>
        </div>
        <div class="showcase">
            <img loading="lazy" class="defaultImage" srcset="/sydfjords/whales/whale3-320w.webp 320w, /sydfjords/whales/whale3-480w.webp 480w, /sydfjords/whales/whale3-600w.webp 600w, /sydfjords/whales/whale3-1080w.webp 1080w, /sydfjords/whales/whale3-1920w.webp" 
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px" 
                alt="A wooden sailing ship with tourists in a cold environment" 
                src="/sydfjords/whales/whale3-480w.webp">
            <div>
                <p>The lorthik, a traditional sailing vessel from the region, is now the premier way to watch these noble creatures.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas maxime nulla in, fugiat, ratione iure commodi voluptas sapiente impedit aspernatur iste? Animi quas nam quis culpa blanditiis rerum corporis.</p>
                <p>Dicta impedit nihil, fuga consectetur quidem quae soluta iure aliquam debitis modi itaque id quibusdam sapiente! Quos aspernatur quas sequi molestias reprehenderit.</p>
                <p>Odio fugiat, voluptas consectetur delectus nulla expedita accusamus dicta esse rerum provident ipsum nostrum animi enim dolorem perferendis nisi? Officiis, asperiores aut.</p>
            </div>
        </div>

        <h2>Where can I do this?</h2>
        <p>Tours depart from Colwdvatn and Ipsemvatn during the summer months (December to March).</p>

    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#container {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    max-width: 320px;
    border-radius: 10%;
}

.showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 20px;
    align-items: center;
}

.showcase p{
    font-size: 1.1rem;
}

.blurb {
    font-size: 1.2rem;
}

@media (max-width: 480px) {
    .showcase {
        display: flex;
        flex-direction: column;
    }
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