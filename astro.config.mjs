// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Menu',
			logo: {
				src: './src/assets/leon.svg',
				replacesTitle: true,
			},
			customCss: [
				'./src/Styles/custom.css',
			],
			// AQUÍ ESTABA EL PEDO, W. AHORA ES UN ARREGLO []
			// ... dentro de starlight({})
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/julioguerrero26' // <-- AQUÍ CAMBIA 'link' POR 'href'
				},
			],
			sidebar: [
				{
					label: 'Cuadernos',
					items: [
						{ label: '📝 Untitled notebook', link: '/cuadernos/untitled' },
						{ label: '➕ Nuevo cuaderno', link: '/cuadernos/nuevo' },
					],
				},
				{
					label: 'Gems',
					items: [
						{ label: '💎 piratita programador', link: '/gems/piratita' },
					],
				},
				{
					label: 'Chats',
					items: [
						{ label: '🚀 Guía Rápida de Astro', link: '/chats/astro-guia' },
						{ label: '📊 Método de Bernoulli', link: '/chats/bernoulli' },
						{ label: '⚡ Peligro de Protoboard', link: '/chats/protoboard' },
						{ label: '💬 "Te quiero" en Chino', link: '/chats/chino' },
					],
				},
			],
		}),
	],
});