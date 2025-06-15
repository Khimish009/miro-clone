import type { ReactNode, RefObject } from "react";

export function BoardsListLayout({
  header,
  filters,
  list,
}: {
  header: ReactNode;
  filters: ReactNode;
  list: ReactNode;
}) {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-6">
      {header}
      {filters}
      {list}
    </div>
  );
}

export function BoardsListLayoutHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <div className="text-2xl font-bold">{title}</div>
        {description && <p className="text-gray-500">{description}</p>}

        {actions}
      </div>
    </div>
  );
}

export function BoardsListFilters({
  sort,
  filters,
  actions,
}: {
  sort: ReactNode;
  filters: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      {filters && (
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-500">Filter by</div>
          {filters}
        </div>
      )}
      {sort && (
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-500">Sort by</div>
          {sort}
        </div>
      )}
      {actions && <div className="ml-auto">{actions}</div>}
    </div>
  );
}

export function BoardsListLayoutContent({
  children,
  cursorRef,
  isEmpty,
  hasCursor,
  isPending,
  isPendingNext,
}: {
  children?: ReactNode;
  cursorRef?: RefObject<HTMLDivElement>;
  isEmpty?: boolean;
  hasCursor?: boolean;
  isPending?: boolean;
  isPendingNext?: boolean;
}) {
  return (
    <div>
      {isPending && <div className="text-center py-10">Загрузка...</div>}

      {!isPending && children}

      {isEmpty && !isPending && (
        <div className="text-center py-10">Доски не найдены</div>
      )}

      {hasCursor && (
        <div ref={cursorRef} className="text-center py-8">
          {isPendingNext && "Загрузка дополнительных досок..."}
        </div>
      )}
    </div>
  );
}

export function BoardsListCardsLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}

export function BoardsListListLayout({ children }: { children?: ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
