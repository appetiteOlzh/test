import "swiper/css";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="full-page">{children}</div>;
}
