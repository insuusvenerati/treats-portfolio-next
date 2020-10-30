import { GetStaticProps } from "next";
import { Layout } from "../components/Layout";
import { Masonry } from "../components/Masonry";
import { getAllBgImages } from "../lib/queries";
import { AllUploads } from "../types/queries";

type HomeProps = {
  data: AllUploads;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllBgImages();
  return { props: { data } };
};

export default function Home({ data }: HomeProps) {
  return (
    <Layout>
      <main className="flex place-items-center justify-center">
        <Masonry images={data.allUploads} />
      </main>
    </Layout>
  );
}
