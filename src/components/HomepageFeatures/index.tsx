import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

import { IconExternalLink } from "./component";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: JSX.Element;
	link?: any;
};

const FeatureList: FeatureItem[] = [
	{
		title: '极佳的氛围',
		Svg: require('@site/static/img/undraw_1.svg').default,
		description: (
			<>
				社员们和谐友爱，一起用爱发电⚡。<br />
				共同制作优秀项目。
			</>
		),
		link: {
			to: "/docs/demeanour",
			display: "了解更多",
		},
	},
	{
		title: '顶级的阵容',
		Svg: require('@site/static/img/undraw_2.svg').default,
		description: (
			<>
				我们拥有全市二最顶尖的信息学人才。<br />
				两名NOIp省一获奖者与各方面人才与你共同努力、享互学习。
			</>
		),
		link: {
			to: "/docs/demeanour",
			display: "了解更多",
		},
	},
	{
		title: '丰富的资源',
		Svg: require('@site/static/img/undraw_3.svg').default,
		description: (
			<>
				直接组队代表学校参加全国级信息学科大赛。<br />
				大量竞赛经验与代码参考，助你轻松获奖。
			</>
		),
		link: [
			{
				to: "/docs/future",
				display: "增援未来计划",
			},
			{
				to: "/docs/future/tools/ChatGPT",
				display: "ChatGPT代理",
			},
		],
	},
];


function Feature({ title, Svg, description, link }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
				{
					(link ? (Object.prototype.toString.call(link) == '[object Array]' ? (
						link.map((item, index) => (
							<div key={index}>
								<Link to={item.to} target="_blank">
									{item.display}
									<IconExternalLink />
								</Link>
							</div>
						))
					) : (
						<Link to={link.to} target="_blank">
							{link.display}
							<IconExternalLink />
						</Link>
					)) : (<></>))
				}
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
