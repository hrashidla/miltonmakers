<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.HeroSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="min-h-screen w-full bg-center bg-cover relative" :style="{ backgroundImage: `url(${slice.primary.image.url})` }">
      <div 
      class="bg-stone-900/30 bg-linear-to-t from-stone-900 to-stone-950 z-30 absolute top-0 py-6 bottom-0 w-full text-center lg:h-full lg:left-0 lg:top-0
      ">
        <h2 class="text-4xl mb-4 text-black">{{ slice.primary.title }}</h2>
      </div>
    </div>
  </section>
</template>


