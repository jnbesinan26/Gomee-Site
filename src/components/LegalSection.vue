<template>
  <section class="legal-section q-mb-xl">
    <base-container>
      <div class="text-h3 text-weight-bold text-primary">{{ title }}</div>
      <slot />
    </base-container>
  </section>
</template>

<script setup lang="ts">
import { BaseContainer } from '@/components';

defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped></style>
