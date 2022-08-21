import { environmentSchema } from "../lib/schemas";

const options = {
    confKey: 'env',
    schema: environmentSchema,
    dotenv: true
};

export {
    options,
};
