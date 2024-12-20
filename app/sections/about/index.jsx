"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>My name is Deep Shah. I successfully graduated from SilverOak university in 2021,</p>
						<p>
							During my university years, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p>So, officially, my programming journey began in 2022 as a React js developer.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with React js.
						</p>
						<p>
							After my initial foray into React.js, I delved further into expanding my skill set.
							Exploring beyond React, I took on a significant project using Next.js, leveraging its
							capabilities to develop a dynamic web application
						</p>
						<p className="my-3.5">
							While I I didn&apos;t undertake specific projects in Node.js, I dedicated myself to
							mastering Sails.js, a framework built on Node.js. Despite the absence of independent
							projects, I immersed myself in learning its functionalities and intricacies,
							supplementing my knowledge through various assignments provided by my company. These
							assignments provided invaluable hands-on experience, allowing me to solidify my
							understanding of Node.js through practical application within the context of
							real-world tasks.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
