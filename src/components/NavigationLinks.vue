<template>
  <div class="navigation-links">
    <q-btn
      v-for="section in sections"
      :key="section.id"
      flat
      no-caps
      :label="section.label"
      @click="scrollToSection(section.id)"
      class="q-mx-sm"
    />
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from '@/composables';

const { sections, scrollToSection } = useNavigation();
</script>

<style lang="scss" scoped>
.navigation-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .navigation-links {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
