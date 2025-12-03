import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";

import { navLinks, navIcons } from "#constants";

dayjs.locale("es");

const Navbar = () => {
    const [date, setDate] = useState(dayjs());

    useEffect(() => {
        setDate(dayjs());

        const interval = setInterval(() => {
            setDate(dayjs());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const formattedDate = date.format("ddd D MMM HH:mm").replace(".", "");
    const displayDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Logo" />
                <p className="font-bold">Daniel's portfolio</p>

                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <time>{displayDate}</time>
            </div>
        </nav>
    );
};

export default Navbar;
