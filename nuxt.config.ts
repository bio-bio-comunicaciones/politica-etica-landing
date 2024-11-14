export default defineNuxtConfig({
	compatibilityDate: '2024-10-30',
	devtools: {
		enabled: true
	},
	future: {
		compatibilityVersion: 4
	},
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxt/image'
	],
	unocss: {
		preflight: true
	},
	$production: {
		app: {
			baseURL: '/politica-etica/'
		}
	}
})
