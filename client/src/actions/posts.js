import * as api from '../api'

//Creating Action Creators
//ACs are async operations. Hence async (dispatch) is added.
//as well, instead of returning, we dispatch the result
export const getPosts = () => async (dispatch) => {
    //getting response from the api, which has a data object. here data represents the posts 
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type: 'FETCH_ALL', payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    //getting response from the api, which has a data object. here data represents the posts 
    try {
        const { data } = await api.createPost(post);
        
        dispatch({ type: 'CREATE', payload:data})
    } catch (error) {
        console.log(error)
    }
}
