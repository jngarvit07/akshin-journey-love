import { useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-BSBFChxZ.jpg";
//#endregion
//#region src/assets/y1.jpg
var y1_default = "/assets/y1-BqKZROGA.jpg";
//#endregion
//#region src/assets/y2.jpg
var y2_default = "/assets/y2-BdulPzFt.jpg";
//#endregion
//#region src/assets/y3.jpg
var y3_default = "/assets/y3-CrDknQ_w.jpg";
//#endregion
//#region src/assets/y4.jpg
var y4_default = "/assets/y4-B7wFv0Ap.jpg";
//#endregion
//#region src/assets/y5.jpg
var y5_default = "/assets/y5-c0uE9SJx.jpg";
//#endregion
//#region src/assets/rose.jpg
var rose_default = "/assets/rose-D2YhXG-_.jpg";
//#endregion
//#region src/assets/h1.jpg
var h1_default = "/assets/h1-DucLMdsN.jpg";
//#endregion
//#region src/assets/h2.jpg
var h2_default = "/assets/h2-CO5Rtiua.jpg";
//#endregion
//#region src/assets/h3.jpg
var h3_default = "/assets/h3-DjxYcSgH.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var START = /* @__PURE__ */ new Date("2021-06-25T00:00:00");
var TARGET = /* @__PURE__ */ new Date("2026-06-25T00:00:00");
var timeline = [
	{
		year: "2021",
		title: "The Beginning",
		text: "Two strangers, one sunset, a thousand quiet sparks. Where it all started.",
		img: y1_default
	},
	{
		year: "2022",
		title: "Growing Together",
		text: "Late-night talks, golden walks, learning the language only we speak.",
		img: y2_default
	},
	{
		year: "2023",
		title: "Our Adventures",
		text: "New cities, mountain air, and a map we kept rewriting with every trip.",
		img: y3_default
	},
	{
		year: "2024",
		title: "Becoming Stronger",
		text: "Through every storm, we found shelter in each other. Always.",
		img: y4_default
	},
	{
		year: "2025",
		title: "Forever, In Progress",
		text: "Promises whispered, dreams shared, a future we are quietly building.",
		img: y5_default
	}
];
var moments = [
	{
		date: "Jun 25, 2021",
		title: "First Hello",
		text: "The day everything began."
	},
	{
		date: "Dec 31, 2022",
		title: "Our First New Year",
		text: "Midnight kisses under city lights."
	},
	{
		date: "Aug 14, 2023",
		title: "The Mountain Trip",
		text: "Where we left our hearts above the clouds."
	},
	{
		date: "Feb 14, 2024",
		title: "Letters & Roses",
		text: "A quiet Valentine that meant everything."
	},
	{
		date: "Jun 25, 2026",
		title: "5 Years",
		text: "And this is only the beginning."
	}
];
function Akshin() {
	return /* @__PURE__ */ jsxs("main", {
		className: "bg-stage relative min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ jsx(CursorGlow, {}),
			/* @__PURE__ */ jsx(Particles, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Countdown, {}),
			/* @__PURE__ */ jsx(Timeline, {}),
			/* @__PURE__ */ jsx(Gallery, {}),
			/* @__PURE__ */ jsx(Moments, {}),
			/* @__PURE__ */ jsx(Stats, {}),
			/* @__PURE__ */ jsx(Letter, {}),
			/* @__PURE__ */ jsx(MusicPlayer, {}),
			/* @__PURE__ */ jsx(FinalSection, {}),
			/* @__PURE__ */ jsxs("footer", {
				className: "relative z-10 py-10 text-center text-xs text-muted-foreground",
				children: [
					"Made with ",
					/* @__PURE__ */ jsx("span", {
						className: "text-soft-pink",
						children: "♥"
					}),
					" · Anish & Kinshu · 25.06.2021 — 25.06.2026"
				]
			})
		]
	});
}
function CursorGlow() {
	const ref = useRef(null);
	useEffect(() => {
		const onMove = (e) => {
			if (!ref.current) return;
			ref.current.style.left = `${e.clientX}px`;
			ref.current.style.top = `${e.clientY}px`;
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: "cursor-glow hidden md:block"
	});
}
function Particles() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	const dots = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
		left: Math.random() * 100,
		delay: Math.random() * 12,
		dur: 10 + Math.random() * 14,
		size: 2 + Math.random() * 5,
		key: i
	})), []);
	if (!mounted) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		children: dots.map((d) => /* @__PURE__ */ jsx("span", {
			className: "particle",
			style: {
				left: `${d.left}%`,
				width: d.size,
				height: d.size,
				animationDelay: `${d.delay}s`,
				animationDuration: `${d.dur}s`
			}
		}, d.key))
	});
}
function Hero() {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, .2], [0, 80]);
	const scale = useTransform(scrollYProgress, [0, .2], [1, 1.08]);
	const opacity = useTransform(scrollYProgress, [0, .2], [1, 0]);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				style: { scale },
				className: "absolute inset-0",
				children: [/* @__PURE__ */ jsx("img", {
					src: hero_default,
					alt: "",
					className: "h-full w-full object-cover opacity-60"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" })]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				style: {
					y,
					opacity
				},
				className: "relative z-10 px-6 text-center",
				children: [
					/* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .3
						},
						className: "mb-6 text-xs uppercase tracking-[0.5em] text-soft-pink/80",
						children: "25 · 06 · 2021 — 25 · 06 · 2026"
					}),
					/* @__PURE__ */ jsx(motion.h1, {
						initial: {
							opacity: 0,
							scale: .9,
							letterSpacing: "0.3em"
						},
						animate: {
							opacity: 1,
							scale: 1,
							letterSpacing: "-0.02em"
						},
						transition: {
							duration: 1.6,
							ease: [
								.2,
								.8,
								.2,
								1
							]
						},
						className: "text-gold text-[clamp(4.5rem,16vw,11rem)] font-light leading-none",
						children: "Akshin"
					}),
					/* @__PURE__ */ jsxs(motion.p, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1
						},
						className: "mt-4 font-serif text-xl italic text-foreground/85 sm:text-2xl",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "Anish"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mx-3 text-soft-pink",
								children: "&"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "Kinshu"
							})
						]
					}),
					/* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							scaleX: 0
						},
						animate: {
							opacity: 1,
							scaleX: 1
						},
						transition: {
							duration: 1.2,
							delay: .9
						},
						className: "shimmer mx-auto my-6 w-40 origin-center"
					}),
					/* @__PURE__ */ jsx(motion.h2, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1.1
						},
						className: "font-serif text-2xl font-light italic text-foreground/90 sm:text-3xl",
						children: "Celebrating 5 Years of Our Best Journey"
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: 1.4
						},
						className: "mt-4 text-sm tracking-[0.4em] text-rose-gold/90",
						children: "5 YEARS · INFINITE MEMORIES"
					}),
					/* @__PURE__ */ jsx(motion.a, {
						href: "#story",
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1.7
						},
						whileHover: { scale: 1.05 },
						whileTap: { scale: .97 },
						className: "glow-ring mt-10 inline-block rounded-full border border-rose-gold/50 bg-background/40 px-8 py-3 text-sm uppercase tracking-[0.3em] text-foreground backdrop-blur-md transition-colors hover:bg-rose-gold/20",
						style: { background: "linear-gradient(135deg, rgba(248,200,220,.1), rgba(212,175,140,.15))" },
						children: "Begin Our Story"
					})
				]
			}),
			/* @__PURE__ */ jsx(motion.div, {
				animate: { y: [
					0,
					12,
					0
				] },
				transition: {
					duration: 2.4,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.4em] text-foreground/60",
				children: "SCROLL"
			})
		]
	});
}
function useCountdown(target) {
	const [now, setNow] = useState(() => /* @__PURE__ */ new Date());
	useEffect(() => {
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	const diff = Math.max(0, target.getTime() - now.getTime());
	return {
		d: Math.floor(diff / 864e5),
		h: Math.floor(diff / 36e5 % 24),
		m: Math.floor(diff / 6e4 % 60),
		s: Math.floor(diff / 1e3 % 60),
		passed: diff === 0
	};
}
function Countdown() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	const { d, h, m, s, passed } = useCountdown(TARGET);
	return /* @__PURE__ */ jsxs("section", {
		id: "story",
		className: "relative z-10 mx-auto max-w-5xl px-6 py-24 text-center",
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-3 text-xs uppercase tracking-[0.4em] text-rose-gold",
			children: passed ? "Our day is here" : "Until our 5th anniversary"
		}), /* @__PURE__ */ jsx("div", {
			className: "glass mx-auto inline-flex flex-wrap items-center justify-center gap-4 px-6 py-6 sm:gap-10 sm:px-10",
			children: (mounted ? [
				{
					v: d,
					l: "Days"
				},
				{
					v: h,
					l: "Hours"
				},
				{
					v: m,
					l: "Minutes"
				},
				{
					v: s,
					l: "Seconds"
				}
			] : [
				{
					v: 0,
					l: "Days"
				},
				{
					v: 0,
					l: "Hours"
				},
				{
					v: 0,
					l: "Minutes"
				},
				{
					v: 0,
					l: "Seconds"
				}
			]).map((it) => /* @__PURE__ */ jsxs("div", {
				className: "min-w-[60px] sm:min-w-[80px]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-gold font-serif text-4xl font-light sm:text-6xl",
					children: String(it.v).padStart(2, "0")
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs",
					children: it.l
				})]
			}, it.l))
		})]
	});
}
function Timeline() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative z-10 mx-auto max-w-6xl px-6 py-24",
		children: [/* @__PURE__ */ jsx(Heading, {
			eyebrow: "Our Journey",
			title: "A Love Story in Five Chapters"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mt-16",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute left-4 top-0 h-full w-px md:left-1/2",
				style: { background: "linear-gradient(180deg, transparent, #d4af8c66, transparent)" }
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-20",
				children: timeline.map((t, i) => /* @__PURE__ */ jsx(TimelineRow, {
					item: t,
					index: i
				}, t.year))
			})]
		})]
	});
}
function TimelineRow({ item, index }) {
	const isRight = index % 2 === 1;
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 60
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			ease: [
				.2,
				.8,
				.2,
				1
			]
		},
		className: `relative grid items-center gap-8 md:grid-cols-2 ${isRight ? "md:[&>*:first-child]:order-2" : ""}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: `pl-12 md:pl-0 ${isRight ? "md:pl-12" : "md:pr-12 md:text-right"}`,
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-rose-gold font-serif text-6xl leading-none opacity-80",
						children: item.year
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-gold mt-2 font-serif text-3xl",
						children: item.title
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:ml-auto md:max-w-sm",
						children: [isRight ? "" : null, item.text]
					})
				]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				whileHover: {
					scale: 1.02,
					rotate: isRight ? -.5 : .5
				},
				transition: {
					type: "spring",
					stiffness: 200,
					damping: 20
				},
				className: "glass glow-ring relative ml-12 overflow-hidden md:ml-0 aspect-[4/5]",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: item.img,
						alt: item.title,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 hover:scale-110"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-soft-pink",
						children: ["Chapter ", index + 1]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-rose-gold shadow-[0_0_20px_#d4af8c] md:left-1/2" })
		]
	});
}
function Gallery() {
	const imgs = [
		hero_default,
		h1_default,
		y1_default,
		h2_default,
		y2_default,
		y3_default,
		h3_default,
		y4_default,
		y5_default,
		rose_default
	];
	const [active, setActive] = useState(null);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative z-10 mx-auto max-w-6xl px-6 py-24",
		children: [
			/* @__PURE__ */ jsx(Heading, {
				eyebrow: "Memory Gallery",
				title: "Moments We Keep Forever"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4",
				children: imgs.map((src, i) => /* @__PURE__ */ jsxs(motion.button, {
					onClick: () => setActive(i),
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: i % 6 * .06
					},
					whileHover: { scale: 1.02 },
					className: "glass group relative block w-full overflow-hidden break-inside-avoid",
					children: [
						/* @__PURE__ */ jsx("img", {
							src,
							alt: "",
							loading: "lazy",
							className: "w-full transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute bottom-3 left-3 translate-y-2 text-xs uppercase tracking-[0.3em] text-soft-pink opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100",
							children: ["Memory #", String(i + 1).padStart(2, "0")]
						})
					]
				}, i))
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: active !== null && /* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setActive(null),
				className: "fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-6 backdrop-blur-lg",
				children: /* @__PURE__ */ jsx(motion.img, {
					initial: {
						scale: .9,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .9,
						opacity: 0
					},
					src: imgs[active],
					className: "glow-ring max-h-[85vh] max-w-full rounded-xl object-contain",
					alt: ""
				}, active)
			}) })
		]
	});
}
function Moments() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative z-10 mx-auto max-w-6xl px-6 py-24",
		children: [/* @__PURE__ */ jsx(Heading, {
			eyebrow: "Special Moments",
			title: "Little Dates, Big Feelings"
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: moments.map((m, i) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .7,
					delay: i * .08
				},
				whileHover: { y: -8 },
				className: "glass relative overflow-hidden p-6",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-[0.3em] text-rose-gold",
						children: m.date
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-gold mt-3 font-serif text-2xl",
						children: m.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: m.text
					}),
					/* @__PURE__ */ jsx("div", {
						className: "heart-pulse absolute -bottom-4 -right-4 text-6xl text-soft-pink/15",
						children: "♥"
					})
				]
			}, m.title))
		})]
	});
}
function AnimatedNumber({ to }) {
	const [n, setN] = useState(0);
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) {
				const dur = 1800;
				const start = performance.now();
				const tick = (t) => {
					const p = Math.min(1, (t - start) / dur);
					const eased = 1 - Math.pow(1 - p, 3);
					setN(Math.round(to * eased));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
				io.disconnect();
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [to]);
	return /* @__PURE__ */ jsx("span", {
		ref,
		children: n.toLocaleString()
	});
}
function Stats() {
	const items = [
		{
			v: Math.max(0, Math.floor((Date.now() - START.getTime()) / 864e5)),
			l: "Days Together"
		},
		{
			v: 1200,
			l: "Photos Collected"
		},
		{
			v: 14,
			l: "Trips Taken"
		},
		{
			v: 1825,
			l: "Memories Made"
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		className: "relative z-10 mx-auto max-w-6xl px-6 py-24",
		children: [/* @__PURE__ */ jsx(Heading, {
			eyebrow: "By The Numbers",
			title: "A Love Worth Counting"
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 grid grid-cols-2 gap-4 md:grid-cols-4",
			children: items.map((it) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: { once: true },
				transition: { duration: .7 },
				className: "glass p-6 text-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-gold font-serif text-4xl font-light md:text-5xl",
					children: /* @__PURE__ */ jsx(AnimatedNumber, { to: it.v })
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:text-xs",
					children: it.l
				})]
			}, it.l))
		})]
	});
}
var LETTER = `My dearest,

