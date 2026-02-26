<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.ToolListingSlice>());
</script>

<template>
  <Bounded>
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
    >
      <div class="lg:grid grid-cols-2 gap-8">
        <div v-gsap.whenVisible.from="{ opacity: 0, y: 32 }">
          <PrismicImage :field="slice.primary.image" />
        </div>
        <div v-gsap.whenVisible.from="{ opacity: 0, y: 32 }">
          <h2>{{ slice.primary.title }}</h2>
          <div>
            <PrismicRichText :field="slice.primary.body" />
          </div>
        </div>  
      </div>
    </section>
  </Bounded>
</template>
