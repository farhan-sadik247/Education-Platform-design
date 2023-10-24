import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";
// import { Button } from "./ui/button";
export const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-sky-200 shadow-sm">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    )
}