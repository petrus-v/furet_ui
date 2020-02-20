/*
This file is a part of the FuretUI project

   Copyright (C) 2017 Jean-Sebastien SUZANNE <jssuzanne@anybox.fr>
   Copyright (C) 2019 Jean-Sebastien SUZANNE <jssuzanne@anybox.fr>

This Source Code Form is subject to the terms of the Mozilla Public License,
v. 2.0. If a copy of the MPL was not distributed with this file,You can
obtain one at http://mozilla.org/MPL/2.0/.
*/

// initial state
export const defaultState = {
  appLoaded: false,
  userName: '',
  authenticated: false,
  space_menus: [],
  space_name: 'Menu',
  previous_route: {},
  resources: {},
};

// getters
export const getters = {
  loggedIn(state) {
    return state.authenticated;
  },
  isLoaded(state) {
    return state.appLoaded;
  },
};

// actions
export const actions = {
};

// mutations
export const mutations = {
  'FURETUI LOADED'(state) {
      state.appLoaded = true;
  },
  LOGIN(state, action) {
    state.authenticated = true;
    if (action !== undefined && action.userName !== undefined) {
      state.userName = action.userName;
    }
  },
  LOGOUT(state) {
    state.authenticated = false;
    state.userName = '';
    state.space_name = 'Menu';
  },
  UPDATE_PREVIOUS_ROUTE(state, action) {
      state.previous_route = action.route;
  },
  UPDATE_SPACE_MENUS(state, action) {
      state.space_menus = action.menus;
  },
  UPDATE_CURRENT_SPACE(state, action) {
      state.space_name = action.label;
  },
  UPDATE_GLOBAL(state, action) {
    // eslint-disable-next-line
    for (const [key, value] of Object.entries(action)) {
      state[key] = value;
    }
  },
  UPDATE_RESOURCES(state, action) {
    const resources = Object.assign({}, state.resources)
    action.definitions.forEach(definition => {
        resources[String(definition.id)] = definition;
    });
    state.resources = resources;
  },
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};