import { rqClient } from "@/shared/api/instance";
import { useCallback, type RefCallback } from "react";

type UserBoardListParams = {
  limit?: number;
  isFavorite?: boolean;
  search?: string;
  sort?: "createdAt" | "updatedAt" | "lastOpenedAt" | "name";
};

export function useBoardsList({
  limit = 20,
  isFavorite,
  search,
  sort,
}: UserBoardListParams) {
  const { data, fetchNextPage, isPending, isFetchingNextPage, hasNextPage } =
    rqClient.useInfiniteQuery(
      "get",
      "/boards",
      {
        params: {
          query: {
            limit,
            page: 1,
            search,
            sort,
            isFavorite,
          },
        },
      },
      {
        initialPageParam: 1,
        pageParamName: "page",
        getNextPageParam: (lastPage, _, lastPageParams) =>
          Number(lastPageParams) < lastPage.totalPages
            ? Number(lastPageParams) + 1
            : null,
      },
    );

  const cursorRef: RefCallback<HTMLDivElement> = useCallback(
    (el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchNextPage();
          }
        },
        { threshold: 0.5 },
      );

      if (el) {
        observer.observe(el);

        return () => {
          observer.disconnect();
        };
      }
    },
    [fetchNextPage],
  );

  const boards = data?.pages.flatMap(({ list }) => list) ?? [];

  return { boards, cursorRef, isPending, isFetchingNextPage, hasNextPage };
}
