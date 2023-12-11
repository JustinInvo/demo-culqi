<template>
  <div class="flex flex-col">
      <h2 class="flex">
        Saldo Virtual
        <InfoIcon class="stroke-green-1 w-[12px] ml-2 cursor-pointer"/>
      </h2>
      <h4 class="flex mb-1 text-[28px] font-bold">
        S/ {{ 
          balance ? balance :'Cargando ...'
         }}
        <ReloadIcon class="stroke-green-1 w-[12px] ml-2 cursor-pointer"/>
      </h4>
      <div class="mb-3">
        <CategoryBox label="¿Cómo cargar mi saldo virtual?" :icon="HeartIcon" :is-active="false" />
      </div>
      <p>Código para cargar tu saldo: <span class="text-green-1">{12345678901}</span></p>
    </div>
    <div class="w-full h-[1px] my-6 bg-[#ccc]"></div> 
    <div class="flex flex-col gap-4">
        <div @click="goToRecharge()" class="flex px-3 py-4 font-bold gap-[15px] bg-gray-2 rounded-lg cursor-pointer">
          <div class="bg-orange-1 p-1 rounded-[6px] h-fit w-[23px]">
            <RechargeIcon class="w-[15px] stroke-[#fff]"/>
          </div>
          Recargas
        </div>
        <div class="flex px-3 py-4 font-bold gap-[15px] bg-gray-2 rounded-lg cursor-pointer">
          <div class="bg-orange-1 p-1 rounded-[6px] h-fit w-[23px]">
            <PayIcon class="w-[15px] stroke-[#fff]"/>
          </div>
          Pago de servicios
        </div>
        <div class="flex px-3 py-4 font-bold gap-[15px] bg-gray-2 rounded-lg cursor-pointer">
          <div class="bg-orange-1 p-1 rounded-[6px] h-fit w-[23px]">
            <HistoryIcon class="w-[15px] stroke-[#fff]"/>
          </div>
          Historial de ganancias y operaciones
        </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import InfoIcon from '@/components/icons/info.vue'
import ReloadIcon from '@/components/icons/reload.vue'
import HeartIcon from '@/components/icons/heart.vue'
import RechargeIcon from '@/components/icons/recharge.vue'
import PayIcon from '@/components/icons/pay.vue'
import HistoryIcon from '@/components/icons/historial.vue'
import CategoryBox from '@/components/boxes/category.vue'
import useComposableData from "../api/composables.js"
import router from '@/router'

  const balance = ref(0)
  // const balanceVirtual = ref([])

  const goToRecharge = () => router.push({ name: 'recargas' })

  const { providers, loading, error, fetchData } = useComposableData();

  onMounted(() => {
    getDataBanlace()
  });
  const getDataBanlace = async()=> {
    const balanceGet = await fetchData('/getActualBalance');
    balance.value = balanceGet.balanceCommerce
    console.log('balanceGet', balanceGet.balanceCommerce)
  }
</script>
