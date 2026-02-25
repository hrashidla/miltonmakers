<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.RichTextSlice>());
</script>

<template>
  <Bounded>
    <section class="mx-auto lg:w-1/2">
      <PrismicRichText :field="slice.primary.content" />
    </section>
  </Bounded>
</template>
