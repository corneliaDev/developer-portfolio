// src/routes/AppRoutes.tsx
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Impressum = lazy(() => import("../pages/Impressum"));
const Datenschutz = lazy(() => import("../pages/Datenschutz"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <span>Loading…</span>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}>
          {/* nested “section” routes */}
          <Route path="hero" element={<Navigate to="/#hero" replace />} />
          <Route
            path="about-me"
            element={<Navigate to="/#about-me" replace />}
          />
          <Route
            path="experience"
            element={<Navigate to="/#experience" replace />}
          />
          <Route
            path="projects"
            element={<Navigate to="/#projects" replace />}
          />
        </Route>

        {/* Static pages */}
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
