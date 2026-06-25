import '@/app/ui/global.css';
import SideNav from '@/app/ui/dashboard/sidenav';
import { inter } from 'app/ui/fonts'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
            <div className='w-full flex-none md:w-64'>
                <SideNav />
            </div>
            <div >
                <div className={`className="grow p-6 md:overflow-y-auto md:p-12" ${inter.className} antialiased`}>{children}</div>
            </div >
        </div>

    );
}
