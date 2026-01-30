<template>
  <q-page class="privacy-page" :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-lg'">
    <base-container>
      <div class="text-center q-mb-xl">
        <h1 class="text-weight-bold text-primary q-mb-none">Privacy Policy</h1>
        <small class="text-grey-7">Last updated: January 29, 2026</small>
      </div>

      <legal-section title="Privacy Policy Summary">
        <div class="q-pa-md bg-grey-3 rounded-borders q-mb-md">
          <p class="text-italic">
            Gomee collects account information, messages, location data, and technical information
            to provide navigation, vendor discovery, and messaging features. Your data is protected
            with industry-standard security measures and is not sold to third parties. You can
            control your privacy settings and delete your account at any time.
          </p>
        </div>
      </legal-section>

      <legal-section title="Introduction">
        <p>
          Gomee ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you use our
          Gomee mobile application ("App") and related services. The App connects consumers with
          local vendors through location-based services, messaging, and navigation features.
        </p>
        <p>
          By using our App, you agree to the collection and use of information in accordance with
          this Privacy Policy.
        </p>
      </legal-section>

      <legal-section title="Information We Collect">
        <h4>Personal Information</h4>
        <p>We collect information you provide directly to us:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> Name, email address, and password when you create
            an account
          </li>
          <li>
            <strong>Profile Information:</strong> Profile pictures, account preferences (dark mode,
            vendor mode, public profile settings)
          </li>
          <li>
            <strong>Communication Data:</strong> Messages and image attachments sent through our
            in-app chat system between users and vendors
          </li>
          <li>
            <strong>Business Information:</strong> For vendor accounts - business name, description,
            location coordinates, contact information, operating hours, and business images (banner,
            profile, gallery)
          </li>
          <li>
            <strong>Subscription Information:</strong> Subscription status and entitlements managed
            through Apple App Store and Google Play Store
          </li>
        </ul>

        <h4>Location Information</h4>
        <ul>
          <li>
            <strong>Current Location:</strong> Real-time GPS coordinates to provide navigation, find
            nearby businesses, and enable location-based features
          </li>
          <li>
            <strong>Movement Detection:</strong> Basic movement tracking to update your location
            when you've moved significantly (used to refresh nearby business searches)
          </li>
        </ul>

        <h4>Technical Information</h4>
        <ul>
          <li>
            <strong>Platform Detection:</strong> Basic platform type (iOS, Android, or web) for
            compatibility purposes
          </li>
          <li>
            <strong>Push Notification Tokens:</strong> Device tokens to send you relevant
            notifications about messages and reservations
          </li>
          <li>
            <strong>Error Logs:</strong> Sanitized error information for debugging app issues
            (sensitive information is automatically removed)
          </li>
        </ul>
      </legal-section>

      <legal-section title="How We Use Your Information">
        <p>We use your information for the following purposes:</p>

        <h4>Core App Functionality</h4>
        <ul>
          <li>Provide navigation and location-based services using GPS and Mapbox</li>
          <li>Connect you with nearby vendors and businesses within your location radius</li>
          <li>Enable messaging with image attachments between users and vendors</li>
          <li>Process reservations and bookings with status tracking</li>
          <li>Maintain user accounts, profiles, and vendor business listings</li>
          <li>Provide reviews and ratings system for businesses</li>
          <li>Enable business campaigns and shoutout features</li>
          <li>Manage bookmarks for favorite businesses</li>
          <li>Track user online/offline status for real-time features</li>
        </ul>

        <h4>Communication and Notifications</h4>
        <ul>
          <li>
            Send push notifications about new messages, reservation updates, and review prompts
          </li>
          <li>Provide in-app notifications for various activities and system updates</li>
          <li>Enable real-time messaging and status updates</li>
          <li>Send subscription and app-related notifications</li>
        </ul>

        <h4>Service Improvement and Security</h4>
        <ul>
          <li>Debug and fix app issues using sanitized error reports</li>
          <li>Maintain app security and prevent abuse</li>
          <li>Comply with legal obligations and enforce our Terms of Service</li>
        </ul>
      </legal-section>

      <legal-section title="Information Sharing and Disclosure">
        <p>We may share your information in the following circumstances:</p>

        <h4>With Other Users</h4>
        <ul>
          <li>
            Your profile information (name, profile picture) and messages are visible to vendors you
            communicate with
          </li>
          <li>Your reviews and ratings are publicly visible on business profiles</li>
          <li>
            Vendor business information (name, description, images, location, hours, contact info)
            is publicly visible to help users find services
          </li>
          <li>Reservation information is shared between you and the relevant vendor</li>
        </ul>

        <h4>Service Providers</h4>
        <p>We share information with third-party service providers who help us operate our App:</p>
        <ul>
          <li>
            <strong>Firebase (Google):</strong> User authentication, location data storage, push
            notification tokens, and user online/offline status
          </li>
          <li>
            <strong>Supabase:</strong> Primary database for user accounts, business listings,
            reservations, messages, reviews, and real-time functionality
          </li>
          <li>
            <strong>Mapbox:</strong> Mapping, navigation, geocoding, and location-based services
          </li>
          <li>
            <strong>RevenueCat:</strong> In-app purchase and subscription management (integrates
            with Apple App Store and Google Play Store)
          </li>
          <li>
            <strong>Backblaze B2:</strong> Secure file storage for profile pictures, business
            images, and message attachments
          </li>
        </ul>

        <h4>Legal Requirements</h4>
        <p>
          We may disclose information to comply with legal obligations, enforce our Terms of
          Service, protect our rights, or during mergers and acquisitions. Specifically, we may
          share information:
        </p>
        <ul>
          <li>When required by law, regulation, or legal process</li>
          <li>To protect our rights, property, or safety, or that of our users</li>
          <li>In connection with a merger, acquisition, or sale of assets</li>
        </ul>

        <p>
          <strong>We do not sell your personal information to third parties.</strong>
        </p>
      </legal-section>

      <legal-section title="Location Data">
        <p>
          Our App requires location access to provide core functionality. We collect precise
          location data to:
        </p>
        <ul>
          <li>Show your current position on the map</li>
          <li>Find nearby businesses and vendors</li>
          <li>Provide turn-by-turn navigation</li>
          <li>Enable location-based notifications and recommendations</li>
        </ul>
        <p>
          <strong
            >You can control location permissions in your device settings, but disabling location
            access may limit app functionality.</strong
          >
        </p>
      </legal-section>

      <legal-section title="Data Security and Storage">
        <p>We implement industry-standard security measures to protect your information:</p>
        <ul>
          <li>Data encryption in transit and at rest</li>
          <li>Secure authentication systems</li>
          <li>Regular security audits and monitoring</li>
          <li>Limited access to personal information on a need-to-know basis</li>
          <li>Secure cloud infrastructure with enterprise-grade security</li>
        </ul>
        <p>
          However, no system is 100% secure. We cannot guarantee the absolute security of your
          information.
        </p>
      </legal-section>

      <legal-section title="Data Retention">
        <p>We retain your information for as long as:</p>
        <ul>
          <li>Your account remains active</li>
          <li>Necessary to provide our services</li>
          <li>Required by law or for legitimate business purposes</li>
          <li>To resolve disputes and enforce our agreements</li>
        </ul>
        <p>
          Current location coordinates are stored only as needed for app functionality. We do not
          maintain extensive location history for analytics purposes.
        </p>
      </legal-section>

      <legal-section title="Your Rights and Choices">
        <h4>Account Control</h4>
        <ul>
          <li>Update your profile information (name, profile picture) in app settings</li>
          <li>Toggle between user and vendor modes</li>
          <li>Change display preferences (dark mode, public profile visibility)</li>
          <li>Manage your bookmarks and business listings</li>
          <li>Control subscription settings through your device's app store</li>
        </ul>

        <h4>Location Settings</h4>
        <ul>
          <li>Enable or disable location access in device settings</li>
          <li>Choose between precise and approximate location sharing</li>
          <li>
            App requires location access for core functionality (finding nearby businesses and
            navigation)
          </li>
        </ul>

        <h4>Data Rights (where applicable)</h4>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Delete your personal information</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
        </ul>
      </legal-section>

      <legal-section title="Children's Privacy">
        <p>
          <strong>If you are under 13, please do not use the App.</strong> Our App does not collect
          age information during registration and does not have built-in age verification
          mechanisms. However, we do not knowingly collect personal information from children under
          13 years of age.
        </p>
        <p>
          If we become aware that we have inadvertently collected personal information from a child
          under 13, we will take immediate steps to delete such information from our servers.
          Parents and guardians should monitor their children's use of mobile applications and
          contact us at support@gomee.app if they have any concerns.
        </p>
      </legal-section>

      <legal-section title="International Data Transfers">
        <p>
          Your information may be transferred to and processed in countries other than your country
          of residence. These countries may have different data protection laws. We ensure
          appropriate safeguards are in place to protect your information in accordance with this
          Privacy Policy.
        </p>
      </legal-section>

      <legal-section title="Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material
          changes by posting the new Privacy Policy in the App and updating the "Last updated" date.
          Your continued use of the App after such changes constitutes acceptance of the updated
          Privacy Policy.
        </p>
      </legal-section>

      <legal-section title="Contact Us">
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data
          practices, please contact us at:
        </p>
        <p><strong>Email:</strong> support@gomee.app</p>
        <p>We will respond to your inquiry within 30 days.</p>
      </legal-section>
    </base-container>
  </q-page>
</template>

<script setup lang="ts">
import { BaseContainer, LegalSection } from '@/components';
</script>
