<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.HeroSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="relative h-[600px] w-full flex items-center justify-center text-center bg-center bg-cover" :style="{ backgroundImage: `url(${slice.primary.image.url})` }">
      <div class="absolute bg-black/30 w-full h-full z-10"></div>
      <div class="text-white z-20 p-4">
        <h1 class=" text-white pb-6 border border-t-0 border-l-0 border-r-0 border-white border-b-1">
          {{ slice.primary.title }}
        </h1>
        <h3 class="p-3 text-white lg-w-1/2 text-center">{{ slice.primary.body }}</h3>
      </div>
    </div>
  </section>
</template>


