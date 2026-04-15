import { Logo } from "./logo";

export function Footer({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const bg = theme === "dark" ? "bg-neutral-950 text-white/60" : "bg-neutral-50 text-neutral-500";
  const border = theme === "dark" ? "border-white/10" : "border-neutral-200";

  return (
    <footer className={`${bg} border-t ${border} py-12`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="small" />
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
          <p className="text-sm">© 2025 MonClips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
