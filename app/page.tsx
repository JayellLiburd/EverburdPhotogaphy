import Image from "next/image";
import "./home.css";
import Link from "next/link";
import Hgologo from "@/public/svg/hgologo";
import Grad from "@/public/svg/grad";
import Building from "@/public/svg/building";

export default function Home() {
	const services: { name: string; description: string }[] = [
		{ name: "Portrait & Headshots", description: "Portraits are a great way to capture the essence of a person." },
		{ name: "Graduation", description: "Graduation photography is a great way to capture the moment." },
		{ name: "Maternity", description: "Portraits are a great way to capture the essence of a person." },
		{ name: "Creative", description: "Creative photography is a great way to capture the moment." },
	];

	const pricingPlan: { name: string; includes: string[]; price: number }[] = [
		{ name: "Mini Shoot", includes: ["1 hour", "1 location", "15 edited photos"], price: 95.99 },
		{
			name: "Standard Shoot",
			includes: ["2 hours", "up to 2 locations", "2 Outfit Changes", "20 edited photos"],
			price: 149.99,
		},
		{
			name: "3 for 3 Shoot",
			includes: ["3 hours", "up to 3 locations", "unlimited outfit changes", "30 edited photos"],
			price: 299.99,
		},
		{
			name: "Paparazzi",
			includes: ["6 hours", "up to 5 locations", "unlimited outfit changes", "40 edited photos"],
			price: 719.99,
		},
	];

	return (
		<main>
			<div id='hero'>
				<span id='herotext'>
					<h1>Houston Graduations</h1>
					<p>Capturing Beauty, One Shot at a Time</p>
					<Link href='/gallery'>View My Work →</Link>
				</span>
				<Image id='heroimg' src='/images/DCGraduation.jpg' alt='Photography' width={1920} height={1080} />
				<span className='imgcontainer'>
					<Image src='/images/DCswingfull.jpg' alt='Photography' fill />
				</span>
				<span className='imgcontainer'>
					<Image src='/images/DCmed.jpeg' alt='Photography' fill />
				</span>
			</div>
			<div id='known'>
				<span>
					<Building style={{ marginRight: "0.5rem", color: "black" }} />
					<p>Chorinthian</p>
				</span>
				<span>
					<Hgologo style={{ scale: 0.5 }} />
					<p>Houston Grand Opera</p>
				</span>
				<span>
					<Grad style={{ marginRight: "0.5rem", color: "black" }} />
					<p>Graduations</p>
				</span>
			</div>
			<div id='content'>
				<div className='section-header'>
					<h2>My Services</h2>
					<summary>
						Why describe your precious moments when you can show them? Our photography brings your memories to life.
					</summary>
					<div id='services'>
						<span className='list'>
							{services.map((service, i) => (
								<label key={service.name}>
									<p>{service.name}</p>
									<p>{service.description}</p>
									<input type='radio' name='service' hidden defaultChecked={i === 0} />
								</label>
							))}
						</span>
						<span>
							<Image src='/images/WPrealeastate.jpg' alt='Photography' width={3412} height={2284} />
						</span>
					</div>
				</div>
				<div className='section-header'>
					<p>The Features Of My</p>
					<h2>Portfolio</h2>
					<span id='links'>
						<label>
							<p>all</p>
							<input type='radio' name='portfolio' hidden defaultChecked />
						</label>
						<label>
							<p>portrait</p>
							<input type='radio' name='portfolio' hidden />
						</label>
						<label>
							<p>maternity</p>
							<input type='radio' name='portfolio' hidden />
						</label>
						<label>
							<p>graduation</p>
							<input type='radio' name='portfolio' hidden />
						</label>
					</span>
					<div id='portfolio'>
						{Array.from({ length: 8 }).map((_, i) => (
							<span key={i}>
								<Image src={""} alt='' width={1080} height={1920} />
								<Image src='/images/Burd.png' alt='bird' width={500} height={500} />
							</span>
						))}
					</div>
				</div>
				<div className='section-header'>
					<h2>Our Pricing Plan</h2>
					<summary>
						Why describe your precious moments when you can show them? Our photography brings your memories to life.
					</summary>
					<div id='plans'>
						<span className='list'>
							{pricingPlan.map((plan) => (
								<label key={plan.name}>
									<span>
										<p>{plan.name}</p>
										<small>includes</small>
										{plan.includes.map((feature) => (
											<p key={feature}>{feature}</p>
										))}
									</span>
									<data>${plan.price}</data>
									<input type='radio' name='plans' hidden />
								</label>
							))}
						</span>
					</div>
				</div>
			</div>
			<div id='about'>
				<h2>embodying la belle vie experience</h2>
				<small>embodying the good life experience</small>
				<p>
					I am a photographer based in Houston, Texas. I specialize in portrait photography, capturing the essence of a
					person. I have worked with many clients, including Houston Grand Opera, Chorinthian, and many more. I have
					also worked with many graduates, capturing their special moments.
				</p>
				<Image src='/images/Burd.png' alt='bird' width={500} height={500} />
			</div>
		</main>
	);
}
