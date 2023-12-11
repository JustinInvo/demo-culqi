<template>
    <div
        :class="['float-left', 'cursor-pointer', 'py-1', 'px-3', 'gap-1', 'rounded-2xl', 'box-border', 'flex', 'border-[1px]', 'border-[#ccc]', { 'active': isActive }]"
    >
        <component :is="icon" class="stroke-black-1 w-[12px]" />
        <p>{{ label }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        label: {
            type: String,
            required: true,
        },
        icon: {
            type: Object, // Tipo del componente del icono (por ejemplo, HeartIcon)
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    })
</script>

<style scoped>
    .active {
        border-color: orange;
    }
</style>