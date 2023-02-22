import {Note} from "../types/types";

const updatePostsInStorage = (posts:Note[]) =>  {
  localStorage.setItem('Posts', JSON.stringify(posts) )
}

export default updatePostsInStorage;
