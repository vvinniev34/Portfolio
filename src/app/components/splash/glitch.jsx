"use client";
import React, { useEffect, useState } from 'react';
import { scrollDown, ArrowSVG } from './animatedArrow';

export default function Glitch() {
	// 22 characters
	const texts = ["See what I'm building!", "Read about my projects", "Join me on my journey!"];
	const [dataValue, setDataValue] = useState(texts[0]);
	const [textIndex, setTextIndex] = useState(1);
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	useEffect(() => {
		const textChangeEffect = setInterval(() => {

			let iteration = 0;
			let text = dataValue;
			const textChangeTimer = setInterval(() => {
				text = text.split("").map((letter, index) => {
					if (index < iteration) {
						if (index < texts[textIndex].length) {
							return texts[textIndex][index];
						} else {
							return text[index];
						}
					}

					if (index < texts[textIndex].length) {
						return letters[Math.floor(Math.random() * 26)];
					} else {
						return text[index];
					}
				})
					.join("");
				iteration += 1 / 2;
				if (iteration >= Math.max(text.length, texts[textIndex].length)) {
					clearInterval(textChangeTimer);
					// Cycle to next text
					setTextIndex((textIndex + 1) % texts.length);
				}
				setDataValue(text);
			}, 30);



		}, 3500);

		return () => {
			clearInterval(textChangeEffect);
		}
	}, [textIndex]);

	return (
		<h2 
			className="font-mono text-white hover:text-lightblue text-lg sm:text-xl md:text-2xl" 
			onClick={() => scrollDown()}
			style={{cursor:"pointer"}}
		>
			{dataValue}
		</h2>
	);
}

export function LearnMoreScroll() {
	return (
		<div 
			className="flex items-center justify-center" 
			style={{position:"absolute", height :"6rem", bottom:"5.5rem"}}
		>	
			<div className='pulse' style={{padding:"0.75rem", paddingTop:"0.25rem", paddingBottom:"0.25rem"}}>
				<div 
					className="flex flex-col items-center justify-center animate-fade-in font-mono text-white fill-white scrollHover text-xl"
					style={{cursor:"pointer", maxHeight:"4rem"}}
					onClick={() => scrollDown()}
				>
					<div>Learn More</div>
					<div
						style={{width:"32px", cursor:"pointer"}}
					>
						<ArrowSVG/>
					</div>
				</div>
			</div>
		</div>
	);
}