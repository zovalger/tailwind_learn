import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhySelect from "@/components/WhySelect";
import About from "@/components/About";
import Image from "next/image";
import ThePrograms from "@/components/ThePrograms";
import Resources from "@/components/Resources";
import Motivation from "@/components/Motivation";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="">
			<Navbar />

			<Hero />

			<WhySelect />

			<About />

			<ThePrograms />

			<Resources />

			<Motivation />

			<Footer />

		
		</main>
	);
}
