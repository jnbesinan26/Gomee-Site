<template>
  <q-page class="flex flex-center column q-pa-lg">
    <base-container>
      <q-card class="q-py-xl q-px-md text-center">
        <q-card-section>
          <h2 class="text-info q-mb-none">Delete Your Account</h2>
          <p class="q-mb-none">
            To request deletion of your account and all associated data, please submit your request
            by emailing us at
            <a href="mailto:support@gomee.app" class="text-info">support@gomee.app</a>.
          </p>
          <p>Include your account username or email so we can identify your account.</p>
        </q-card-section>
      </q-card>
    </base-container>
  </q-page>
</template>

<script setup lang="ts">
import { BaseContainer } from '@/components';
</script>
