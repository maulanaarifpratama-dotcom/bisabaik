import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Seo, { type BreadcrumbItem } from "./Seo";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  /**
   * Breadcrumb trail for this page (excluding Home, which is auto-prepended).
   * If omitted, no BreadcrumbList JSON-LD is emitted.
   */
  breadcrumbs?: BreadcrumbItem[];
}

const Layout = ({ children, title, description, breadcrumbs }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo title={title} description={description} breadcrumbs={breadcrumbs} />
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
