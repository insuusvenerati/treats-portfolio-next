import { gql } from "graphql-request";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";
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
      id
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
      <Layout>
        <main>
          <Masonry images={data.allUploads} />
        </main>
      </Layout>
    </>
  );
}
