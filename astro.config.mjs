// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Menu', // Esto ya no se verá por el replacesTitle y el CSS
			logo: {
				src: './src/assets/leon.svg',
				replacesTitle: true,
			},
			customCss: [
				'./src/Styles/custom.css',
			],
			social: {
				github: 'https://github.com/julioguerrero26'
			},
			sidebar: [
				{
					label: 'Cuadernos',
					items: [
						{ label: 'Prueba', link: '/guides/example' }, // Asegúrate de que el link exista
					],
				},
			],
		}),
	],
});
