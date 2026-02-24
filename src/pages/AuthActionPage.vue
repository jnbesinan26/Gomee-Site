<template>
  <q-page class="flex flex-center column q-pa-lg">
    <q-card style="max-width: 400px; width: 100%">
      <q-card-section>
        <div class="text-h6 text-center">
          {{ title }}
        </div>
      </q-card-section>

      <q-card-section>
        <!-- Loading -->
        <div v-if="loading" class="text-center">
          <q-spinner size="40px" />
        </div>

        <!-- Email Verified -->
        <div v-else-if="mode === 'verifyEmail' && success">
          <q-banner class="bg-positive text-white"> Email successfully verified 🎉 </q-banner>
        </div>

        <!-- Password Reset -->
        <div v-else-if="mode === 'resetPassword' && validCode">
          <q-input
            v-model="newPassword"
            label="New Password"
            type="password"
            outlined
            class="q-mb-md"
          />

          <q-btn
            label="Reset Password"
            color="primary"
            class="full-width"
            @click="handlePasswordReset"
          />
        </div>

        <!-- Success Reset -->
        <div v-else-if="mode === 'resetPassword' && success">
          <q-banner class="bg-positive text-white"> Password successfully reset 🎉 </q-banner>
        </div>

        <!-- Error -->
        <div v-else-if="errorMessage">
          <q-banner class="bg-negative text-white">
            {{ errorMessage }}
          </q-banner>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  getAuth,
  applyActionCode,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from 'firebase/auth';

const route = useRoute();
const auth = getAuth();

const loading = ref(true);
const success = ref(false);
const validCode = ref(false);
const errorMessage = ref('');
const newPassword = ref('');

const mode = route.query.mode as string | undefined;
const oobCode = route.query.oobCode as string | undefined;

const title = ref('Processing...');

onMounted(async () => {
  if (!mode || !oobCode) {
    errorMessage.value = 'Invalid action link.';
    loading.value = false;
    return;
  }

  try {
    if (mode === 'verifyEmail') {
      title.value = 'Verifying Email...';
      await applyActionCode(auth, oobCode);
      success.value = true;
    }

    if (mode === 'resetPassword') {
      title.value = 'Reset Your Password';
      await verifyPasswordResetCode(auth, oobCode);
      validCode.value = true;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage.value = error.message;
    } else {
      errorMessage.value = 'Something went wrong.';
    }
  } finally {
    loading.value = false;
  }
});

const handlePasswordReset = async () => {
  if (!oobCode) return;

  try {
    loading.value = true;
    await confirmPasswordReset(auth, oobCode, newPassword.value);
    success.value = true;
    validCode.value = false;
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage.value = error.message;
    } else {
      errorMessage.value = 'Failed to reset password.';
    }
  } finally {
    loading.value = false;
  }
};
</script>
