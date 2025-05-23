import { rqClient } from "@/shared/api/instance";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { Card, CardHeader } from "@/shared/ui/kit/card";
import { href, Link } from "react-router-dom";

function BoardsListPage() {
  const boardsQuery = rqClient.useQuery("get", "/boards");

  return (
    <div>
      {boardsQuery.data?.map((board) => (
        <Card key={board.id}>
          <CardHeader>
            <Button asChild variant="link">
              <Link to={href(ROUTES.BOARD, { boardId: board.id })}>
                {board.name}
              </Link>
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export const Component = BoardsListPage;
