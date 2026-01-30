<template>
  <section class="hero-section bg-primary text-white">
    <div class="container q-py-xl">
      <div class="text-center q-px-md">
        <svg-logo height="auto" class="hero-section__logo" />
        <p class="text-grey-9 q-mt-md hero-subtitle">Connecting users and vendors made easy!</p>

        <!-- Download Buttons -->
        <div class="download-buttons q-mt-xl">
          <div class="row justify-center q-col-gutter-md">
            <div class="col-auto relative-position">
              <q-btn disable no-caps flat class="download-btn">
                <svg-google-play-store />
              </q-btn>
              <q-badge
                color="red-3"
                text-color="white"
                label="COMING SOON"
                class="absolute-top-right q-mt-sm q-pl-sm q-pr-sm q-pt-xs q-pb-xs coming-soon-badge"
                rounded
              />
            </div>

            <div class="col-auto relative-position">
              <q-btn disable no-caps flat class="download-btn">
                <svg-app-store />
              </q-btn>
              <q-badge
                color="red-3"
                text-color="white"
                label="COMING SOON"
                class="absolute-top-right q-mt-sm q-pl-sm q-pr-sm q-pt-xs q-pb-xs coming-soon-badge"
                rounded
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SvgGooglePlayStore, SvgAppStore, SvgLogo } from '@/svgs';
</script>

<style lang="scss" scoped>
.hero-section__logo {
  width: 100%;
  max-width: 34.25rem;
}
</style>
