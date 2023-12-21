import { Outlet } from "@remix-run/react";

export default function ContactsRoute() {
  return (
    <div>
      This will show up when no items are selected
      <Outlet />
    </div>
  );
}
