import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import book from "./book";
import richText from "./richText";
import buyLink from "./buyLink";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([book, richText, buyLink]),
});
