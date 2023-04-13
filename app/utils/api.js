export function fetchPopularRepositories(language) {
  const url = new URL(
    `search/repositories?q=stars:>1+language:${language}`,
    "https://api.github.com/"
  );
  url.searchParams.append("sort", "stars");
  url.searchParams.append("order", "desc");
  url.searchParams.append("type", "Repositories");

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data.items;
    });
}
