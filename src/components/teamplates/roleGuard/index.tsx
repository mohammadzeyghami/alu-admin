// components/RoleGuard.js

import { redirect } from "react-router-dom";
interface MyRoleGuardProps {
  allowedRoles: string[];
  userRoles: string[];
  children: React.ReactNode;
}

const RoleGuard = ({ allowedRoles, userRoles, children }: MyRoleGuardProps) => {
  const hasPermission = allowedRoles.some((role) => userRoles.includes(role));

  return hasPermission ? children : redirect("/unauthorized");
};

export { RoleGuard };
