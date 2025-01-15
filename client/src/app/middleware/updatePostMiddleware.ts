import { Middleware } from '@reduxjs/toolkit'

import { addNewPostApi } from '@/features/AddNewPost'
import { postListApi } from '@/features/PostList'

import { AppDispatch, StateSchema } from '../providers/StoreProvider'

interface Store {
    dispatch: AppDispatch
    getState: () => StateSchema
}

export const updatePostMiddleware: Middleware =
    (store: Store) => (next) => async (action) => {
        const result = next(action)

        if (addNewPostApi.endpoints.addNewPost.matchFulfilled(action)) {
            const newPost = action.payload

            store.dispatch(
                postListApi.util.updateQueryData('getPostList', {}, (draft) => {
                    draft.unshift(newPost)
                }),
            )
        }

        return result
    }
