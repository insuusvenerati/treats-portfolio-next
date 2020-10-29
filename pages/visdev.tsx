import { GetStaticProps } from "next";
import { Layout } from "../components/Layout";
import { Masonry } from "../components/Masonry";
import { getAllVisdevImages } from "../lib/queries";
import { AllUploads } from "../types/queries";

type VisdevPageProps = {
  data: AllUploads;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllVisdevImages();
  return { props: { data } };
};

const VisdevPage = ({ data }: VisdevPageProps) => {
  return (
    <>
      <Layout>
        <Masonry images={data.allUploads} />
      </Layout>
    </>
  );
};

export default VisdevPage;
