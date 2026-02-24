<script lang="ts" setup>
import type { Content } from "@prismicio/client";

defineProps<{ settings?: Content.SettingsDocument }>()
</script>

<template>
  <footer>
    <div class="bg-stone-900 mt-24 pb-24 lg:pb-0 relative">
      <!-- <div class="absolute bottom-0 left-40 z-0 opacity-90">
        <Icon name="game-icons:anvil" class="bg-icon opacity-10"/>
      </div> -->
      <Bounded>
        <div class="lg:flex gap-x-16 z-10 relative pb-24">  
          <div class="lg:w-1/2 lg:mb-0 pb-24 ">
            <h2 class="mb-6 text-stone-600">Interested in 
              <span class="block mt-4 text-4xl lg:text-5xl text-white">Joining the Space?</span>
            </h2>
            <div class="mt-2 p-4 lg:p-8 rounded-lg border border-1 border-stone-800 bg-stone-950/80">
              <!-- <h3 class="text-white font-bold">Steve Campos</h3>
              <div>Owner</div>
              <div class="mb-2">Steel Fabricated Arts</div>
              <div class="mb-2">Lincoln Heights, Los Angeles</div>
              <div>(555)-510-7777</div>
              <div>stevemaybecampos@gmail.com</div> -->
            </div>
          </div>
          <div class="lg:w-1/2">
          <form class="space-y-12" name="contact" method="POST" data-netlify="true" netlify>        
            <div>
              <label class="block text-sm font-medium text-stone-400">Your Name
              <input type="text" name="name"
                class="text-xl block w-full px-3 py-2 mt-1 text-stone-600 bg-stone-300 border border-stone-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"></label>
            </div>
            <div>
              <label class="block text-sm font-medium text-stone-400">Email
              <input type="email" name="email" 
                class="text-xl block w-full px-3 py-2 mt-1 text-stone-600 bg-stone-300 border border-stone-700  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"></label>
            </div>
            <div>
              <label class="block text-sm font-medium text-stone-400">Your Message
              <textarea name="message"
                class="text-xl block h-24 w-full px-3 py-2 mt-1 text-stone-600 bg-stone-300 border border-stone-700  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800">
                </textarea></label>
            </div>
            <div class="text-center">
              <button type="submit" 
              class="text-2xl mx-auto buttonLink">
              Send Now
              </button>
            </div>
              
          </form>
          </div>
        </div>
      </Bounded>         
    </div>
    <div class="bg-stone-950">
      <nav
        class="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row border-t border-stone-950"
        aria-label="Footer"
      >
      <NuxtLink to="/">
        <SFALogo />
        <span class="sr-only">{{ settings?.data.site_title }} home page</span>
      </NuxtLink>
      <ul class="lg:flex gap-6 text-center lg:text-left">
        <li v-for="link in settings?.data.navigation" :key="link.key">
          <PrismicLink :field="link" class="inline-flex min-h-11 items-center text-stone-400 hover:text-stone-500" />
        </li>
      </ul>
      </nav>
    </div>
  </footer>
</template>
<style scoped>
/* .bg-icon{
  font-size:500px;
} */
</style>