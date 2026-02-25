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
      <div class="text-white z-20">
        <h1 class=" text-white">{{ slice.primary.title }}</h1>
      </div>
    </div>
  </section>
</template>


