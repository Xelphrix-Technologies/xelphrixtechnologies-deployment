export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-gray-800 px-6 py-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:items-center">
        <div>
          <p className="text-lg font-semibold text-[#EAEFEF]">Xelphrix Technologies</p>
          <p className="mt-2 text-sm text-gray-400">
            Cloud architecture, SaaS engineering, and enterprise automation solutions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 md:justify-center">
          <a href="/privacy" className="transition hover:text-[#FF9B51]">Privacy</a>
          <a href="/terms" className="transition hover:text-[#FF9B51]">Terms</a>
          <a href="mailto:info@xelphrixtechnologies.com" className="transition hover:text-[#FF9B51]">
            info@xelphrixtechnologies.com
          </a>
        </div>

        <div className="text-sm text-gray-400 md:text-right">
          © {new Date().getFullYear()} Xelphrix Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}