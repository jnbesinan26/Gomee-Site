<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header class="bg-white text-dark" elevated>
      <q-toolbar class="container">
        <q-toolbar-title class="row items-center">
          <svg-logo-2 width="130" height="50" class="text-primary" />
        </q-toolbar-title>

        <!-- Desktop Navigation -->
        <div class="gt-sm">
          <q-btn flat no-caps label="Home" @click="scrollToTop" class="q-mr-sm" />
          <q-btn flat no-caps label="Features" @click="scrollToFeatures" class="q-mr-sm" />
          <q-btn flat no-caps label="Contact" @click="scrollToContact" class="q-mr-md" />
          <q-btn color="primary" label="Get Started" rounded no-caps @click="scrollToContact" />
        </div>

        <!-- Mobile Menu Button -->
        <q-btn flat dense round icon="menu" class="lt-md" @click="toggleMobileMenu" />
      </q-toolbar>
    </q-header>

    <!-- Mobile Menu -->
    <q-drawer v-model="mobileMenuOpen" side="right" overlay behavior="mobile" class="lt-md">
      <q-list padding>
        <q-item clickable v-close-popup @click="scrollToTop">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="scrollToFeatures">
          <q-item-section>
            <q-item-label>Features</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="scrollToContact">
          <q-item-section>
            <q-item-label>Contact</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator class="q-my-md" />
        <q-item clickable v-close-popup @click="scrollToContact">
          <q-item-section>
            <q-item-label class="text-primary text-weight-bold">Get Started</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <footer class="footer-section bg-dark text-white">
      <div class="container q-py-md">
        <div class="row items-center justify-between">
          <div class="text-body2 text-grey-4">© 2024 GOMEE</div>
          <div class="q-gutter-lg">
            <router-link
              to="/privacy-policy"
              class="text-grey-4 text-decoration-none text-body2 footer-link"
            >
              Privacy Policy
            </router-link>
            <router-link
              to="/terms"
              class="text-grey-4 text-decoration-none text-body2 footer-link"
            >
              Terms
            </router-link>
            <a
              href="#"
              class="text-grey-4 text-decoration-none text-body2 footer-link"
              @click="scrollToContact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SvgLogo2 } from '@/svgs';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToFeatures = () => {
  const element = document.querySelector('.features-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToContact = () => {
  const element = document.querySelector('.contact-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.q-toolbar {
  min-height: 64px;
}

.footer-section {
  position: relative;
  width: 100%;
}

.footer-section .container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-link:hover {
  color: white !important;
  transition: color 0.2s ease;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .footer-section .row {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-section .q-gutter-lg {
    gap: 20px;
  }
}
</style>
