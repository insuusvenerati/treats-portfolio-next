import Image from "next/image";
import { Upload } from "../types/allUploads";
import styles from "./Masonry.module.css";
import Link from "next/link";

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
              <Link href={`/image/[id]`} as={`/image/${image.id}`}>
                <a>
                  <Image
                    unsized
                    alt={image.responsiveImage.src}
                    sizes={image.responsiveImage.sizes}
                    src={image.responsiveImage.src}
                    className={styles.masonry__content}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
