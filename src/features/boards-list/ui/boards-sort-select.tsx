import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/kit/select";
import type { BoardsSortOption } from "./use-boards-filters";

export function BoardsSortSelect({
  value,
  onChange,
}: {
  value: BoardsSortOption;
  onChange: (value: BoardsSortOption) => void;
}) {
  return (
    <Select
      value={value}
      onValueChange={(value) => onChange(value as BoardsSortOption)}
    >
      <SelectTrigger id="sort" className="w-full">
        <SelectValue placeholder="Сортировка" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="lastOpenedAt">По дате открытия</SelectItem>
        <SelectItem value="createdAt">По дате создания</SelectItem>
        <SelectItem value="updatedAt">По дате обновления</SelectItem>
        <SelectItem value="name">По имени</SelectItem>
      </SelectContent>
    </Select>
  );
}
