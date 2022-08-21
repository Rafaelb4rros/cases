import fastify from "fastify";
import type { environmentSchemaType } from "../src/lib/schemas";

type ENV<T extends keyof environmentSchema["property"]> = Record<T, 
    environmentSchemaType["properties"][T]["type"]>;

declare module 'fastify' {
  interface FastifyInstance {
    env: ENV<keyof environmentSchemaType["properties"]>
  }
}

