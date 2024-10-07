import { ROUTES } from "@/constants/routes";
import Link from "next/link";

const Menu = () => {
    return (
        <>
            <Link href={ROUTES.first} >TELA UM</Link>
            <Link href={ROUTES.second} >TELA DOIS</Link>
        </>
    )
}

export default Menu;