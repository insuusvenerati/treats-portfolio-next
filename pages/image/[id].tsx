import { gql } from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import { request } from "../../lib/datocms";
import { Upload } from "../../types/allUploads";

type ImageByIdProps = {
  upload: Upload;
};

type AllUploads = {
  allUploads: Array<Upload>;
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

const ALL_UPLOADS = gql`
  query AllUploads {
    allUploads(filter: { tags: { eq: "bg" } }) {
      id
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: AllUploads = await request({
    query: ALL_UPLOADS,
    variables: {},
    preview: false,
  });
  return {
    paths: data.allUploads.map((upload) => `/image/${upload.id}`) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
