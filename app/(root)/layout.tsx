// import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MyComponent } from "../aybubot/voiceflow";
import Providers from "../providers";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-root">
      <Providers>
        <Navbar />
        {children}
        <script type="script/javascript">
          <MyComponent />
        </script>
      </Providers>
    </main>
  );
}
