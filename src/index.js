import app from "./app";

async function main() {
  await app.listen(4000);
  console.log("desde el puerto 4000");
}
main();
