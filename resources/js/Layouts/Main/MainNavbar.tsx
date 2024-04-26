import { Menu, Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface MenuItem {
    label: string;
    link: string;
    children?: MenuItem[];
}

interface DropDownMenuItem {
    label: string;
    open: boolean;
    handleOpen: () => void;
    children: MenuItem[];
}

interface Props {
    menuItems: MenuItem[];
}

const MenuItem = ({ label, link }: MenuItem) => {
    return (
        <Menu.Item>
            <Link href={route(link)} className="menu-button">
                <li className="font-medium">{label}</li>
            </Link>
        </Menu.Item>
    );
};

const DropdownMenu = ({
    label,
    children,
    handleOpen,
    open,
}: DropDownMenuItem) => {
    return (
        <Menu.Item>
            <div>
                <Menu.Button onClick={handleOpen} className="menu-button">
                    <li className="font-medium inline-flex">
                        {label}
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5 opacity-40"
                            aria-hidden="true"
                        />
                    </li>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    show={open}
                    enter="transition fade-in duration-1000"
                    enterFrom="transform opacity-0 scale-75"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition fade-out duration-1000"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-75"
                >
                    <Menu.Items className="absolute divide-y  flex flex-col-reverse divide-gray-100 dark:bg-slate-600 z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 px-1 focus:bg-violet-500">
                            {children.map(({ label, link }, index) => (
                                <MenuItem
                                    key={index}
                                    label={label}
                                    link={link}
                                />
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </div>
        </Menu.Item>
    );
};

export default function MainNavbar({ menuItems }: Props) {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const handleDropdownToggle = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    return (
        <Menu
            as="div"
            className="relative list-none text-left items-center flex flex-row"
        >
            {menuItems.map((item, index) =>
                item.children ? (
                    <DropdownMenu
                        key={index}
                        handleOpen={() => handleDropdownToggle(index)}
                        open={openDropdown === index}
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
