export default defineEventHandler(async () => {
  return $fetch("https://qiita.com/api/v2/users/yanskun/items?per_page=100");
});
