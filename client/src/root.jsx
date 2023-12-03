// @refresh reload
import { Suspense, createEffect } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { ToastProvider } from "./libs/components/ToastContainer";
import { BottomNav } from "./components";
export default function Root() {
  const location = useLocation();

  const active = (path) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <Html lang="en">
      <Head>
        <Title>PingSpace</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <ToastProvider>
              <Routes>
                <FileRoutes />
              </Routes>
            </ToastProvider>
          </ErrorBoundary>
        </Suspense>
        {location.pathname === "/login" ? "" : <BottomNav />}
        <Scripts />
      </Body>
    </Html>
  );
}
