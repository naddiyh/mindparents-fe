import { SideBar } from "@/features/SideBar/AdminSideBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-root">
      <SideBar />
      {children}
    </main>
  );
}
