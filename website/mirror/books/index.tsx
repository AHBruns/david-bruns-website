import * as layout from "../../components/layout";
import * as page from "../../pages/books";
import * as sanityClient from "../../lib/sanity/client";
import * as sanitySchema from "../../lib/sanity/schema";
import Link from "next/link";

const Book = (props: sanitySchema.Book) => {
  return (
    <div className="flex items-center justify-center">
      <Link href={`/book/${props._id}`}>
        <a>
          <img
            src={sanityClient.urlFor(props.cover.asset).url()}
            className="shadow-lg"
          />
        </a>
      </Link>
    </div>
  );
};

const Series = (props: {
  seriesName: string;
  books: Array<sanitySchema.Book>;
}) => {
  return (
    <div className="col-span-1 space-y-2 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
      <div>
        <h1 className="text-3xl font-light leading-tight tracking-wider text-gray-800">
          {props.seriesName}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 overflow-hidden bg-gray-100 border border-gray-200 shadow-inner sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {props.books.map((book) => (
          <Book {...book} />
        ))}
      </div>
    </div>
  );
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof page.getStaticProps>>["props"];

const Books = (props: Props) => {
  const grouped = props.books.reduce<{
    standalone: Array<sanitySchema.Book>;
    [_: string]: Array<sanitySchema.Book>;
  }>(
    (acc, elem) => {
      const arr = acc[elem.seriesName ?? "standalone"] ?? [];
      arr.push(elem);
      acc[elem.seriesName ?? "standalone"] = arr;
      return acc;
    },
    { standalone: [] }
  );

  return (
    <layout.Layout>
      <div className="absolute inset-0 p-4 overflow-y-auto sm:p-16">
        <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Object.entries(grouped).map(([seriesName, books]) => {
            if (seriesName !== "standalone") {
              return <Series seriesName={seriesName} books={books} />;
            } else {
              return null;
            }
          })}
          {grouped.standalone.map((book) => (
            <Book {...book} />
          ))}
        </div>
      </div>
    </layout.Layout>
  );
};

export default Books;
