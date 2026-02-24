<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.HeroSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  <!-- {{ slice }} -->
    <PrismicImage class="w-full grayscale" :field="slice.primary.image" />
  </section>
</template>
