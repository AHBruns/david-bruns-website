export { default as default } from "../mirror/books";
import sanityClient from "../lib/sanity/client";

export const getStaticProps = async () => {
  return { props: { books: await sanityClient.getAll("book") }, revalidate: 1 };
};
