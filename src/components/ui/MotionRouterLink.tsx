// src/components/ui/MotionLink.tsx
// src/components/ui/MotionLink.tsx
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// Don’t pass a generic here — let motion() infer it.
export const MotionRouterLink = motion(RouterLink);
