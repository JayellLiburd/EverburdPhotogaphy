import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "EveningBurd Photography",
	description: "Capturing Beauty, One Shot at a Time",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<nav id='globalnav'>
					<ul>
						<Link href='/'>Home</Link>
						<Link href='/gallery'>Gallery</Link>
					</ul>
					<Image id='logo' src='/images/logo.png' alt='EveningBurd Photography' width={640 / 8} height={434 / 8} />
					<span>
						<Link href='/booking'>Book Now</Link>
						<Link href='/booking'>My Booking</Link>
					</span>
				</nav>
				{children}
			</body>
		</html>
	);
}
