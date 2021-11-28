import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import AboutMe from '../sections/about-me';
import Skills from '../sections/skills';
import PortfolioCard from '../sections/portfolio';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="ESC Portfolio site" />
        <Banner />
        <AboutMe />
        <Skills />
        <PortfolioCard />
      </Layout>
    </ThemeProvider>
  );
}

// <Feature />
// <CoreFeature />
//<WorkFlow />
// <Package />
// <TeamSection
