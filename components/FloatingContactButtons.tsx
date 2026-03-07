export default function FloatingContactButtons() {
  const whatsappNumber = "919217354100";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const email = "info@xelphrixtechnologies.com";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <div className="group relative flex items-center justify-end">
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-[#25343F] px-3 py-1.5 text-sm font-medium text-[#EAEFEF] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
          WhatsApp
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform duration-200 hover:scale-105"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.84 11.84 0 0012.07 0C5.53 0 .2 5.32.2 11.86c0 2.09.55 4.14 1.59 5.94L0 24l6.38-1.67a11.77 11.77 0 005.67 1.45h.01c6.54 0 11.87-5.32 11.88-11.86a11.8 11.8 0 00-3.42-8.44zM12.06 21.8h-.01a9.8 9.8 0 01-4.99-1.36l-.36-.21-3.79 1 1.01-3.69-.24-.38a9.82 9.82 0 01-1.52-5.26c0-5.43 4.42-9.85 9.86-9.85 2.64 0 5.12 1.03 6.98 2.89a9.78 9.78 0 012.89 6.97c0 5.44-4.42 9.86-9.84 9.86zm5.4-7.38c-.3-.15-1.78-.88-2.06-.98-.28-.11-.48-.15-.68.14-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.75-1.63-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.65-.93-2.26-.24-.58-.49-.5-.68-.5l-.58-.01c-.2 0-.53.07-.8.38-.28.3-1.06 1.04-1.06 2.53 0 1.49 1.09 2.92 1.24 3.12.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z" />
          </svg>
        </a>
      </div>

      <div className="group relative flex items-center justify-end">
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-[#25343F] px-3 py-1.5 text-sm font-medium text-[#EAEFEF] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
          Email
        </span>
        <a
          href={`mailto:${email}`}
          aria-label="Send an email"
          className="flex items-center justify-center rounded-full bg-[#25343F] p-4 text-[#EAEFEF] shadow-lg transition-transform duration-200 hover:scale-105"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
            <path d="M22 7 13.03 12.7a2 2 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
