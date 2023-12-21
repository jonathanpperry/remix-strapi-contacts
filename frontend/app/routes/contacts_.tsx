import { Outlet } from "@remix-run/react";

export default function ContactsRoute() {
  return (
    <div>
      No contact currently selected.
      <Outlet />
    </div>
  );
}
