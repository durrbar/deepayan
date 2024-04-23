import React from "react";
import { Link } from "@inertiajs/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ApplicationLogo from "@/Components/ApplicationLogo";
import DarkModeToggle from "@/Components/DarkModeToggle";
import MainNavbar from "./MainNavbar";
import { mainNavConfig } from "@/constants/mainNavConfig";

interface NavItemPropsType {
    label: string;
    link: string;
}

function NavItem({ label, link }: NavItemPropsType) {
    return (
        <Link href={link}>
            <li className="p-1 font-medium">{label}</li>
        </Link>
    );
}

function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-3 text-black dark:text-white lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            <NavItem label="Home" link="/" />
            <NavItem label="Who We Are" link="/who-we-are" />
            <NavItem label="What We Do" link="/what-we-do" />
            <NavItem label="Contact Us" link="/contact-us" />
        </ul>
    );
}

export function NavbarWithSimpleLinks() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);

    return (
        <>
            <nav className="block min-w-full container max-w-screen-xl px-4 py-2 mx-auto text-black bg-white dark:bg-slate-800 bg-opacity-90 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 fixed z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
                    <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto" />
                            </Link>
                        </div>
                        <div className="flex gap-5">
                            <div className="hidden lg:block content-center">
                                <MainNavbar menuItems={mainNavConfig} />
                            </div>
                            <DarkModeToggle />
                            <button className="hidden lg:block rounded-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                                Donate
                            </button>
                            <button
                                onClick={handleOpen}
                                className="ml-auto inline-block text-blue-gray-900 lg:hidden"
                            >
                                {open ? (
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {open && (
                <div className="rounded-xl bg-white text-black dark:bg-slate-600 py-2 px-4 bg-opacity-90 fixed z-30 w-full mt-14">
                    <NavList />
                    <button
                        className="mb-2 rounded-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-blue-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        color="blue"
                    >
                        Donate
                    </button>
                </div>
            )}
        </>
    );
}

export default NavbarWithSimpleLinks;
