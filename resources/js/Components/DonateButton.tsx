export default function DonateButton({ className }: { className?: string }) {
    return (
        <button
            className={`rounded-full align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-blue-900/40 dark:hover:shadow-blue-700/40 ${className}`}
        >
            Donate
        </button>
    );
}
