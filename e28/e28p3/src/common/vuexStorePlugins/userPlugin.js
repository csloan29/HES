export const userPlugin = function(store) {
	store.subscribe((mutation, state) => {
		if (mutation.type == 'setUser') {
			if (state.user == null) {
				store.commit('setFavorites', []);
				store.commit('setUserDataLoaded', null);
			} else {
				store.dispatch('fetchUserData');
			}
		}
	});
}