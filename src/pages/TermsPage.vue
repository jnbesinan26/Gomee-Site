<template>
  <q-page class="terms-page" :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-lg'">
    <base-container>
      <div class="text-center q-mb-xl">
        <h1 class="text-weight-bold text-primary page-title" :class="$q.screen.lt.sm ? 'text-h4' : 'text-h3'">Terms of Service</h1>
        <p class="text-grey-7 page-subtitle" :class="$q.screen.lt.sm ? 'text-body2' : 'text-body1'">Last updated: January 29, 2026</p>
      </div>

      <legal-section title="Terms of Service Summary">
        <div class="q-pa-md bg-grey-3 rounded-borders q-mb-md q-ml-md q-mr-md">
          <p class="text-body1 text-weight-medium text-italic">
            These Terms of Service govern your use of GOMEE. By creating an account and using the App, you agree to follow these rules, respect other users, and abide by applicable laws. Vendors agree to provide accurate business information and honor reservations. Subscription and payment terms are handled via the App Store or Google Play Store.
          </p>
        </div>
      </legal-section>

      <legal-section title="Acceptance of Terms">
        <p class="text-body1">
          By accessing or using GOMEE ("App"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. These Terms govern your use of the GOMEE mobile application and related services provided by GOMEE ("we," "our," or "us"). If you do not agree to these Terms, please do not use our App.
        </p>
      </legal-section>

      <legal-section title="Description of Service">
        <p class="text-body1 q-mb-md">
          GOMEE is a location-based platform that connects users with nearby vendors and businesses. Our App provides the following features:
        </p>
        <ul class="text-body1">
          <li>Discover and navigate to local businesses using GPS and mapping services</li>
          <li>Make reservations and bookings with vendors</li>
          <li>Communicate with vendors through in-app messaging</li>
          <li>View business information, images, and reviews</li>
          <li>Leave reviews and ratings for businesses</li>
          <li>Bookmark favorite businesses</li>
          <li>For vendors: create business profiles, manage reservations, and promote services</li>
        </ul>
      </legal-section>

      <legal-section title="User Accounts and Eligibility">
        <p class="text-body1 q-mb-md">
          <strong>Age Requirement:</strong> If you are under 13, please do not use our App. Our App does not collect age information during registration, and we do not knowingly collect information from children under 13. We encourage parents to monitor their children's use of mobile applications.
        </p>
        <p class="text-body1 q-mb-md">When you create an account, you agree to:</p>
        <ul class="text-body1">
          <li>Provide accurate, complete, and current information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Accept responsibility for all activities under your account</li>
          <li>Notify us immediately of any unauthorized account access</li>
          <li>Keep your account information updated</li>
        </ul>
      </legal-section>

      <legal-section title="Acceptable Use">
        <p class="text-body1 q-mb-md">You agree not to:</p>
        <ul class="text-body1">
          <li>Use the App for any unlawful purpose or in violation of any laws</li>
          <li>Post false, misleading, or inappropriate content</li>
          <li>Harass, abuse, or harm other users or vendors</li>
          <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
          <li>Use automated systems, bots, or scripts to access the App</li>
          <li>Interfere with the proper functioning of the App</li>
          <li>Impersonate any person or entity</li>
          <li>Violate the intellectual property rights of others</li>
          <li>Submit spam, malicious code, or harmful content</li>
        </ul>
      </legal-section>

      <legal-section title="Vendor Responsibilities">
        <p class="text-body1 q-mb-md">If you operate as a vendor using GOMEE, you additionally agree to:</p>
        <ul class="text-body1">
          <li>Provide accurate business information, hours, and contact details</li>
          <li>Honor reservations made through the platform</li>
          <li>Respond to customer messages in a timely and professional manner</li>
          <li>Maintain appropriate licenses and permits for your business</li>
          <li>Comply with all applicable business laws and regulations</li>
          <li>Not misrepresent your services or qualifications</li>
        </ul>
      </legal-section>

      <legal-section title="Location Services and Privacy">
        <p class="text-body1">
          Our App requires location access to provide core functionality including finding nearby businesses and navigation. Your location data usage is governed by our Privacy Policy. You can control location permissions in your device settings, but disabling location access may limit app functionality.
        </p>
      </legal-section>

      <legal-section title="Subscriptions and Payments">
        <p class="text-body1 q-mb-md">Some features may require a subscription or payment:</p>
        <ul class="text-body1">
          <li>Subscriptions are managed through Apple App Store or Google Play Store</li>
          <li>Subscription terms and pricing are displayed at the time of purchase</li>
          <li>You are responsible for managing your subscription through your device's app store</li>
          <li>Refunds are subject to the app store's refund policies - please refer to Apple App Store or Google Play Store refund policies for details</li>
          <li>Subscription renewals and cancellations are handled directly by the app store</li>
        </ul>
      </legal-section>

      <legal-section title="Content and Intellectual Property">
        <p class="text-body1 q-mb-md">You retain ownership of content you submit to our App, but grant us a license to use it for providing our services. You represent that:</p>
        <ul class="text-body1">
          <li>You own or have permission to use any content you submit</li>
          <li>Your content does not violate any third-party rights</li>
          <li>Your content complies with these Terms and applicable laws</li>
        </ul>
        <p class="text-body1 q-mt-md">
          The App and its original content, features, and functionality are owned by GOMEE and are protected by copyright, trademark, and other intellectual property laws.
        </p>
      </legal-section>

      <legal-section title="Service Availability and Modifications">
        <p class="text-body1">
          We reserve the right to modify, suspend, or discontinue any part of our App at any time without notice. We do not guarantee that our App will be available at all times or function without interruption. We may also update these Terms from time to time, and your continued use constitutes acceptance of any changes.
        </p>
      </legal-section>

      <legal-section title="Account Termination">
        <p class="text-body1">
          We may suspend or terminate your account at any time for violation of these Terms or for any other reason. You may delete your account at any time through the App settings. Upon termination, your right to use the App will cease immediately.
        </p>
      </legal-section>

      <legal-section title="Disclaimers and Limitation of Liability">
        <p class="text-body1 q-mb-md">
          Our App is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.
        </p>
        <p class="text-body1">
          To the maximum extent permitted by law, GOMEE shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or revenues arising from your use of the App.
        </p>
      </legal-section>

      <legal-section title="Governing Law and Dispute Resolution">
        <p class="text-body1 q-mb-md">
          These Terms are governed by the laws of Philippines, without regard to conflict of law provisions.
        </p>
        <p class="text-body1 q-mb-md">
          <strong>Informal Dispute Resolution:</strong> Before pursuing formal legal action, we encourage you to contact our support team at support@gomee.app to resolve any disputes. Most concerns can be resolved quickly through direct communication.
        </p>
        <p class="text-body1">
          If informal resolution is unsuccessful, any disputes will be resolved according to the laws of the governing jurisdiction specified above.
        </p>
      </legal-section>

      <legal-section title="Contact Information">
        <p class="text-body1 q-mb-md">
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <div class="q-mt-md">
          <p class="text-body1"><strong>Email:</strong> support@gomee.app</p>
        </div>
        <p class="text-body1 q-mt-md">
          We will respond to your inquiry within a reasonable time frame.
        </p>
      </legal-section>
    </base-container>
  </q-page>
</template>

<script setup lang="ts">
import { BaseContainer, LegalSection } from '@/components';
</script>

<style lang="scss" scoped>
.terms-page {
  @media (max-width: 768px) {
    padding: 1rem !important;
  }

  @media (max-width: 480px) {
    padding: 0.75rem !important;
  }

  .page-title {
    @media (max-width: 480px) {
      font-size: 1.75rem !important;
      line-height: 1.3 !important;
    }
  }

  .page-subtitle {
    @media (max-width: 480px) {
      font-size: 0.85rem !important;
    }
  }

  :deep(.legal-section) {
    .q-pa-md {
      @media (max-width: 768px) {
        padding: 0.75rem !important;
      }

      @media (max-width: 480px) {
        padding: 0.5rem !important;
      }
    }

    .q-ml-md, .q-mr-md {
      @media (max-width: 768px) {
        margin-left: 0.5rem !important;
        margin-right: 0.5rem !important;
      }

      @media (max-width: 480px) {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }

    h3, h4, h5, h6 {
      @media (max-width: 480px) {
        font-size: 1.1rem !important;
        line-height: 1.3 !important;
      }
    }

    .text-body1 {
      @media (max-width: 768px) {
        font-size: 0.95rem !important;
        line-height: 1.5 !important;
      }

      @media (max-width: 480px) {
        font-size: 0.9rem !important;
        line-height: 1.6 !important;
      }
    }

    ul, ol {
      @media (max-width: 768px) {
        padding-left: 1.5rem;
      }

      @media (max-width: 480px) {
        padding-left: 1rem;
      }

      li {
        @media (max-width: 768px) {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 480px) {
          font-size: 0.9rem !important;
          line-height: 1.6 !important;
        }
      }
    }

    strong {
      @media (max-width: 480px) {
        font-size: inherit;
      }
    }

    p {
      @media (max-width: 768px) {
        margin-bottom: 1rem;
      }

      @media (max-width: 480px) {
        margin-bottom: 0.75rem;
      }
    }
  }
}
</style>
