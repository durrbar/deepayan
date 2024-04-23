import { Menu, Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { Fragment } from "react/jsx-runtime";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

interface MenuItem {
    label: string;
    link: string;
    children?: MenuItem[];
}

interface DropDownMenuItem {
    label: string;
    children: MenuItem[];
}

interface Props {
    menuItems: MenuItem[];
}

const MenuItem = ({ label, link }: MenuItem) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    href={link}
                    className={classNames(
                        active
                            ? " text-blue-700 dark:text-blue-500"
                            : "text-black dark:text-white",
                        "block px-4 py-2 text-sm"
                    )}
                >
                    <li className="font-medium">{label}</li>
                </Link>
            )}
        </Menu.Item>
    );
};

const DropdownMenu = ({ label, children }: DropDownMenuItem) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <div>
                    <Menu.Button
                        className={classNames(
                            active
                                ? " text-blue-700 dark:text-blue-500"
                                : "text-black dark:text-white",
                            "relative top-0 px-4 py-2 "
                        )}
                    >
                        <li className="font-medium">{label}</li>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 dark:bg-slate-600 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1 z-20">
                                {children.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        label={item.label}
                                        link={item.link}
                                    />
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </div>
            )}
        </Menu.Item>
    );
};

export default function MainNavbar({ menuItems }: Props) {
    return (
        <Menu
            as="div"
            className="relative list-none text-left items-center flex flex-row"
        >
            {menuItems.map((item, index) =>
                item.children ? (
                    <DropdownMenu
                        key={index}
                        label={item.label}
                        children={item.children}
                    />
                ) : (
                    <MenuItem key={index} label={item.label} link={item.link} />
                )
            )}
        </Menu>
    );
}
