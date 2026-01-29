<template>
  <section class="hero-section bg-primary text-white">
    <div class="container q-py-xl">
      <div class="text-center">
        <svg-logo width="550" height="auto" />
        <p class="text-grey-9 text-h6 q-mt-md">Connecting users and vendors made easy!</p>

        <!-- Download Buttons -->
        <div class="download-buttons q-mt-xl">
          <div class="row justify-center">
            <div class="col-auto relative-position">
              <q-btn
                disable
                no-caps
                flat
                class="q-mt-xs"
                size="lg">
                <svg-google-play-store />
              </q-btn>
              <q-badge color="red-3" text-color="white" label="COMING SOON" class="absolute-top-right q-pl-sm q-pr-sm q-pt-xs q-pb-xs" rounded />
            </div>

            <div class="col-auto relative-position">
              <q-btn
                disable
                no-caps
                flat
                class="q-mt-xs"
                size="lg">
                <svg-app-store />
              </q-btn>
              <q-badge color="red-3" text-color="white" label="COMING SOON" class="absolute-top-right q-pl-sm q-pr-sm q-pt-xs q-pb-xs" rounded />
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
.hero-section {
  background-color: $primary;
  height: 50dvh;

  &__coming-soon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 193, 7, 0.7);
    color: #000;
    padding: 4px 8px;
  }
}
</style>
