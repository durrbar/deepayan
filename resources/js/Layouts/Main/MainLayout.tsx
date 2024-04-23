import { PropsWithChildren } from "react";

import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
            <MainFooter />
        </>
    );
}
