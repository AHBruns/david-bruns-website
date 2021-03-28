export default {
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Cover",
      name: "cover",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "richText",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "buyLinks",
      title: "Buy Links",
      type: "array",
      of: [{ type: "buyLink" }],
    },
    {
      name: "seriesName",
      title: "Series Name",
      type: "string",
      description:
        "Books with the same series name will be grouped together on the books page. Check for typos, e.g. 'WMD Files' is different from 'The WMD Files' and will be treated as such. For standalone novels just leave this field empty.",
    },
  ],
} as const;
