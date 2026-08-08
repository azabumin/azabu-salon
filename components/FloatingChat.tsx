export default function FloatingChat() {
  return (
    <a
      href="#"
      aria-label="LINEで相談する"
      className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-[#06C755] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5c0 4.7-4.5 8.5-9 8.5-1 0-2-.2-2.9-.5L4 21l1.2-3.6C3.9 16 3 13.9 3 11.5 3 6.8 7.5 3 12 3s9 3.8 9 8.5z" />
      </svg>
    </a>
  );
}
