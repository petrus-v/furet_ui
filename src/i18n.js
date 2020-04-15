import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18nConf = {
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      error: 'Error',
      components: {
        spaces: {
            title: 'Space menus',
            search: 'Filter ...',
        },
        login: {
          appbar: 'Log in',
          button: 'Log in',
        },
        logout: {
          appbar: {
            administrator: 'Administrator',
            logout: 'Log out',
            about: 'About ...',
          },
          button: 'Log out',
        },
        header: {
          search: 'Search',
          new: 'New',
          edit: 'Edit',
          cancel: 'Cancel',
          save: 'Save',
          delete: 'Delete',
          notFound: 'No result found',
          return: 'Return',
          previous: 'Previous',
          next: 'Next',
          browse: 'Browse',
        },
        fields: {
          yesno: {
            yes: 'Yes',
            no: 'No',
          },
        },
      },
    },
  },
};

export const i18n = new VueI18n(i18nConf);
