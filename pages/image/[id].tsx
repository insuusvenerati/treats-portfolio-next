import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import { getAllImages, getImageById } from "../../lib/queries";
import { Upload } from "../../types/queries";

type ImageByIdProps = {
  data: {
    upload: Upload;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllImages();
  // console.log(data);
  return {
    paths: data?.allUploads?.map((upload) => `/image/${upload.id}`) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getImageById(params?.id as string);

  return { props: { data } };
};

const ImageById = ({ data }: ImageByIdProps): JSX.Element => {
  return (
    <Layout>
      <div className="flex justify-center mt-10">
        <div>
          {data && (
            <Image
              unsized
              sizes={data?.upload?.responsiveImage?.sizes}
              src={data?.upload?.responsiveImage?.src}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ImageById;
