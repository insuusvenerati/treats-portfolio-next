export interface Upload {
  url?: string;
  responsiveImage: {
    sizes: string;
    src: string;
  };
}

export interface AllUploads {
  data: {
    allUploads: Array<Upload>;
  };
}
