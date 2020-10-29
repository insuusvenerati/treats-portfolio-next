export interface Upload {
  url?: string;
  id?: string;
  responsiveImage: {
    sizes: string;
    src: string;
  };
}

export interface AllUploads {
  allUploads: Array<Upload>;
}

export type AllBGUploads = {
  allUploads: Array<Upload>;
};
