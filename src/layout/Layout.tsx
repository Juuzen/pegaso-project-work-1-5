import { Content } from "./content/Content";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Footer />
      <Content />
    </div>
  );
};
