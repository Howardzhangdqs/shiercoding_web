// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {

	// 数学公式
	const math = require('remark-math');
	const katex = (await import('rehype-katex')).default;

	const github_link = "https://github.com/Howardzhangdqs/shiercoding_web";

	return {
		title: '上海市第二中学编程社',
		tagline: 'Code a better world.',
		favicon: 'img/favicon.ico',

		// Set the production url of your site here
		url: "https://shiercoding.netlify.app/",
		// Set the /<baseUrl>/ pathname under which your site is served
		// For GitHub pages deployment, it is often '/<projectName>/'
		baseUrl: '/',

		staticDirectories: ['static'],

		// GitHub pages deployment config.
		// If you aren't using GitHub pages, you don't need these.
		organizationName: 'shiercoding', // Usually your GitHub org/user name.
		projectName: 'shiercoding', // Usually your repo name.

		onBrokenLinks: 'throw',
		onBrokenMarkdownLinks: 'warn',

		// Even if you don't use internalization, you can use this field to set useful
		// metadata like html lang. For example, if your site is Chinese, you may want
		// to replace "en" with "zh-Hans".
		i18n: {
			defaultLocale: 'zh-Hans',
			locales: ['zh-Hans'],
		},

		plugins: [
			[
				require.resolve("@easyops-cn/docusaurus-search-local"),
				{
					hashed: true,
					language: ["en", "zh"],
				},
			],
			// [
			// 	'@docusaurus/plugin-ideal-image',
			// 	{
			// 		name: "img/[name].[hash:hex:8].[width].[ext]",
			// 		quality: 70,
			// 		max: 1024, // max resized image's size.
			// 		min: 640, // min resized image's size. if original is lower, use that size.
			// 		// disableInDev: false,
			// 	},
			// ],
		],

		presets: [
			[
				'classic',
				({
					docs: {
						sidebarPath: require.resolve('./sidebars.js'),
						remarkPlugins: [math],
						rehypePlugins: [katex],
						editUrl: github_link + "/edit/main",
					},
					blog: {
						showReadingTime: true,
						remarkPlugins: [math],
						rehypePlugins: [katex],
					},
					theme: {
						customCss: require.resolve('./src/css/custom.css'),
					},
				}),
			],
		],

		stylesheets: [
			{
				href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
				type: 'text/css',
				integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
				crossorigin: 'anonymous',
			},
		],

		themeConfig:
			({
				// Replace with your project's social card
				image: 'img/docusaurus-social-card.jpg',

				colorMode: {
					defaultMode: "dark",
					respectPrefersColorScheme: true,
				},

				navbar: {
					title: 'ShierCoding',
					logo: {
						alt: 'My Site Logo',
						src: 'img/logo.svg',
					},
					items: [
						{
							type: 'doc',
							docId: 'intro',
							position: 'left',
							label: '文档',
						},
						{
							to: '/blog',
							label: '博客',
							position: 'left'
						},
						{
							href: github_link,
							label: 'GitHub',
							position: 'right',
						},
					],
				},
				footer: {
					style: 'dark',
					links: [
						{
							title: '文章',
							items: [
								{
									label: '文档',
									to: '/docs/intro',
								},
								{
									label: '博客',
									to: '/blog',
								},
							],
						},
						{
							title: '友情链接',
							items: [
								{
									label: '上海市第二中学官网',
									href: 'https://www.shiers.cn',
								},
								{
									label: "24届4班官网",
									href: "https://qing-yun.netlify.app"
								},
							],
						},
						{
							title: '快速通道',
							items: [
								{
									label: '华为云 - 最常用的竞赛平台',
									href: 'https://www.huaweicloud.com/',
								},
								{
									label: '腾讯云 - 比华为云便宜点',
									href: 'https://cloud.tencent.com/',
								},
							],
						},
						{
							title: '更多',
							items: [
								{
									label: 'GitHub',
									href: github_link,
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} 市二编程社, Inc.`,
				},
				prism: {
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
					magicComments: [
						{
							className: 'theme-code-block-highlighted-line',
							line: 'highlight-next-line',
							block: { start: 'highlight-start', end: 'highlight-end' },
						},
						{
							className: 'code-block-error-line',
							line: 'error',
						},
						{
							className: 'code-block-info-line',
							line: 'info',
						},
					],
				},
				announcementBar: {
					id: 'announcementBar',
					content: `<a href="/docs/welcome">这是链接 👉 ${add_us_link} 👈 这是链接</a>`,
				},
			}),
	};
};

const add_us_link = `<a href="/docs/welcome">加入我们</a>`;

module.exports = createConfig;
