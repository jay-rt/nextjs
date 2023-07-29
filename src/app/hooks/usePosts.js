import useSWR from "swr";

const usePosts = (key) => {
  const fetchPosts = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error();
      error.status = res.status;
      error.message = await res.text();
      throw error;
    }

    return res.json();
  };

  return useSWR(key, fetchPosts);
};

export default usePosts;
