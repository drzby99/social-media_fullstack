
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      //When App.js dispatches getPosts(), it goes to actions/posts to dispatch
      //and calls api/index's fetchPosts(). The returned result (data), which has all the posts  
      //is then passed thru the second parameter, payload: data with the call to this 'FETCH_ALL'
      //Therefore we can write return action.payload to return all posts
      return action.payload;
    case 'CREATE':
      //returning all the posts plus the new post, which is in action.payload dispatched by actions/posts
        return [...state, action.payload];
    case 'LIKE':
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case 'UPDATE':
      console.log(state.map(post => post.createdAt))
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case 'DELETE':
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

