import { StateSchema } from '@/app/providers/StoreProvider'

export const getPostListHasMore = (state: StateSchema) => state.postList.hasMore
export const getSelectedPosts = (state: StateSchema) =>
    state.postList.selectedPostsId
