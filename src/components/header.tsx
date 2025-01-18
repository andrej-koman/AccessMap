export default function Header() {
  return (
    <header
      className="fixed left-0 top-0 h-max w-full p-2"
      style={{ zIndex: 100 }}
    >
      <div className="flex items-center justify-between rounded-xl bg-white px-8 py-4 shadow-xl">
        {/* Left side */}
        <div></div>
        {/* Middle with logo */}
        <h1 className="relative flex select-none flex-row items-baseline text-4xl font-bold">
          <span className="tracking-light text-black">
            Access
            <span className="text-primary">Map</span>
          </span>
        </h1>
        {/* Right side */}
        <div></div>
      </div>
    </header>
  );
}
