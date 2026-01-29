<template>
  <q-footer id="contact" class="base-footer bg-primary text-white" elevated>
    <base-container>
      <div class="container q-py-md">
        <div class="footer-content" :class="$q.screen.lt.md ? 'mobile-layout' : 'desktop-layout'">
          <div class="copyright text-grey-9" :class="$q.screen.lt.md ? 'text-center q-mb-md' : ''">
            <strong>© 2026 Gomee</strong>
          </div>

          <div class="footer-links" :class="$q.screen.lt.md ? 'mobile-links' : 'desktop-links'">
            <q-btn
              :label="$q.screen.lt.sm ? 'Email' : 'support@gomee.app'"
              icon="email"
              color="grey-9"
              href="mailto:support@gomee.app"
              no-caps
              flat
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
              class="footer-btn"
            />
            <q-btn
              flat
              dense
              no-caps
              text-color="grey-9"
              to="/privacy-policy"
              label="Privacy Policy"
              class="text-weight-bold footer-btn"
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
            />
            <q-btn
              flat
              dense
              no-caps
              text-color="grey-9"
              to="/terms"
              label="Terms of Service"
              class="text-weight-bold footer-btn"
              :size="$q.screen.lt.sm ? 'sm' : 'md'"
            />
          </div>
        </div>
      </div>
    </base-container>
  </q-footer>
</template>

<script setup lang="ts">
import { BaseContainer } from '@/components';
</script>

<style lang="scss" scoped>

.base-footer {
  .footer-content {
    &.desktop-layout {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &.mobile-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .footer-links {
    &.desktop-links {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &.mobile-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      width: 100%;

      @media (min-width: 480px) and (max-width: 1023px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
    }
  }

  .footer-btn {
    @media (max-width: 479px) {
      min-width: auto;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }

    @media (min-width: 480px) and (max-width: 1023px) {
      min-width: auto;
      font-size: 0.875rem;
    }
  }

  .copyright {
    @media (max-width: 479px) {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 479px) {
    .container {
      padding: 0.75rem 1rem;
    }
  }
}
</style>
