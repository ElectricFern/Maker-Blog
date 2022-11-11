import Link from "next/link";
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import Card from "../components/card/card";
import homepageContent from "../content/homepage-content";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {homepageContent.map(item => (
          <Card
          key={item.id}
          name={item.name}
          content={item.content}
          />
        ))
        }
      </section>
      <section>
        <div
        className="d-flex 
  justify-content-center align-items-center"
      >
        {/* TODO: map over post pages which are most 3 recent */}
        <div className="body">
          ...Read <Link href="/posts/first-post">this first post page!</Link>
          <br />
          ...Read <Link href="/posts/second-post">this second post page!</Link>
        </div>
      </div>
      </section>
    </Layout>
  );
}
