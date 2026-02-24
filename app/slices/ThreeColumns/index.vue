<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.ThreeColumnsSlice>());
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
        <div v-for="item in slice.primary.column" class=" bg-stone-100 text-stone-900 p-4 lg:p-8 border border-1 border-stone-450 rounded mb-8 lg:mb-0" v-gsap.whenVisible.from="{ opacity: 0, y: -32 }">
          <!-- <pre>{{ item }}</pre> -->
          <h3 class="font-bold text-center">{{ item.column_title }}</h3>
          <div class="text-bold text-xl text-center mb-3">{{ item.pricing }}</div>
          <p class="text-sm"><PrismicRichText :field="item.column_content" /></p>
        </div>
      </div>

    </section>
  </Bounded>
</template>