Five years ago, on a quiet June day, the world handed me you — and nothing has been ordinary since. You are my favorite sentence in every story, the warmth in every winter, the song I never want to end.

Thank you for five years of patience, laughter, late-night talks and tighter hugs. Here's to every chapter still unwritten. I love you, today and always.

— Forever yours.`;
function Letter() {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState("");
	useEffect(() => {
		if (!open) return;
		let i = 0;
		const id = setInterval(() => {
			i++;
			setText(LETTER.slice(0, i));
			if (i >= LETTER.length) clearInterval(id);
		}, 28);
		return () => clearInterval(id);
	}, [open]);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative z-10 mx-auto max-w-3xl px-6 py-24 text-center",
		children: [/* @__PURE__ */ jsx(Heading, {
			eyebrow: "A Letter For You",
			title: "Words From My Heart"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-12 flex flex-col items-center gap-8",
			children: [
				/* @__PURE__ */ jsx("button", {
					onClick: () => setOpen(true),
					className: "group",
					"aria-label": "Open the letter",
					children: /* @__PURE__ */ jsxs("div", {
						className: `envelope ${open ? "open" : ""} transition-transform group-hover:-translate-y-1`,
						children: [
							/* @__PURE__ */ jsx("div", { className: "envelope-flap" }),
							/* @__PURE__ */ jsx("div", {
								className: "envelope-seal",
								children: "A&K"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute inset-x-6 bottom-6 top-12 rounded-md bg-[#f8f2ea] p-4 text-left text-[10px] leading-relaxed text-[#3a2a22] shadow-inner",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "font-serif text-base",
										children: "Anish & Kinshu"
									}),
									/* @__PURE__ */ jsx("div", { className: "shimmer my-2" }),
									/* @__PURE__ */ jsx("div", {
										className: "opacity-70",
										children: "Five years. Infinite love."
									})
								]
							})
						]
					})
				}),
				!open && /* @__PURE__ */ jsx("button", {
					onClick: () => setOpen(true),
					className: "glow-ring rounded-full border border-rose-gold/50 bg-background/40 px-8 py-3 text-sm uppercase tracking-[0.3em] backdrop-blur-md transition-colors hover:bg-rose-gold/20",
					children: "Open My Letter"
				}),
				open && /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					className: "glass mx-auto max-w-xl whitespace-pre-line p-8 text-left font-serif text-lg leading-relaxed text-foreground/90",
					children: /* @__PURE__ */ jsx("span", {
						className: "caret",
						children: text
					})
				})
			]
		})]
	});
}
function MusicPlayer() {
	const [playing, setPlaying] = useState(false);
	const [vol, setVol] = useState(.5);
	const ref = useRef(null);
	useEffect(() => {
		if (ref.current) ref.current.volume = vol;
	}, [vol]);
	const toggle = async () => {
		if (!ref.current) return;
		if (playing) {
			ref.current.pause();
			setPlaying(false);
		} else try {
			await ref.current.play();
			setPlaying(true);
		} catch {
			setPlaying(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-5 right-5 z-40",
		children: [/* @__PURE__ */ jsx("audio", {
			ref,
			loop: true,
			src: "https://cdn.pixabay.com/download/audio/2022/10/30/audio_347ca52a90.mp3?filename=romantic-piano-12241.mp3",
			preload: "none"
		}), /* @__PURE__ */ jsxs("div", {
			className: "glass flex items-center gap-3 px-3 py-2 pr-4 shadow-2xl",
			children: [/* @__PURE__ */ jsxs("button", {
				onClick: toggle,
				className: `relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-rose-gold/40 bg-background ${playing ? "spin-slow" : "spin-slow spin-paused"}`,
				"aria-label": playing ? "Pause music" : "Play music",
				children: [/* @__PURE__ */ jsx("img", {
					src: rose_default,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-70"
				}), /* @__PURE__ */ jsx("span", {
					className: "relative z-10 text-sm",
					children: playing ? "❚❚" : "▶"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "hidden sm:block",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] uppercase tracking-[0.3em] text-rose-gold",
					children: "Our Song"
				}), /* @__PURE__ */ jsx("input", {
					type: "range",
					min: 0,
					max: 1,
					step: .01,
					value: vol,
					onChange: (e) => setVol(parseFloat(e.target.value)),
					className: "mt-1 w-28 accent-[var(--rose-gold)]",
					"aria-label": "Volume"
				})]
			})]
		})]
	});
}
function FinalSection() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	const fireflies = useMemo(() => Array.from({ length: 22 }, (_, i) => ({
		key: i,
		top: Math.random() * 90,
		left: Math.random() * 100,
		dx: (Math.random() - .5) * 80 + "px",
		dy: (Math.random() - .5) * 80 + "px",
		delay: Math.random() * 4,
		dur: 4 + Math.random() * 5
	})), []);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative z-10 overflow-hidden py-32 text-center",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0",
			children: mounted && fireflies.map((f) => /* @__PURE__ */ jsx("span", {
				className: "firefly",
				style: {
					top: `${f.top}%`,
					left: `${f.left}%`,
					animationDelay: `${f.delay}s`,
					animationDuration: `${f.dur}s`,
					["--dx"]: f.dx,
					["--dy"]: f.dy
				}
			}, f.key))
		}), /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: { duration: 1.2 },
			className: "relative z-10 px-6",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-serif text-xl italic text-foreground/80 sm:text-2xl",
					children: "“These 5 years were my favorite chapter.”"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "text-gold mx-auto mt-8 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl",
					children: ["And this is only the beginning ", /* @__PURE__ */ jsx("span", {
						className: "text-soft-pink",
						children: "♥"
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					className: "glow-ring mt-10 rounded-full border border-rose-gold/50 bg-background/40 px-8 py-3 text-sm uppercase tracking-[0.3em] backdrop-blur-md transition-colors hover:bg-rose-gold/20",
					children: "Replay Our Story"
				})
			]
		})]
	});
}
function Heading({ eyebrow, title }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ jsx(motion.p, {
				initial: {
					opacity: 0,
					y: 10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				className: "text-xs uppercase tracking-[0.5em] text-rose-gold",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx(motion.h2, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .9 },
				className: "text-gold mt-3 font-serif text-4xl font-light sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ jsx("div", { className: "shimmer mx-auto mt-5 w-24" })
		]
	});
}
//#endregion
export { Akshin as component };
