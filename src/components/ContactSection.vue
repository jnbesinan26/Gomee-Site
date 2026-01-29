<template>
  <section id="contact" class="contact-section bg-grey-3">
    <base-container class="q-pt-xl q-pb-xl">
      <div class="text-center q-mb-xl">
        <div class="text-h4 text-weight-bold q-mb-md contact-title">Contact Us</div>
        <p class="text-grey-7 text-body1 contact-description">We're here to help you with any questions or concerns you may have.</p>
      </div>

      <q-form class="contact-section__form" @submit.prevent="submitForm">
        <q-input
          v-model="name"
          label="Name"
          rounded
          outlined
          :rules="[val => !!val || 'Name is required']"
          lazy-rules
        />
        <q-input
          v-model="email"
          label="Email"
          type="email"
          rounded
          outlined
          :rules="[
            val => !!val || 'Email is required',
            val => validateEmail(val) || 'Please enter a valid email address'
          ]"
          lazy-rules
        />
        <q-input
          v-model="subject"
          label="Subject"
          rounded
          outlined
          :rules="[val => !!val || 'Subject is required']"
          lazy-rules
        />
        <q-input
          v-model="message"
          label="Message"
          type="textarea"
          :rows="$q.screen.lt.md ? 4 : 6"
          rounded
          outlined
          :rules="[
            val => !!val || 'Message is required',
            val => val.length >= 10 || 'Message must be at least 10 characters long'
          ]"
          lazy-rules
        />
        <q-btn
          :label="isSubmitting ? 'Sending...' : 'Submit'"
          type="submit"
          color="primary"
          size="lg"
          class="full-width"
          rounded
          no-caps
          :loading="isSubmitting"
          :disable="isSubmitting"
        />
      </q-form>
    </base-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { BaseContainer } from '@/components';

const $q = useQuasar();

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const isSubmitting = ref(false);

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const resetForm = () => {
  name.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
};

const submitForm = async () => {
  // Basic validation
  if (!name.value.trim()) {
    $q.notify({
      type: 'negative',
      message: 'Please enter your name',
      position: 'top'
    });
    return;
  }

  if (!email.value.trim()) {
    $q.notify({
      type: 'negative',
      message: 'Please enter your email',
      position: 'top'
    });
    return;
  }

  if (!validateEmail(email.value)) {
    $q.notify({
      type: 'negative',
      message: 'Please enter a valid email address',
      position: 'top'
    });
    return;
  }

  if (!subject.value.trim()) {
    $q.notify({
      type: 'negative',
      message: 'Please enter a subject',
      position: 'top'
    });
    return;
  }

  if (!message.value.trim()) {
    $q.notify({
      type: 'negative',
      message: 'Please enter your message',
      position: 'top'
    });
    return;
  }

  if (message.value.trim().length < 10) {
    $q.notify({
      type: 'negative',
      message: 'Message must be at least 10 characters long',
      position: 'top'
    });
    return;
  }

  isSubmitting.value = true;

  try {
    // Prepare form data
    const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      subject: subject.value.trim(),
      message: message.value.trim(),
      timestamp: new Date().toISOString()
    };

    // TODO: Replace this with your actual form submission logic
    // Examples:
    // - Send to an API endpoint
    // - Use a service like EmailJS, Netlify Forms, or Formspree
    // - Send to your backend server

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // For now, just log the data (replace with actual submission)
    console.log('Form submitted:', formData);

    // Show success message
    $q.notify({
      type: 'positive',
      message: 'Message sent successfully! We\'ll get back to you soon.',
      position: 'top',
      timeout: 5000
    });

    // Reset form
    resetForm();

  } catch (error) {
    console.error('Form submission error:', error);
    $q.notify({
      type: 'negative',
      message: 'Failed to send message. Please try again later.',
      position: 'top'
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style lang="scss" scoped>
.contact-section {
  .contact-title {
    @media (max-width: 768px) {
      font-size: 1.75rem !important;
      line-height: 1.3 !important;
    }
  }

  .contact-description {
    @media (max-width: 768px) {
      font-size: 0.95rem !important;
      padding: 0 1rem;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    max-width: 600px;
    padding: 0 1rem;

    @media (max-width: 768px) {
      gap: 0.75rem;
      padding: 0 0.5rem;
    }

    .q-btn {
      @media (max-width: 768px) {
        min-height: 48px; // Ensure touch-friendly size
      }
    }

    .q-input {
      :deep(.q-field__control) {
        @media (max-width: 768px) {
          min-height: 48px; // Touch-friendly input height
        }
      }
    }
  }
}
</style>
