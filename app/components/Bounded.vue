<script lang="ts" setup>
defineProps<{ as?: string }>()
</script>

<template>
  <Component :is="as || 'section'" class="px-4 py-6 md:py-8 lg:py-12">
    <div class="mx-auto w-full max-w-6xl">
      <slot />
    </div>
  </Component>
</template>
