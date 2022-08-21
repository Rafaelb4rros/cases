import fastifyEnv from "@fastify/env";
import { options } from "./plugins/fastify-env";
import fastify, { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";

const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
> = fastify({
    logger: true
});


server.register(fastifyEnv, options);
server.listen({ port: 3333 }, (err, addr) => {
    if(err) {
        server.log.error(err);
        process.exit(1);
    }; 

    server.log.warn(`Server is now listening on ${addr}`);
});


    


