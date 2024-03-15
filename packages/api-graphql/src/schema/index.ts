import { mergeSchemas } from "@graphql-tools/schema";

// https://www.graphql-tools.com/docs/schema-merging
export default mergeSchemas({
  schemas: [require("@dev/lan/schema").default],
});
