import Head from "next/head";
import React from "react";
import MoreData from "src/components/moreData";

function auth() {
  return (
    <>
      <Head>
        <title>Auth page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoreData />
    </>
  );
}

export default auth;