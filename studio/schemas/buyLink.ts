export default {
  name: "buyLink",
  title: "Buy Link",
  type: "object",
  fields: [
    {
      name: "link",
      title: "Link",
      type: "url",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sellerName",
      title: "Seller Name",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
} as const;
