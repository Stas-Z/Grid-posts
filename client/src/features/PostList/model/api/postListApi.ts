import { IPost } from '@/entities/Post'
import { rtkApi } from '@/shared/api/rtkApi'

import { postListActions } from '../slice/postListSlice'

export interface FetchPostListProps {
    page?: number
}

export const postListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getPostList: build.query<IPost[], FetchPostListProps>({
            query: ({ page }) => ({
                url: '/posts',
                method: 'GET',
                params: {
                    _limit: 12,
                    _page: page,
                },
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
            onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled
                if (data.length === 0) {
                    dispatch(postListActions.setHasMore(false))
                }
            },
        }),
    }),
})

export const useGetPostList = postListApi.useGetPostListQuery
