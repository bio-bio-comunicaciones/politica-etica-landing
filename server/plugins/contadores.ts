export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook('render:html', (html, { event }) => {
		html.head.push('<!--#include virtual="/contadores.shtml"-->')
	})
})
