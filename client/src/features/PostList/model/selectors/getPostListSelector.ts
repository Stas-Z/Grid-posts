import { StateSchema } from '@/app/providers/StoreProvider'

export const getPostListHasMore = (state: StateSchema) => state.postList.hasMore
