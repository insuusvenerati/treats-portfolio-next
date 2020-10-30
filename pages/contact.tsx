import { GetStaticProps } from "next";
import Image from "next/image";
import { Layout } from "../components/Layout";
import { getContactImage } from "../lib/queries";

type ContactPageProps = {
  data: {
    upload: {
      responsiveImage: {
        src: string;
        sizes: string;
      };
    };
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getContactImage();

  return { props: { data } };
};

const ContactPage = ({ data }: ContactPageProps) => {
  return (
    <Layout>
      <div className="flex place-items-center flex-col">
        <Image
          sizes={data.upload.responsiveImage.sizes}
          src={data.upload.responsiveImage.src}
          unsized
          className="mt-10"
        />
        <p className="text-gray-600 w-1/2 mt-4">
          Hello! I'm Laura, an illustrator & concept artist based in Florida. I've been doing
          freelance illustration and concept work for ten years, specializing in character design,
          prop design, and background painting.
        </p>
        <p className="text-gray-600 w-1/2 mt-4">
          If you want to get in touch to inquire about contract work or have any questions, feel
          free to fill in the form below or send an email to norwood.lja@gmail.com!
        </p>
      </div>
      <div className="mt-10 flex justify-center mb-10">
        <form
          className="w-1/2"
          action="https://getform.io/f/151bff71-21c9-4429-8bbd-f63f8ba81321"
          method="POST"
        >
          <input
            className="block form-input mb-6 w-full"
            placeholder="Name..."
            type="text"
            name="name"
          />

          <input
            className="block form-input mb-6 w-full"
            placeholder="Email"
            type="email"
            name="email"
          />

          <textarea
            className="form-textarea block mb-1 w-full"
            placeholder="Message"
            name="message"
          />

          <button className="border-black border-2 w-20" type="submit">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
