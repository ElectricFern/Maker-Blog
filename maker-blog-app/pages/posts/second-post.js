import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <div>
        Some blog content for the second post!
      </div>
    </Layout>
  );
}
