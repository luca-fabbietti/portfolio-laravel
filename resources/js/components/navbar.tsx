import { Link } from '@inertiajs/react';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { MenuComponent } from '@/types';

export default function Navbar({
    menuComponents,
}: {
    menuComponents: MenuComponent[];
}) {
    return (
        <NavigationMenu viewport={false} className={''}>
            <NavigationMenuList>
                {menuComponents.map((element: MenuComponent) => {
                    return (
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={
                                    navigationMenuTriggerStyle() +
                                    ' px-2! font-bold'
                                }
                            >
                                <Link href={element.href}>{element.title}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
