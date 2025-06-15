import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ImageIcon, ListIcon } from "lucide-react";

export type ViewMode = "list" | "card";

export function ViewModeToggle({
  value,
  onChange,
}: {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}) {
  return (
    <Tabs defaultValue={value} onValueChange={(e) => onChange(e as ViewMode)}>
      <TabsList>
        <TabsTrigger value="list">
          <ListIcon />
        </TabsTrigger>
        <TabsTrigger value="cards">
          <ImageIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
