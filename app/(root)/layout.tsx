// import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MyComponent } from "../aybubot/voiceflow";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-root">
      <Navbar />
      {children}
      <script type="script/javascript">
        <MyComponent />
      </script>
    </main>
  );
}
