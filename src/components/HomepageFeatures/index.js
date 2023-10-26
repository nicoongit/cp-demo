import Link from '@docusaurus/Link';


import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Amadeus from '@site/static/img/amadeus.svg';


const FeatureList = [
  {
    title: 'Flow1',
    Svg: Amadeus,
    description: (
      <>
        DiscoverFlow1.
      </>
    ),
    href: 'docs/Flow1',
  },
  {
    title: 'Flow2',
    Svg: Amadeus,
    description: (
      <>
        Discover Flow2.
      </>
    ),
    href: 'docs/Flow2',
  },
  {
    title: 'Flow3',
    Svg: Amadeus,
    description: (
      <>
        Discover Flow3.
      </>
    ),
    href: 'docs/Flow3',
  },
];

function Feature({ Svg, title, description, href }) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={clsx(styles.card, "text--center")}>
          <Svg className={styles.featureSvg} aria-hidden="true" />
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
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


