export { default as default } from "../../mirror/book/[id]";
import sanityClient from "../../lib/sanity/client";
import { GetStaticPropsContext } from "next";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  console.log("context", context);
  console.log();
  //book: await sanityClient.get("book", context.params.id)
  return {
    props: {
      book: await sanityClient.get("book", context.params.id),
    },
    revalidate: 1,
  };
};
