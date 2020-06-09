import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Table from '../src/components/Table/Table';
import { Typography } from '@material-ui/core';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Librank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography align="center" color="primary" variant="h1">
          Librank
        </Typography>
        <Table></Table>
      </main>

      <footer>All rights reserved to Nir Parisian</footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}
