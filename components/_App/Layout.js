import React from 'react';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import Footer from './Footer';
import GoTop from './GoTop';
import StaticHeader from './StaticHeader';

const Layout = ({ children, user }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Grounded HLC</title>
        <meta
          name='description'
          content='The Shop for JPD.HLC - Grounded HLC - groundedhlc'
        />
        <meta
          name='og:title'
          property='og:title'
          content='The Grounded Shop | groundedhlc'
        />
        <meta
          name='twitter:card'
          content='Grounded HLC - The Shop @ groundedhlc'
        />
        <link rel='canonical' href='https://groundedhlc.com/' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/pauseprogramming/image/upload/v1593575306/grounded/tinified/IMG_9967_1_d30lp4.jpg'
          alt='Grounded HLC JPD.HLC banner image of JP Duncan - groundedhlc'
        />
      </Head>

      <StaticHeader user={user} />
      <Container fluid>{children}</Container>
      <Footer user={user} />
      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </React.Fragment>
  );
};

export default Layout;
