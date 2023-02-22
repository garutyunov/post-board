import { Note } from '../types/types';

const getPostsFromStorage = () => {
  const posts = localStorage.getItem('Posts');
  if (!posts) {
    return [];
  }
  const parsedPosts = JSON.parse(posts) as Note[];
  return parsedPosts.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

export default getPostsFromStorage;
