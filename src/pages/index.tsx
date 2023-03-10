import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Typewriter } from '@site/src/components/HomepageFeatures/typewriter';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	const type_content = [
		`printf("${siteConfig.tagline}");`,             // C
		`console.log("${siteConfig.tagline}")`,         // JavaScript
		`print("${siteConfig.tagline}")`,               // Python
		`echo "${siteConfig.tagline}"`,                 // Bash
		`std::cout << "${siteConfig.tagline}";`,        // C++
		`Console.WriteLine("${siteConfig.tagline}");`,  // C#
		`PRINT "${siteConfig.tagline}"`,                // Basic
		`System.out.println("${siteConfig.tagline}");`, // Java
		`<p>${siteConfig.tagline}</p>`,                 // HTML
		`? ${siteConfig.tagline}`,                      // Clipper
		`Writeln('${siteConfig.tagline}');`,            // Delphi | Pascal
		`console.log "${siteConfig.tagline}"`,          // CoffeeScript
		`disp('${siteConfig.tagline}')`,                // MatLab
		`println("${siteConfig.tagline}")`,             // Julia
		`print [${siteConfig.tagline}]`,                // Logo
		`print "${siteConfig.tagline}";`,               // Perl 5
		`WriteLn('${siteConfig.tagline}');`,            // Pascal
		`NSLog(@"${siteConfig.tagline}");`,             // Objective-C
	];

	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className={clsx('hero__title', styles.hero_color_white)}>{siteConfig.title}</h1>
				<p className={clsx("hero__subtitle", styles.hero_color_white, styles.monospace)}>
					<Typewriter text={type_content} loop={true} delay={1500} />
				</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						????????????
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title="????????????????????????????????????"
			description="????????????????????????????????????">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
