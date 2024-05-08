export default defineEventHandler(async () => {
  return $fetch("https://zenn.dev/api/articles?username=yanskun");
});
