import Head from 'next/head';
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import UsefulLinks from './UsefulLinks';

export default function Layout({ children, links }) {
  return (
    <>
      <Head>
        <title>Сайт МВД</title>
        <meta name="description" content="Сайт мвд" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      {/* Nav Seperator (due to Nav fixed position) */}
      {/* <div style={{ height: 95 }} /> */}

      <main>{children}</main>

      <UsefulLinks links={links} />

      <Footer />
    </>
  );
}
