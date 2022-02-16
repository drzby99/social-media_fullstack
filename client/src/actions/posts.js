
import * as api from '../api/index.js';
import { CREATE, FETCH_ALL, DELETE, LIKE, UPDATE} from '../constants/actions.js'
//redux thunk uses syntax: async (dispatch). this allows async operations
//instead of returning an action, dispatch is needed to execute the action and payload
export const getPosts = () => async (dispatch) => {
  try {
    //a response is obtained after the api call. can destructure it to {data} directly. 
    //now {data} represents the post itself (equivalent to response.data)
    const { data } = await api.fetchPosts();
    //dispatch() takes an action object, which includes {type:, payload:}
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    //console.log(data._id)
    //console.log(post)
    //const feedback = await api.fetchSentiment(data._id, post)
    //console.log(feedback)

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (setCurrentId, id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    setCurrentId(0);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};