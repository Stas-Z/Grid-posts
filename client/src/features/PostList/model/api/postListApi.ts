import { IPost } from '@/entities/Post'
import { rtkApi } from '@/shared/api/rtkApi'

import { postListActions } from '../slice/postListSlice'

export interface FetchPostListProps {
    page?: number
}
interface DeleteTodoProps {
    ids: number[]
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
        deletePosts: build.mutation<void, DeleteTodoProps>({
            query: ({ ids }) => ({
                url: '/posts',
                method: 'DELETE',
                body: { ids },
            }),
            onQueryStarted: async ({ ids }, thunkAPI) => {
                const { dispatch, queryFulfilled } = thunkAPI
                const patchResult = dispatch(
                    postListApi.util.updateQueryData(
                        'getPostList',
                        {},
                        (draft) => {
                            return draft.filter(
                                (post) => !ids.includes(post.id!),
                            )
                        },
                    ),
                )
                try {
                    await queryFulfilled
                } catch (error) {
                    console.error('Error deleting posts:', error)
                    patchResult.undo()
                }
            },
        }),
    }),
})

export const useGetPostList = postListApi.useGetPostListQuery
export const useDeletePosts = postListApi.useDeletePostsMutation
