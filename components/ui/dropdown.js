// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    return (
        React.createElement(Menu, { as: "div", className: "relative inline-block text-left" },
            React.createElement("div", null,
                React.createElement(MenuButton, { className: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" },
                    "Options",
                    React.createElement(ChevronDownIcon, { className: "-mr-1 h-5 w-5 text-gray-400", "aria-hidden": "true" })
                )
            ),

            React.createElement(MenuItems, {
                transition: true,
                className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            },
                React.createElement("div", { className: "py-1" },
                    React.createElement(MenuItem, null,
                        ({ focus }) =>
                            React.createElement("a", {
                                href: "#",
                                className: classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')
                            },
                                "Account settings"
                            )
                    ),
                    React.createElement(MenuItem, null,
                        ({ focus }) =>
                            React.createElement("a", {
                                href: "#",
                                className: classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')
                            },
                                "Support"
                            )
                    ),
                    React.createElement(MenuItem, null,
                        ({ focus }) =>
                            React.createElement("a", {
                                href: "#",
                                className: classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')
                            },
                                "License"
                            )
                    ),
                    React.createElement("form", { method: "POST", action: "#" },
                        React.createElement(MenuItem, null,
                            ({ focus }) =>
                                React.createElement("button", {
                                    type: "submit",
                                    className: classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full px-4 py-2 text-left text-sm',
                                    )
                                },
                                    "Sign out"
                                )
                        )
                    )
                )
            )
        )
    );
}
