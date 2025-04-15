import Image from "next/image";
import Link from "next/link";
import { Coffee, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";

export default function CortadoDay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-amber-800" />
            <span className="font-bold text-amber-800">
              National Cortado Day
            </span>
          </div>
          <div className="flex items-center gap-2 text-amber-800">
            <Calendar className="h-5 w-5" />
            <span>December 20th</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
            National Cortado Day
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-4">
            Celebrating the perfect balance of espresso and steamed milk
          </p>
          <p className="text-lg text-amber-700 mb-8">December 20th</p>
          <div className="relative w-full max-w-2xl h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/cortado.jpg?height=600&width=800"
              alt="A perfectly crafted cortado"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-md mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
            What is a Cortado?
          </h2>
          <p className="text-amber-800 mb-6">
            A cortado is an espresso cut with a small amount of warm milk to
            reduce the acidity. The milk in a cortado is steamed, but not frothy
            and "texturized" as in many Italian coffee drinks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-amber-100 p-4 rounded-xl">
              <h3 className="font-bold text-amber-900 mb-2">Origin</h3>
              <p className="text-sm text-amber-800">
                The cortado originated in Spain's Basque country and the name
                comes from the Spanish word "cortar" (to cut).
              </p>
            </div>
            <div className="bg-amber-100 p-4 rounded-xl">
              <h3 className="font-bold text-amber-900 mb-2">Ratio</h3>
              <p className="text-sm text-amber-800">
                The perfect cortado has a 1:1 or 1:2 ratio of espresso to
                steamed milk.
              </p>
            </div>
            <div className="bg-amber-100 p-4 rounded-xl">
              <h3 className="font-bold text-amber-900 mb-2">Serving</h3>
              <p className="text-sm text-amber-800">
                Traditionally served in a small glass, about 4-5 ounces in size.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
            Ready to celebrate?
          </h2>
          <p className="text-amber-800 mb-8">
            Find a café serving cortados near you and join the celebration!
          </p>
          <Link
            href="https://www.google.com/search?q=cortado+near+me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-6 rounded-xl flex items-center gap-2 text-lg mx-auto">
              <MapPin className="h-5 w-5" />
              Find a Cortado Near Me
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </section>

        <section className="max-w-3xl mx-auto bg-amber-100 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-amber-900 mb-4 text-center">
            How to Celebrate
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-amber-800 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="font-bold text-amber-900">
                  Visit your local café
                </h3>
                <p className="text-amber-800">
                  Order a cortado and appreciate the craftsmanship.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-amber-800 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="font-bold text-amber-900">
                  Share on social media
                </h3>
                <p className="text-amber-800">
                  Post your cortado with #NationalCortadoDay.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-amber-800 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="font-bold text-amber-900">Learn to make one</h3>
                <p className="text-amber-800">
                  Try making a cortado at home with your espresso machine.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-amber-900 text-amber-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Happy National Cortado Day! December 20th</p>
          <p className="text-sm opacity-75">
            This site celebrates the wonderful cortado coffee. Not affiliated
            with any official organization.
          </p>
        </div>
      </footer>
    </div>
  );
}
