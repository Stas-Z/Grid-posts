import { PostListSchema } from '@/features/PostList'
import { PostPageSchema } from '@/pages/PostPage'
import { rtkApi } from '@/shared/api/rtkApi'

import { createReduxStore } from './store'

export interface StateSchema {
    postList: PostListSchema
    postPage: PostPageSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type RootState = ReturnType<typeof createReduxStore>['getState']
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
