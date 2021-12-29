import React from 'react';
import MenuItem from "./navbar/MenuItem";
import MenuDrop from "./navbar/MenuDrop";

const Navbar = ({}) => (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"/>
            </div>
            <div className="sidebar-brand-text mx-3">Cliner <sup>**</sup></div>
        </a>
        <hr className="sidebar-divider my-0"/>
        <MenuItem title={"Dashboard"} link={"/"} icon={"tachometer-alt"}/>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            Content
        </div>
        <MenuItem title={"Posts"} icon={"newspaper"} link={"/posts"}/>
        <MenuItem title={"Comments"} icon={"comment-dots"} link={"/comments"}/>
        <MenuItem title={"Albums"} icon={"folder"} link={"/albums"}/>
        <MenuItem title={"Photos"} icon={"photo-video"} link={"/photos"}/>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            Mgt
        </div>
        <MenuDrop
            icon={"user-friends"} title={"Users"} header={"User Mgt"}
            links={[{label: "Todos", link: "/users/todos"}, {label: "Users", link: "/users"}]}
        />
        <hr className="sidebar-divider d-none d-md-block"/>
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"/>
        </div>
    </ul>
);

export default Navbar;
