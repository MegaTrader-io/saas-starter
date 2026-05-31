import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, SlidersHorizontal, LayoutDashboard } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Never Miss Amazon Flex Blocks
                <span className="block text-orange-500">Automated 24/7</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                FlexGrabber continuously monitors Amazon Flex for available
                blocks and instantly attempts to capture opportunities that
                match your preferences. Stop refreshing manually and let
                automation work for you.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a href="/sign-up">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg rounded-full"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Lightning Fast Detection
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Continuously monitors Amazon Flex for new opportunities and
                  reacts instantly when blocks become available.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <SlidersHorizontal className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Smart Filters
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Choose your preferred stations, pay rate, block duration, and
                  work schedule.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Real-Time Dashboard
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Track accepted, missed, ignored, and pending offers from a
                  single dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready To Capture More Blocks?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Join Amazon Flex drivers using FlexGrabber to automate block
                searching and maximize earning opportunities.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="/sign-up">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full"
                >
                  Start Free Trial
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
