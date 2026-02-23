<script lang="ts" setup>
defineProps<{ as?: string }>()
</script>

<template>
  <Component :is="as || 'section'" class="px-4 lg:px-0 pt-8 md:pt-20 lg:pt-24">
    <div class="mx-auto w-full max-w-6xl">
      <slot />
    </div>
  </Component>
</template>
