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
            <Routes>
              <ToastProvider>
                <FileRoutes />
              </ToastProvider>
            </Routes>
          </ErrorBoundary>
        </Suspense>
        {location.pathname === "/login" ? "" : <BottomNav />}
        <Scripts />
      </Body>
    </Html>
  );
}
