import { MenuComponent } from '@/types';

export default function Footer({
    menuComponents,
}: {
    menuComponents: MenuComponent[];
}) {
    return (
        <footer
            className={
                'flex items-center justify-center p-2 md:justify-between'
            }
        >
            <div>
                <p>
                    &copy; {new Date().getFullYear()}{' '}
                    <span className={'ms-2 me-2'}>•</span> Luca Fabbietti{' '}
                    <span className={'ms-2 me-2'}>•</span> All rights reserved
                </p>
            </div>
            <div className={'hidden md:block'}>
                {menuComponents.map((menuComponent, index) => {
                    if (index < menuComponents.length - 1) {
                        return (
                            <>
                                <MenuItem
                                    menuComponent={menuComponent}
                                    index={index}
                                />
                                <span
                                    key={`separator-${index}`}
                                    className={'ms-2 me-2'}
                                >
                                    •
                                </span>
                            </>
                        );
                    } else {
                        return (
                            <MenuItem
                                menuComponent={menuComponent}
                                index={index}
                            />
                        );
                    }
                })}
            </div>
        </footer>
    );
}

function MenuItem({
    menuComponent,
    index,
}: {
    menuComponent: MenuComponent;
    index: number;
}) {
    return (
        <a
            key={index}
            href={menuComponent.href}
            className={'ms-2 me-2 hover:underline'}
        >
            {menuComponent.title}
        </a>
    );
}
