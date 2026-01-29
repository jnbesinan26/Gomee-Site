<template>
  <q-page>
    <hero-section />

    <!-- Features Section -->
    <section ref="featuresRef" class="features-section q-py-xl">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="text-h3 text-weight-bold q-mb-md">Why Choose GOMEE?</h2>
          <p class="text-h6 text-grey-7">Discover the features that make us stand out</p>
        </div>

        <div class="row q-gutter-lg justify-center">
          <div v-for="feature in features" :key="feature.id" class="col-12 col-sm-6 col-md-3">
            <q-card class="feature-card h-100 text-center q-pa-lg">
              <q-card-section>
                <q-icon :name="feature.icon" size="60px" :color="feature.color" class="q-mb-md" />
                <h3 class="text-h5 text-weight-bold q-mb-md">
                  {{ feature.title }}
                </h3>
                <p class="text-body1 text-grey-7">
                  {{ feature.description }}
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section ref="contactRef" class="contact-section bg-grey-1 q-py-xl">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="text-h3 text-weight-bold q-mb-md">Get in Touch</h2>
          <p class="text-h6 text-grey-7">
            Ready to start your journey with us? We'd love to hear from you.
          </p>
        </div>

        <div class="row justify-center">
          <div class="col-12 col-md-8 col-lg-6">
            <q-card class="q-pa-lg">
              <q-form @submit="submitForm" class="q-gutter-md">
                <div class="row q-gutter-md">
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model="form.firstName"
                      label="First Name *"
                      filled
                      :rules="[(val) => !!val || 'First name is required']"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model="form.lastName"
                      label="Last Name *"
                      filled
                      :rules="[(val) => !!val || 'Last name is required']"
                    />
                  </div>
                </div>

                <q-input
                  v-model="form.email"
                  label="Email *"
                  type="email"
                  filled
                  :rules="[
                    (val) => !!val || 'Email is required',
                    (val) => /.+@.+\..+/.test(val) || 'Please enter a valid email',
                  ]"
                />

                <q-input
                  v-model="form.subject"
                  label="Subject *"
                  filled
                  :rules="[(val) => !!val || 'Subject is required']"
                />

                <q-input
                  v-model="form.message"
                  label="Message *"
                  type="textarea"
                  rows="4"
                  filled
                  :rules="[(val) => !!val || 'Message is required']"
                />

                <div class="text-center q-mt-lg">
                  <q-btn
                    type="submit"
                    color="primary"
                    size="lg"
                    label="Send Message"
                    :loading="isSubmitting"
                    no-caps
                  />
                </div>
              </q-form>
            </q-card>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="row q-mt-xl justify-center">
          <div class="col-12 col-md-6 text-center">
            <q-icon name="email" size="40px" color="primary" class="q-mb-md" />
            <h4 class="text-h6 text-weight-bold q-mb-sm">Email</h4>
            <p class="text-body1">hello@gomee.com</p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { HeroSection } from '@/components';

const $q = useQuasar();

// Refs for scrolling
const featuresRef = ref<HTMLElement>();
const contactRef = ref<HTMLElement>();

// Features data
const features = ref([
  {
    id: 1,
    icon: 'speed',
    color: 'primary',
    title: 'Fast & Reliable',
    description: 'Lightning-fast performance with 99.9% uptime guarantee for all your needs.',
  },
  {
    id: 2,
    icon: 'security',
    color: 'green',
    title: 'Secure',
    description: 'Enterprise-grade security with end-to-end encryption to protect your data.',
  },
  {
    id: 3,
    icon: 'support_agent',
    color: 'orange',
    title: '24/7 Support',
    description: 'Round-the-clock customer support to help you whenever you need assistance.',
  },
  {
    id: 4,
    icon: 'trending_up',
    color: 'purple',
    title: 'Scalable',
    description: 'Grows with your business - from startup to enterprise, we scale with you.',
  },
]);

// Contact form
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    $q.notify({
      type: 'positive',
      message: 'Thank you! Your message has been sent successfully.',
      position: 'top',
    });

    // Reset form
    Object.keys(form.value).forEach((key) => {
      form.value[key as keyof typeof form.value] = '';
    });
  } catch {
    $q.notify({
      type: 'negative',
      message: 'Sorry, there was an error sending your message. Please try again.',
      position: 'top',
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  min-height: 50vh;
  display: flex;
  align-items: center;
}

.feature-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.h-100 {
  height: 100%;
}

.download-buttons {
  margin-top: 2rem;
}

.download-btn {
  position: relative;
  min-width: 160px;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.6;
  cursor: not-allowed;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.download-btn:hover {
  opacity: 0.7;
}

.google-play {
  background: linear-gradient(135deg, #4caf50, #2e7d32);
}

.app-store {
  background: linear-gradient(135deg, #000000, #424242);
}

.download-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-left: 8px;
}

.download-main {
  font-size: 12px;
  line-height: 1;
  opacity: 0.8;
}

.download-store {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 2px;
}

.coming-soon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 193, 7, 0.7);
  color: #000;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
