import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      isLoggedIn: false,
    }
  },

  actions: {
    toggleIsLoggedIn() {
      console.log('toggleIsLoggedIn: ', this.state.isLoggedIn);
      this.state.isLoggedIn = !this.state.isLoggedIn;
    }
  }
})