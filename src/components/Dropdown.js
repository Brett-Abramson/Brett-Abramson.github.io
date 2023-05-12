import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

const links = [
  { href: "#", label: "Projects" },
  { href: "#", label: "Tools" },
  { href: "#", label: "Contacts" },
];

const DropDown = () => {
  return (
    <div className="md:hidden fixed">
      <Menu>
        <Menu.Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Menu.Button>
        <Transition
          enter="transition duration-250 ease-out"
          enterFrom="transform scale-50 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items>
            {links.map((link) => {
              return (
                <Menu.Item key={link.href} as={Fragment}>
                  {({ active }) => (
                    <Link
                      href={link.href}
                      className={`${
                        active
                          ? `bg-blue-500 text-white`
                          : `bg-white text-black`
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropDown;
