import Link from "next/link";
import type { Metadata } from "next";
import { Coffee, MapPin, Camera, Home } from "lucide-react";
import { Glass } from "./components/glass";
import { Countdown } from "./components/countdown";
import { RatioLab } from "./components/ratio-lab";

export const metadata: Metadata = {
  title:
    "National Cortado Day - December 20th | Celebrate the Perfect Coffee Balance",
  description:
    "Celebrate National Cortado Day on December 20th! Learn about this perfect balance of espresso and steamed milk, find cortados near you, and join coffee lovers worldwide.",
  keywords: [
    "National Cortado Day",
    "cortado coffee",
    "espresso",
    "coffee holiday",
    "December 20th",
    "coffee celebration",
    "Spanish coffee"
  ],
  authors: [{ name: "Coffee Enthusiast" }],
  creator: "Coffee Enthusiast",
  publisher: "National Cortado Day",
  formatDetection: {
    telephone: false
  },
  metadataBase: new URL("https://nationalcortadoday.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title:
      "National Cortado Day - December 20th | Celebrate the Perfect Coffee Balance",
    description:
      "Celebrate National Cortado Day on December 20th! Learn about this perfect balance of espresso and steamed milk, find cortados near you, and join coffee lovers worldwide.",
    url: "https://nationalcortadoday.com",
    siteName: "National Cortado Day",
    images: [
      {
        url: "https://nationalcortadoday.com/cortado.jpg",
        width: 1200,
        height: 630,
        alt: "National Cortado Day - December 20th"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "National Cortado Day - December 20th | Celebrate the Perfect Coffee Balance",
    description:
      "Celebrate National Cortado Day on December 20th! Learn about this perfect balance of espresso and steamed milk, find cortados near you.",
    images: ["https://nationalcortadoday.com/cortado.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "Food & Drink"
};

const WAYS_TO_CELEBRATE = [
  {
    icon: Coffee,
    title: "Order one at your local café",
    text: "Ask for a cortado. Sip it slowly, it's only four ounces."
  },
  {
    icon: Camera,
    title: "Post it",
    text: "Share your glass with #NationalCortadoDay so the rest of us can be jealous."
  },
  {
    icon: Home,
    title: "Pull one at home",
    text: "A double shot of espresso, an equal pour of steamed milk, very little foam. That's it."
  }
];

export default function CortadoDay() {
  return (
    <div className="overflow-x-clip">
      <header className="tiles text-milk">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-8">
          <span className="flex items-center gap-2 text-sm font-bold sm:text-base">
            <Coffee className="h-5 w-5 text-crema" aria-hidden />
            nationalcortadoday.com
          </span>
          <a
            href="#ratio"
            className="text-sm font-semibold whitespace-nowrap underline-offset-4 hover:underline sm:text-base"
          >
            What&apos;s a cortado?
          </a>
        </nav>

        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 pb-20 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:px-8 md:pt-12 md:pb-28">
          <div>
            <p className="mb-6 inline-block -rotate-2 rounded-full bg-crema px-4 py-1.5 text-lg font-bold text-espresso">
              December 20th
            </p>
            <h1 className="headline text-[clamp(4.5rem,15vw,11rem)]">
              National Cortado Day
            </h1>
            <p className="mt-8 max-w-lg text-xl leading-relaxed text-milk/90 md:text-2xl">
              One day a year for the little glass of espresso cut with an
              equal pour of warm milk.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <Countdown />
              <Link
                href="https://www.google.com/maps/search/cortado+near+me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-milk px-6 py-3.5 text-lg font-bold text-cobalt transition-transform hover:-translate-y-0.5 hover:bg-foam"
              >
                <MapPin className="h-5 w-5" aria-hidden />
                Find a cortado near me
              </Link>
            </div>
          </div>

          <div className="mx-auto w-52 text-milk sm:w-64 md:w-full md:max-w-xs">
            <Glass milk={0.5} pour className="w-full overflow-visible drop-shadow-[0_24px_30px_rgba(10,20,70,0.45)]" />
          </div>
        </section>
      </header>

      <main>
        <section
          id="ratio"
          className="mx-auto max-w-6xl scroll-mt-6 px-4 py-20 md:px-8 md:py-28"
        >
          <div className="mb-14 max-w-2xl">
            <h2 className="headline text-6xl md:text-8xl">Cut, not frothed.</h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/80 md:text-xl">
              <em>Cortar</em> is Spanish for &ldquo;to cut.&rdquo; A cortado
              cuts espresso with just enough steamed milk to soften its edge,
              without the foam of a cappuccino. Drag the slider to see where it
              sits among its relatives.
            </p>
          </div>
          <RatioLab />
        </section>

        <section className="bg-espresso text-milk">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
            <dl className="max-w-3xl">
              <dt className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="headline text-7xl md:text-9xl">cortado</span>
                <span className="text-xl text-milk/70 md:text-2xl">
                  /kor-TAH-doh/ <em>noun</em>
                </span>
              </dt>
              <dd className="mt-10">
                <ol className="space-y-6 text-lg leading-relaxed md:text-xl">
                  <li className="grid grid-cols-[2rem_1fr]">
                    <span className="font-bold text-crema">1.</span>
                    <span>
                      Espresso with a roughly equal amount of warm, steamed
                      milk, served with little or no foam.
                    </span>
                  </li>
                  <li className="grid grid-cols-[2rem_1fr]">
                    <span className="font-bold text-crema">2.</span>
                    <span>
                      Traditionally poured into a small 4.5&nbsp;oz glass,
                      which is why some cafés call it a Gibraltar.
                    </span>
                  </li>
                </ol>
                <p className="mt-10 border-t border-milk/20 pt-6 text-milk/70">
                  Origin: Spain, by most accounts the Basque Country. From{" "}
                  <em>cortar</em>, to cut.
                </p>
              </dd>
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
          <h2 className="headline mb-14 text-6xl md:text-8xl">
            How to celebrate
          </h2>
          <ul className="grid gap-10 md:grid-cols-3">
            {WAYS_TO_CELEBRATE.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cobalt text-milk">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-espresso/80">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-espresso text-milk">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 md:flex-row md:items-end md:justify-between md:px-8">
          <p className="headline text-5xl md:text-6xl">
            See you December 20th.
          </p>
          <p className="max-w-sm text-sm text-milk/60">
            A celebration of the humble cortado. Not affiliated with any
            official organization.
          </p>
        </div>
      </footer>
    </div>
  );
}
