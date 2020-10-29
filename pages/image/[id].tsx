import { gql } from "graphql-request";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import { request } from "../../lib/datocms";
import { Upload } from "../../types/allUploads";

type ImageByIdProps = {
  upload: Upload;
};

const IMAGE_QUERY = gql`
  query Image($id: UploadId!) {
    upload(filter: { id: { eq: $id } }) {
      id
      responsiveImage {
        src
        sizes
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { upload }: ImageByIdProps = await request({
    query: IMAGE_QUERY,
    variables: { id: params?.id },
    preview: false,
  });

  return { props: { upload } };
};

const ImageById = ({ upload }: ImageByIdProps): JSX.Element => {
  return (
    <Layout>
      <div className="flex justify-center mt-10">
        <div>
          <Image unsized sizes={upload.responsiveImage.sizes} src={upload?.responsiveImage?.src} />
        </div>
      </div>
    </Layout>
  );
};

export default ImageById;
