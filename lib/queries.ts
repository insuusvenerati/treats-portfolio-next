import { gql } from "graphql-request";
import { AllUploads, Upload } from "../types/queries";
import { request } from "./datocms";

const CONTACT_QUERY = gql`
  query Contact {
    upload(filter: { tags: { eq: "contact" } }) {
      responsiveImage {
        src
        sizes
      }
    }
  }
`;

const BG_IMAGE_QUERY = gql`
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

const VISDEV_IMAGE_QUERY = gql`
  query Homepage {
    allUploads(filter: { tags: { eq: "visdev" } }) {
      responsiveImage {
        sizes
        src
      }
      id
    }
  }
`;

const IMAGE_ID_QUERY = gql`
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

const ALL_IMAGES_QUERY = gql`
  query AllImages {
    allUploads {
      id
      responsiveImage {
        src
        sizes
      }
    }
  }
`;

export async function getContactImage() {
  const data = await request({
    query: CONTACT_QUERY,
    variables: {},
    preview: false,
  });

  return data;
}

export async function getAllBgImages() {
  const data: AllUploads = await request({
    query: BG_IMAGE_QUERY,
    variables: {},
    preview: false,
  });

  return data;
}

export async function getAllVisdevImages() {
  const data: AllUploads = await request({
    query: VISDEV_IMAGE_QUERY,
    variables: {},
    preview: false,
  });

  return data;
}

export async function getAllImages() {
  const data: AllUploads = await request({
    query: ALL_IMAGES_QUERY,
    variables: {},
    preview: false,
  });

  return data;
}

export async function getImageById(id: string) {
  const data: Upload = await request({
    query: IMAGE_ID_QUERY,
    variables: { id: id },
    preview: false,
  });

  return data;
}
