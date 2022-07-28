<template>
    <router-link :to="props.path">{{props.label}}</router-link>
</template>
<script lang="ts" setup>

    type MenuOption = {
        path: string,
        label: string
    }

    const props = defineProps<MenuOption>()

    console.log(props)
</script>
<style scoped>

    a{
        color: red;
    }

</style>