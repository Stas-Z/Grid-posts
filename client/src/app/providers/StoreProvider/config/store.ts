import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { updatePostMiddleware } from '@/app/middleware/updatePostMiddleware'
import { postReducer } from '@/entities/Post'
import { postListReducer } from '@/features/PostList'
import { postPageReducer } from '@/pages/PostPage'
import { rtkApi } from '@/shared/api/rtkApi'

import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        post: postReducer,
        postList: postListReducer,
        postPage: postPageReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                rtkApi.middleware,
                updatePostMiddleware,
            ),
    })

    return store
}
