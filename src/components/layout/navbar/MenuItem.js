import React from 'react';
import ActiveLink from "../../routing/ActiveLink";

const MenuItem = ({title = "", link = "", icon = ""}) => (
    <ActiveLink activeClassName={"active"} href={link} passHref>
        <li className="nav-item cursor-pointer">
            <a className="nav-link" href={link}>
                <i className={`fas fa-fw fa-${icon}`}/>
                <span>{title}</span>
            </a>
        </li>
    </ActiveLink>
);

export default MenuItem;
