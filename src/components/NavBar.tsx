import { Avatar } from '@pikoloo/darwin-ui';

export const NavBar = () => {
    return (
        <header className="sticky top-0 z-30 w-full bg-transparent border-b border-zinc-200 dark:border-white/10">
            <ul>
                <li className="flex items-center justify-end h-14 px-4">
                    <Avatar fallback='P' glass={true} size="lg" />
                </li>
            </ul>

        </header>
    );
}

