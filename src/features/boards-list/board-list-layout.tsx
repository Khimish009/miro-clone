import type { ReactNode } from "react";

export function BoardListLayout({ header }: { header: ReactNode }) {
  return <div className="container mx-auto p-4">{header}</div>;
}

export function BoardListLayoutHeader({
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
