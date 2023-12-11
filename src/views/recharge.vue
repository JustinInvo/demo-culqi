<template>
  <div class="flex flex-col">
    <h2>Buscar empresa</h2>
    <div class="my-4">
      <input class="bg-[#eee] w-full h-10 box-border px-4" placeholder="ej. Culqui" type="text" />
    </div>
    <div class="flex gap-3.5 mb-4">
      <CategoryBox
        label="Todos"
        :icon="HeartIcon"
        :is-active="true"
        @click="selectFavorite(0)"
      />
      <CategoryBox
        label="Favoritos"
        :icon="HeartIcon"
        :is-active="false"
        @click="selectFavorite(1)"
      />
      <CategoryBox
        label="Telefonía"
        :icon="HeartIcon"
        :is-active="false"
        @click="selectFavorite(2)"
      />
    </div>
    <div class="flex flex-col">
      
      <template v-if="listProviders">
        <ProviderBox v-for="(item, key) in listProviders" :key="key" :company="item.company" :image="item.image"/>
        {{item}}
      </template>
      <template v-else>
        <p class="text-center">No tienes proveedores :'(</p>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeartIcon from '@/components/icons/heart.vue'
import CategoryBox from '@/components/boxes/category.vue'
import ProviderBox from '@/components/boxes/provider.vue'
import useComposableData from '../api/composables.js'

// const activeIndex = ref(null)
const listProviders = ref([])
const { providers, loading, error, fetchData } = useComposableData()

const selectFavorite = (index) => {
  console.log('Hola', index)
}

onMounted(() => {
  getProviders()
})
const getProviders = async()=> {
  const listCompanies = await fetchData('/getProviders')
  listProviders.value = listCompanies.companies
  console.log('listCompanies',listCompanies.companies)
}
</script>
