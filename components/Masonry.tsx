import Image from "next/image";
import { Upload } from "../types/allUploads";
import styles from "./Masonry.module.css";

type MasonryProps = {
  images: Array<Upload>;
};

export const Masonry = ({ images }: MasonryProps): JSX.Element => {
  return (
    <>
      <div className={styles.masonry__wrapper}>
        <div className={styles.masonry}>
          {images?.map((image) => (
            <div key={image.responsiveImage.src} className={styles.masonry__item}>
              <Image
                unsized
                sizes={image.responsiveImage.sizes}
                src={image.responsiveImage.src}
                className={styles.masonry__content}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
