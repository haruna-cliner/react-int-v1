import React from 'react';
import ActiveLink from "../../routing/ActiveLink";

const MenuDrop = ({links = [], icon = "", header = "", title = ""}) => {
    const id = title.toLocaleLowerCase();
    return (
        <li className="nav-item">
            <a className="nav-link" href="#" data-toggle="collapse" data-target={`#${id}`}
               aria-expanded="true" aria-controls="collapseTwo">
                <i className={`fas fa-fw fa-${icon}`}/>
                <span>{title}</span>
            </a>
            <div id={id} className="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">{header}</h6>
                    {
                        !!links
                        && !!links.length
                        && links.map((e, index) =>
                            <ActiveLink key={index} activeClassName={"active"} href={e.link} passHref>
                                <a className="collapse-item">{e.label}</a>
                            </ActiveLink>
                        )
                    }
                </div>
            </div>
        </li>
    );
};

export default MenuDrop;
