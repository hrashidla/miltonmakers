<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.HeroSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  {{ slice.primary.heading }}
    <PrismicImage class="w-full grayscale" :field="slice.primary.image" />
    <PrismicText
            :field="slice.primary.heading"
            class="text-4xl mb-4"
            wrapper="h1"
          />
  <PrismicImage :field="slice.primary.image" />
  </section>
</template>
