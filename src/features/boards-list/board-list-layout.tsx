import type { ReactNode } from "react";

export function BoardsListLayout({
  header,
  filters,
  children,
}: {
  header: ReactNode;
  filters: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-6">
      {header}
      {filters}
      {children}
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
