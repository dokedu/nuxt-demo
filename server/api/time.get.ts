export default defineEventHandler(async (event) => {
  console.log(`[${new Date().toISOString()}] [GET] /api/time.get`);

  return {
    time: new Date().toISOString(),
  };
});
