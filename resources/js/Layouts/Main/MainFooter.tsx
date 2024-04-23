import { footerLinks } from "@/constants/footerLinks";
import { Link } from "@inertiajs/react";

const currentYear = new Date().getFullYear();

export default function MainFooter() {
    return (
        <footer className="px-8 py-14 dark:bg-slate-400">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
                    {footerLinks.map(({ link, label }, index) => (
                        <ul key={index}>
                            <li>
                                <Link
                                    href={link}
                                    className="font-medium text-gray-500 dark:text-gray-100 transition-colors hover:text-gray-900 dark:hover:text-gray-900"
                                >
                                    {label}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
                <p className="mt-6 !text-sm !font-normal text-gray-500 dark:text-gray-100">
                    Copyright &copy; {currentYear} Deepayan Foundation
                </p>
            </div>
        </footer>
    );
}
