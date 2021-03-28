import * as layout from "../../../components/layout";
import * as page from "../../../pages/book/[id]";
import * as sanityClient from "../../../lib/sanity/client";
import * as sanitySchema from "../../../lib/sanity/schema";
import Link from "next/link";
import * as router from "next/router";
import BlockContent from "@sanity/block-content-to-react";

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof page.getStaticProps>>["props"];

const BookById = (props: Props) => {
  const routerInstance = router.useRouter();

  return (
    <layout.Layout>
      <div className="absolute inset-0 p-4 space-y-8 overflow-y-auto sm:p-16">
        {routerInstance.isFallback ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="text-4xl font-light leading-tight tracking-wider text-gray-800">
              {props.book.title}
            </h1>
            <div className="flex flex-col space-y-8 sm:space-y-0 sm:space-x-8 sm:flex-row">
              <div className="flex flex-col flex-1 max-w-md space-y-4">
                <img
                  src={sanityClient.urlFor(props.book.cover.asset).url()}
                  className="w-full"
                />
              </div>
              <div className="flex-1 space-y-8">
                {props.book.buyLinks && (
                  <div className="space-y-2">
                    <h1 className="text-3xl font-light leading-tight tracking-wider text-gray-800">
                      Buy Links
                    </h1>
                    <div className="flex flex-wrap p-2 bg-gray-100 border border-gray-200 shadow-inner">
                      {props.book.buyLinks.map((buyLink) => (
                        <div className="p-2">
                          <a href={buyLink.link} target="_blank">
                            <div className="px-3 py-2 font-semibold text-white bg-orange-500 shadow-lg">
                              {buyLink.sellerName}
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <h1 className="text-3xl font-light leading-tight tracking-wider text-gray-800">
                    Description
                  </h1>
                  <BlockContent
                    renderContainerOnSingleChild
                    blocks={props.book.description}
                    projectId="ua0nl4pj"
                    dataset="production"
                    className="flex-1 prose-lg /p-4 /bg-gray-100 /border /border-gray-200 /shadow-inner max-w-none"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </layout.Layout>
  );
};

export default BookById;
