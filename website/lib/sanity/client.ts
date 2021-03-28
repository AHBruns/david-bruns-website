import * as codegen from "sanity-codegen";
import * as schema from "./schema";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "ua0nl4pj",
  dataset: "production",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source);
}

export default codegen.createClient<schema.Documents>({
  projectId: "ua0nl4pj",
  dataset: "production",
  fetch: fetch,
});
