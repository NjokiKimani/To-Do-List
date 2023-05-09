import React from "react";

//Assets imports
import { UserCircleIcon, CheckCircleIcon, Squares2X2Icon, ExclamationCircleIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="sideBar ml-5">
      <div className="sideBarWrapper">
        <div className="sideBarHeader">
            <h4 className="mt-3 opacity-75">Favorites</h4>
          <ul>
            <li className="flex gap-4 mt-3 mb-2">
              <Squares2X2Icon className="h-6 w-5 text-gray-600" /> All
            </li>
            <li className="flex gap-4 mb-2">
              <ExclamationCircleIcon className="h-6 w-5 text-gray-600" />
              <span>Important</span>
            </li>
            <li className="flex gap-4 mb-2">
              <UserCircleIcon className="h-6 w-5 text-gray-600" />
              <span>Personal</span>
            </li>
            <li className="flex gap-4 mb-2">
              <CalendarDaysIcon className="h-6 w-5 text-gray-600" />
              <span>Today</span>
            </li>
            <li className="flex gap-4">
              <CheckCircleIcon className="h-6 w-5 text-gray-600" />
              <span>Complete</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
