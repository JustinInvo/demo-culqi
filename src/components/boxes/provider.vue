<template>
  <div class="flex items-center justify-between py-4 border-b-[1px] border-[#ddd]">
    <div class="flex gap-4 items-center">
      <img
        class="h-10 w-10"
        :src="image"
        alt="Claro"
      />
      <p>{{ company }}</p>
    </div>
    <FavoriteIcon class="w-10 cursor-pointer" />
  </div>
</template>

<script setup>
// import HeartIcon from '@/components/icons/heart.vue'
import FavoriteIcon from '@/components/icons/favorite.vue'
const props = defineProps({
  company: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>