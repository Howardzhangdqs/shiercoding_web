// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const github_link = "https://github.com/Howardzhangdqs/shiercoding_code";

const config = {
	title: '上海市第二中学编程社',
	tagline: 'Code a better world',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: "https://shiercoding.netlify.app/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

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
		locales: ['zh-Hans', "en"],
	},

	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
			  hashed: true,
			  language: ["en", "zh"],
			},
		],
	],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
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
			},
		}),
};

module.exports = config;
