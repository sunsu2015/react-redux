/**
 * Created by sunsu on 2016/9/18.
 */
import {SELECT_SUBREDDIT,INVALIDATE_SUBREDDIT,REQUEST_POSTS,RECEIVE_POSTS} from '../actionType/actionType'
import fetch from 'isomorphic-fetch'
export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidatesubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

export function requestPosts(subreddit) {
    console.log(4);
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}
export function receivePosts(subreddit, json) {
    console.log(5);
    console.log(json);
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export function fetchPost(subreddit){
    console.log(3);
    return function(dispatch){
        dispatch(requestPosts(subreddit));
        return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
            .then(response=>response.json())
            .then(json=>
                dispatch(receivePosts(subreddit,json))
            )
    }
}

function shouldFetchPosts(state, subreddit) {
    console.log(2);
    console.log(state.postsBySubreddit[subreddit]);
    const posts = state.postsBySubreddit[subreddit]
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    console.log(1);

    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么。

    // 当缓存的值是可用时，
    // 减少网络请求很有用。

    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            // 在 thunk 里 dispatch 另一个 thunk！
            return dispatch(fetchPost(subreddit))
        } else {
            // 告诉调用代码不需要再等待。
            return Promise.resolve()
        }
    }
}