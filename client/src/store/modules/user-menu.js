/*
This file is a part of the FuretUI project

   Copyright (C) 2017 Jean-Sebastien SUZANNE <jssuzanne@anybox.fr>

This Source Code Form is subject to the terms of the Mozilla Public License,
v. 2.0. If a copy of the MPL was not distributed with this file,You can
obtain one at http://mozilla.org/MPL/2.0/.
*/

export const defaultState = {
  menus: [
    {
      name: 'login',
      component: 'furet-ui-appb-user-menu-login',
    },
  ],
};

// getters
export const getters = {
};

// actions
export const actions = {
};

// mutations
export const mutations = {
  UPDATE_RIGHT_MENU(state, action) {
    if (action.value) state.value = action.value;
    if (action.values) state.values = action.values;
  },
  CLEAR_RIGHT_MENU(state) {
    state.value = { label: '', image: { type: '', value: '' } };
    state.values = [];
  },
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
