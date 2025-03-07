<script setup lang="ts">
import { AppFooter, AppHeader } from '#components';
import App from '~/app.vue';

</script>

<template>
<div>
  <AppHeader />
<div class="mx-auto px-4 sm:px-0">
  <slot />
</div> 
  <AppFooter />
</div>
</template>

<style scoped></style>
