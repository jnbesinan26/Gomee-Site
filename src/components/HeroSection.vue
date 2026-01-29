<template>
  <section class="hero-section bg-primary text-white">
    <div class="container q-py-xl">
      <div class="text-center">
        <svg-logo :width="$q.screen.lt.sm ? 280 : $q.screen.lt.md ? 400 : 550" height="auto" class="hero-logo" />
        <p class="text-grey-9 q-mt-md hero-subtitle" :class="$q.screen.lt.sm ? 'text-body1' : 'text-h6'">Connecting users and vendors made easy!</p>

        <!-- Download Buttons -->
        <div class="download-buttons q-mt-xl">
          <div class="row justify-center" :class="$q.screen.lt.sm ? 'q-col-gutter-sm' : 'q-col-gutter-md'">
            <div class="col-auto relative-position">
              <q-btn
                disable
                no-caps
                flat
                class="q-mt-xs download-btn"
                :size="$q.screen.lt.sm ? 'md' : 'lg'">
                <svg-google-play-store :style="$q.screen.lt.sm ? 'transform: scale(0.8)' : ''" />
              </q-btn>
              <q-badge
                color="red-3"
                text-color="white"
                :label="$q.screen.lt.sm ? 'SOON' : 'COMING SOON'"
                class="absolute-top-right q-pl-sm q-pr-sm q-pt-xs q-pb-xs coming-soon-badge"
                rounded
              />
            </div>

            <div class="col-auto relative-position">
              <q-btn
                disable
                no-caps
                flat
                class="q-mt-xs download-btn"
                :size="$q.screen.lt.sm ? 'md' : 'lg'">
                <svg-app-store :style="$q.screen.lt.sm ? 'transform: scale(0.8)' : ''" />
              </q-btn>
              <q-badge
                color="red-3"
                text-color="white"
                :label="$q.screen.lt.sm ? 'SOON' : 'COMING SOON'"
                class="absolute-top-right q-pl-sm q-pr-sm q-pt-xs q-pb-xs coming-soon-badge"
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
.hero-section {
  background-color: $primary;
  min-height: 50dvh;

  @media (max-width: 768px) {
    min-height: 60vh;
  }

  @media (max-height: 600px) {
    min-height: 70vh;
  }

  .hero-logo {
    max-width: 100%;
    height: auto;

    @media (max-width: 480px) {
      max-width: 90%;
    }
  }

  .download-buttons {
    @media (max-width: 600px) {
      .row {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  .download-btn {
    @media (max-width: 480px) {
      min-width: auto;
    }
  }

  .coming-soon-badge {
    @media (max-width: 480px) {
      font-size: 0.6rem !important;
      padding: 2px 6px !important;
    }
  }

  .hero-subtitle {
    @media (max-width: 480px) {
      font-size: 0.9rem !important;
      padding: 0 1rem;
    }
  }
}
</style>
