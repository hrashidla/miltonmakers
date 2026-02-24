<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.ImageGridSlice>());
</script>

<template>
  <Bounded>
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
    >
      <div class="text-center mb-12">
        <h2>{{ slice.primary.title }}</h2>
        <p>{{ slice.primary.body }}</p>
      </div>

      <div class="lg:grid grid-cols-3 gap-8">
        <div v-for="item in slice.primary.images" class="" v-gsap.whenVisible.from="{ opacity: 0, y: 32 }">
          <!-- <pre>{{ item }}</pre> -->
          <PrismicImage :field="item.image" class="rounded"/>
          <p class="text-center">{{ item.image.alt }}</p>
        </div>
      </div>

      <div class="text-center mb-12">
        <PrismicLink
          :field="slice.primary.cta"
          class="block min-h-6 px-3 text-3xl first:mt-8 text-white"
          :class="{ buttonLink: slice.primary.cta.variant === 'Button' }"
        />
      </div>
      
    </section>
  </Bounded>
</template>
