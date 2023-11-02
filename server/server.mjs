import { app } from "./app.mjs";

const PORT = process.env.PORT ?? 60006;
const HOST = process.env.HOST ?? '0.0.0.0';

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
