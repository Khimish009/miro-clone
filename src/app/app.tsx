import { AppHeader } from "@/features/header";
import { ROUTES } from "@/shared/model/routes";
import { Outlet, useLocation } from "react-router-dom";

export function App() {
  const { pathname } = useLocation();

  const isAuthPage = pathname === ROUTES.LOGIN || pathname === ROUTES.REGISTER;

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </div>
  );
}
