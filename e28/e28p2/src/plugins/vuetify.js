import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader

Vue.use(Vuetify);

const vuetify = new Vuetify({
	icons: {
		iconfont: 'fa4',
	},
	theme: {
		themes: {
			light: {
				primary: '#010202',
				secondary: '#424242',
				accent: '#35f1ba',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107',
			},
		},
	},
})

export default vuetify;
