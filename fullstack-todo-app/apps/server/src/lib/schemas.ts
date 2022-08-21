const environmentSchema = {
    type: "object",
    required: [
        "PORT",
        "POSTGRES_USER",
        "POSTGRES_PASSWORD",
        "POSTGRES_DB",
        "POSTGRES_HOST",
        "POSTGRES_PORT",
        "DATABASE_URL"
    ],
    properties: {
        PORT: {
            type: "number"
        },
        POSTGRES_USER: {
            type: "string"
        },
        POSTGRES_PASSWORD: {
            type: "string"
        },
        POSTGRES_DB: {
            type: "string"
        },
        POSTGRES_HOST: {
            type: "string"
        },
        POSTGRES_PORT: {
            type: "number"
        },
        DATABASE_URL: {
            type: "string"
        },
    },
};

export type environmentSchemaType = typeof environmentSchema;

export {
    environmentSchema
}
