<script lang="ts" setup>
import type { Content } from "@prismicio/client";

defineProps<{ settings?: Content.SettingsDocument }>()

const isOpen = ref(false)
</script>

<template>
  <header class="p-1 md:py-3 md:px-0">
    <nav
      class="mx-auto flex max-w-6xl flex-col justify-between py-2 md:flex-row md:items-center font-medium text-white"
      aria-label="Main"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="z-40" @click="isOpen = false">
          <MMLogo />
          <span class="sr-only">{{ settings?.data.site_title }}Milton Makers</span>
        </NuxtLink>

        <button
          type="button"
          class="block md:hidden p-2 text-5xl text-amber-900"
          :aria-expanded="isOpen"
          @click="isOpen = true"
        > 
          <Icon name="ph:list-bold" />
        </button>
      </div>

      <!-- Mobile Nav -->
      <div
        class="md:hidden fixed inset-0 z-50 flex flex-col items-end bg-stone-800 pr-4 pt-4 transition-transform duration-300 ease-in-out"
        :class="isOpen ? 'translate-x-0' : 'translate-x-[100%]'"
      >
        <button
          :aria-expanded="isOpen"
          type="button"
          class="block md:hidden p-2 text-5xl text-white"
          @click="isOpen = false"
        >
          <Icon name="ph:x-bold" />
        </button>
        <ul class="text-center w-full justify-items-center gap-8">
          <li v-for="link in settings?.data.navigation" :key="link.key">
            <PrismicLink
              :field="link"
              class="block min-h-6 px-3 text-3xl first:mt-8 text-white"
              :class="{ buttonLink: link.variant === 'Button' }"
              @click="isOpen = false"
            />
          </li>
        </ul>
      </div>

      <!-- Desktop Nav -->
      <ul class="hidden gap-6 md:flex">
        <li v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink
            :field="link"
            class="inline-flex min-h-11 items-center text-amber-900"
            :class="{ buttonLink: link.variant === 'Button' }"
            @click="isOpen = false"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>