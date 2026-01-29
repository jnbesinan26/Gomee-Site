<template>
  <section id="features" class="feature-section">
    <base-container>
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="text-weight-bold q-mb-md text-primary section-title" :class="$q.screen.lt.sm ? 'text-h5' : 'text-h4'">Why Choose Gomee?</h2>
          <p class="text-grey-7 section-description" :class="$q.screen.lt.sm ? 'text-body2' : 'text-body1'">
            Connect with your community and support local businesses
          </p>
        </div>

        <div class="row" :class="$q.screen.lt.sm ? 'q-col-gutter-md' : 'q-col-gutter-xl'">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="col-12 col-sm-6 col-md-6 col-lg-3"
          >
            <q-card class="feature-card full-height">
              <q-card-section class="text-center">
                <q-icon
                  :name="feature.icon"
                  :size="$q.screen.lt.sm ? '2.5rem' : '3rem'"
                  class="text-primary q-mb-md feature-icon"
                />
                <h3 class="text-h6 text-weight-bold q-mb-sm">
                  {{ feature.title }}
                </h3>
                <p class="text-body2 text-grey-7 q-ma-none">
                  {{ feature.description }}
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- For Store Owners Section -->
        <div class="store-owners-section q-mt-xl q-pt-xl">
          <div class="text-center q-mb-lg">
            <div class="text-weight-bold q-mb-md text-primary store-owners-title" :class="$q.screen.lt.sm ? 'text-h6' : 'text-h5'">For Store Owners</div>
            <p class="text-grey-7 store-owners-description" :class="$q.screen.lt.sm ? 'text-body2' : 'text-body1'">
              Powerful tools to grow your local business
            </p>
          </div>

          <div class="row">
            <div class="col-12 col-sm-6 col-md-6">
              <q-list>
                <q-item v-for="benefit in storeBenefits.slice(0, 3)" :key="benefit">
                  <q-item-section avatar>
                    <q-icon name="check_circle" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-body1">{{ benefit }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col-12 col-sm-6 col-md-6">
              <q-list>
                <q-item v-for="benefit in storeBenefits.slice(3)" :key="benefit">
                  <q-item-section avatar>
                    <q-icon name="check_circle" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-body1">{{ benefit }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script setup lang="ts">
import { BaseContainer } from '@/components';

const features = [
  {
    icon: 'eva-map-outline',
    title: 'Discover Local Stores',
    description: 'Find nearby businesses and explore what your community has to offer with our intelligent map system.',
  },
  {
    icon: 'eva-message-circle-outline',
    title: 'Connect & Communicate',
    description: 'Chat directly with store owners in real-time and build meaningful relationships with local vendors.',
  },
  {
    icon: 'eva-calendar-outline',
    title: 'Make Reservations',
    description: 'Book appointments and reserve services with just a few taps. No more waiting in lines.',
  },
  {
    icon: 'eva-heart-outline',
    title: 'Support Local Business',
    description: 'Help local entrepreneurs grow their businesses and strengthen your community economy.',
  },
];

const storeBenefits = [
  'Showcase your store to nearby customers',
  'Manage customer reservations and appointments',
  'Communicate directly with your customers',
  'Build a loyal local customer base',
  'Promote special offers and events',
  'Access detailed analytics and insights',
];
</script>

<style lang="scss" scoped>
.feature-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }

  .section-title {
    @media (max-width: 480px) {
      font-size: 1.5rem !important;
      line-height: 1.3 !important;
    }
  }

  .section-description {
    @media (max-width: 480px) {
      font-size: 0.9rem !important;
      padding: 0 1rem;
    }
  }

  .feature-card {
    border: none;
    border-radius: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }

    @media (min-width: 1024px) {
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      }
    }

    .q-card-section {
      @media (max-width: 480px) {
        padding: 1rem;
      }
    }

    h3 {
      @media (max-width: 480px) {
        font-size: 1.1rem !important;
      }
    }

    p {
      @media (max-width: 480px) {
        font-size: 0.85rem !important;
      }
    }
  }

  .feature-icon {
    @media (max-width: 480px) {
      font-size: 2rem !important;
    }
  }

  .store-owners-section {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.08);

    @media (max-width: 768px) {
      margin-top: 2rem;
      padding: 1.5rem;
    }

    @media (max-width: 480px) {
      margin-top: 1.5rem;
      padding: 1rem;
      border-radius: 0.5rem;
    }

    .store-owners-title {
      @media (max-width: 480px) {
        font-size: 1.25rem !important;
      }
    }

    .store-owners-description {
      @media (max-width: 480px) {
        font-size: 0.9rem !important;
        padding: 0 0.5rem;
      }
    }

    .q-item {
      padding-left: 0;
      margin-bottom: 0.5rem;

      @media (max-width: 600px) {
        margin-bottom: 0.75rem;
      }

      .q-item-label {
        @media (max-width: 480px) {
          font-size: 0.9rem !important;
        }
      }
    }

    @media (max-width: 600px) {
      .row > div:first-child {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
