<template>
  <div class="base-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.base-container {
  max-width: 72.5rem; // 1160px
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 1200px) {
    max-width: 60rem; // 960px
    padding: 0 1.25rem;
  }

  @media (max-width: 1024px) {
    max-width: 48rem; // 768px
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 320px) {
    padding: 0 0.25rem;
  }
}
</style>
