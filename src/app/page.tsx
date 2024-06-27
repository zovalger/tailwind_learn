import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhySelect from "@/components/WhySelect";
import About from "@/components/About";
import Image from "next/image";
import ThePrograms from "@/components/ThePrograms";
import Resources from "@/components/Resources";

export default function Home() {
	return (
		<main>
			<Navbar />

			<Hero />

			<WhySelect />

			<About />
			<ThePrograms />

			<Resources />
		</main>
	);
}
