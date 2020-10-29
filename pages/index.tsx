import { gql } from "graphql-request";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Masonry } from "../components/Masonry";
import { Sidebar } from "../components/Sidebar";
import { request } from "../lib/datocms";
import { AllUploads } from "../types/allUploads";

const HOMEPAGE_QUERY = gql`
  query Homepage {
    allUploads(filter: { tags: { eq: "bg" } }) {
      responsiveImage {
        sizes
        src
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const data: AllUploads = await request({
    query: HOMEPAGE_QUERY,
    variables: {},
    preview: false,
  });

  return { props: { data } };
};

export default function Home({ data }: AllUploads) {
  return (
    <>
      <Head>
        <title>Laura Norwood</title>
        <meta name="Description" content="Portfolio for Laura Norwood" />
      </Head>

      <nav>
        <header className="text__large">
          <Link href="/">
            <a>Laura Norwood</a>
          </Link>
        </header>
        <Sidebar />
      </nav>
      <main>
        <Masonry images={data.allUploads} />
      </main>
    </>
  );
}
