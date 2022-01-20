import { InMemoryCache } from "@apollo/client";

//* https://github.com/apollographql/apollo-client/blob/main/src/utilities/policies/pagination.ts#L33-L49
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          keyArgs: false,
          merge(existing, incoming, { args }) {
            if (!existing) return incoming;
            const merged = existing.results.slice(0);
            if (args) {
              // Assume an offset of 0 if args.offset omitted.
              const { offset = 0 } = args;
              for (let i = 0; i < incoming.results.length; ++i) {
                merged[offset + i] = incoming.results[i];
              }
            } else {
              // It's unusual (probably a mistake) for a paginated field not
              // to receive any arguments, so you might prefer to throw an
              // exception here, instead of recovering by appending incoming
              // onto the existing array.
              merged.push.apply(merged, incoming);
            }
            return { ...existing, results: merged };
          },
        },
      },
    },
  },
});
