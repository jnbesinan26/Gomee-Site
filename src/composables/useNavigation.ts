import { nextTick, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export interface NavigationSection {
  id: string;
  label: string;
}

export function useNavigation () {
  const router = useRouter();
  const route = useRoute();

  const sections: NavigationSection[] = [
    { id: 'features', label: 'Features' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = async (sectionId: string) => {
    // If not on home page, navigate to home first with hash
    if (route.path !== '/') {
      await router.push(`/#${sectionId}`);
      // Wait for the page to load and then scroll
      await nextTick();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for potential header height
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll directly and update hash quietly
      await nextTick();
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for potential header height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        // Update hash in URL without triggering navigation
        window.history.replaceState(null, '', `/#${sectionId}`);
      }
    }
  };

  const scrollToFeatures = () => scrollToSection('features');
  const scrollToContact = () => scrollToSection('contact');

  // Handle hash navigation on page load and route changes
  const handleHashNavigation = async () => {
    const hash = route.hash;
    if (hash && route.path === '/') {
      const sectionId = hash.replace('#', '');
      if (sections.some(section => section.id === sectionId)) {
        await nextTick();
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  };

  // Watch for route changes to handle hash navigation
  watch(() => route.hash, handleHashNavigation);
  watch(() => route.path, handleHashNavigation);

  // Handle hash on initial load
  onMounted(handleHashNavigation);

  return {
    sections,
    scrollToSection,
    scrollToFeatures,
    scrollToContact,
  };
};
