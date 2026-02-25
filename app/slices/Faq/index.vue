<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.FaqSlice>());
</script>

<template>
  <Bounded>
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
    >
      <div class="text-center mb-12 mx-auto lg:w-1/2">
        <h2>{{ slice.primary.title }}</h2>
        <p>{{ slice.primary.body }}</p>
      </div>

       <div>
        <div v-for="item in slice.primary.faqs" class="bg-stone-100 text-stone-900 p-4 lg:p-8 border border-1 border-stone-450 rounded mb-8" v-gsap.whenVisible.from="{ opacity: 0, y: 32 }">
            <div>
              <!-- <pre>{{ item }} {{ index }}</pre> -->
              <h3 class="border border-t-0 border-r-0 border-l-0 border-b-1 border-stone-550 pb-2">{{ item.question }}</h3>
              <!-- <button >Toggle text</button>            -->
            </div>
              <div class="">
                <p>{{ item.answer }}</p>
            </div>
        </div>
      </div>
    </section>
  </Bounded>
</template>
