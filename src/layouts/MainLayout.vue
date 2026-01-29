<template>
  <q-layout view="hHh lpR fff">
    <!-- Header -->
    <q-header class="bg-white text-dark" elevated>
      <q-toolbar class="container">
        <q-toolbar-title class="row items-center">
          <svg-logo-2
            :width="$q.screen.lt.sm ? 100 : $q.screen.lt.md ? 115 : 130"
            :height="$q.screen.lt.sm ? 38 : $q.screen.lt.md ? 44 : 50"
            class="text-primary header-logo"
          />
        </q-toolbar-title>

        <!-- Desktop Navigation -->
        <div class="gt-sm desktop-nav">
          <q-btn flat no-caps color="grey-9" label="Home" @click="scrollToTop" class="nav-btn text-weight-bold" />
          <q-btn flat no-caps color="grey-9" label="Features" @click="scrollToFeatures" class="nav-btn text-weight-bold" />
          <q-btn flat no-caps color="grey-9" label="Contact" @click="scrollToContact" class="nav-btn text-weight-bold" />
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
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <base-footer />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { SvgLogo2 } from '@/svgs';
import { BaseFooter } from '@/components';

const router = useRouter();
const route = useRoute();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const scrollToTop = async () => {
  // Small delay to ensure drawer closes first if called from mobile
  await new Promise(resolve => setTimeout(resolve, 150));
  // Navigate to home and clear any hash
  await router.push('/');
  // Wait for navigation to complete, then scroll
  await nextTick();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToSection = async (sectionId: string) => {
  console.log('scrollToSection called with:', sectionId);
  console.log('Current route path:', route.path);

  // If not on home page, navigate to home first with hash
  if (route.path !== '/') {
    console.log('Not on home page, navigating to home with hash');
    await router.push(`/#${sectionId}`);
    // Wait for the page to load and then scroll
    await nextTick();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      console.log('Element found after navigation:', element);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Element not found:', sectionId);
      }
    }, 100);
  } else {
    // Already on home page, just scroll directly and update hash quietly
    console.log('Already on home page, scrolling directly');
    await nextTick();
    const element = document.getElementById(sectionId);
    console.log('Element found on home page:', element);
    if (element) {
      console.log('Scrolling to element');
      element.scrollIntoView({ behavior: 'smooth' });
      // Update hash in URL without triggering navigation
      window.history.replaceState(null, '', `/#${sectionId}`);
    } else {
      console.error('Element not found:', sectionId);
    }
  }
};

const scrollToFeatures = async () => {
  console.log('scrollToFeatures called');
  // Small delay to ensure drawer closes first
  await new Promise(resolve => setTimeout(resolve, 300));

  // Direct approach - try to find and scroll to features section
  const featuresElement = document.getElementById('features') || document.querySelector('#features');
  console.log('Features element found:', featuresElement);

  if (featuresElement) {
    featuresElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // Fallback to original method
    await scrollToSection('features');
  }
};

const scrollToContact = async () => {
  // Small delay to ensure drawer closes first
  await new Promise(resolve => setTimeout(resolve, 150));
  scrollToSection('contact');
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
}

.q-toolbar {
  min-height: 64px;

  @media (max-width: 768px) {
    min-height: 56px;
  }

  @media (max-width: 480px) {
    min-height: 48px;
  }
}

.header-logo {
  max-width: 100%;
  height: auto;

  @media (max-width: 480px) {
    max-width: 90px;
    height: auto;
  }
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    gap: 0.25rem;
  }
}

.nav-btn {
  @media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.6rem;
  }
}

.q-drawer {
  .q-list {
    padding: 1rem;

    @media (max-width: 480px) {
      padding: 0.75rem;
    }
  }

  .q-item {
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;

    @media (max-width: 480px) {
      min-height: 44px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }

  .q-item-label {
    font-weight: 500;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
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
