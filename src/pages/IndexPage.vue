<template>
  <q-page>
    <hero-section />
    <feature-section />
  </q-page>
</template>

<script setup lang="ts">
import { HeroSection, FeatureSection } from '@/components';
import { useNavigation } from '@/composables';

// Initialize navigation to handle hash fragments
useNavigation();
</script>
