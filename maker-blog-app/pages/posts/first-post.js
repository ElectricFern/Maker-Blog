import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <div>
        Some blog content for the first post!
      </div>
    </Layout>
  );
}
