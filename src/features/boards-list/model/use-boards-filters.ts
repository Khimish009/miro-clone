import { useState } from "react";

export type BoardsSortOption =
  | "createdAt"
  | "updatedAt"
  | "lastOpenedAt"
  | "name";

export type BoardFilters = {
  search: string;
  sort: BoardsSortOption;
};

export function useBoardsFilters() {
  const [sort, setSort] = useState<BoardsSortOption>("lastOpenedAt");
  const [search, setSearch] = useState<string>("");

  return {
    sort,
    search,
    setSort,
    setSearch,
  };
}
