import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'privacy-policy', component: () => import('pages/PrivacyPage.vue') },
      { path: 'terms', component: () => import('pages/TermsPage.vue') },
      { path: 'auth/action', component: () => import('pages/AuthActionPage.vue') },
      { path: 'data-deletion', component: () => import('pages/DataDeletionPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
