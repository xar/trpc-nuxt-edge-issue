import type { CombinedDataTransformer } from "@trpc/server";
import { parse, stringify } from "devalue";

export const transformer: CombinedDataTransformer = {
  input: {
    serialize: (object) => {
      console.log("serialize", object);
      return stringify(object);
    },
    deserialize: (object) => {
      console.log("deserialize", object);
      return parse(object);
    },
  },
  output: {
    serialize: (object) => stringify(object),
    deserialize: (object) => parse(object),
  },
};
