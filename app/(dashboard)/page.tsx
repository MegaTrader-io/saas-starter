'use client';

import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Zap, 
  Filter, 
  Bot, 
  BarChart3, 
  Bell, 
  TrendingUp,
  Check,
  Star,
  Clock,
  Radar,
  Settings,
  Smartphone
} from 'lucide-react';
import { Terminal } from './terminal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      // Simple animation for non-numeric values
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Detection',
    description: 'Continuously monitors Amazon Flex for new opportunities and reacts instantly.',
  },
  {
    icon: Filter,
    title: 'Smart Filters',
    description: 'Choose your preferred stations, pay rate, block duration, and schedule.',
  },
  {
    icon: Bot,
    title: 'Automated Block Grabbing',
    description: 'Automatically attempts to capture blocks matching your settings.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboard',
    description: 'Track accepted, missed, ignored, and pending offers.',
  },
  {
    icon: Bell,
    title: 'Mobile Notifications',
    description: 'Receive instant updates when blocks are captured.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Analyze performance and optimize your settings over time.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Connect Your Amazon Flex Account',
    description: 'Securely link your Amazon Flex account to get started.',
  },
  {
    number: '02',
    title: 'Choose Stations And Filters',
    description: 'Set your preferred stations, pay rates, and block durations.',
  },
  {
    number: '03',
    title: 'Start Monitoring',
    description: 'Activate FlexGrabber to begin watching for offers.',
  },
  {
    number: '04',
    title: 'Let FlexGrabber Capture Blocks Automatically',
    description: 'Sit back and let automation work for you 24/7.',
  },
];

const testimonials = [
  {
    quote: 'FlexGrabber helped me spend less time refreshing and more time driving.',
    author: 'Amazon Flex Driver',
    rating: 5,
  },
  {
    quote: 'The custom filters allow me to target only the blocks I actually want.',
    author: 'Amazon Flex Driver',
    rating: 5,
  },
  {
    quote: 'Setup took less than five minutes and I was capturing blocks immediately.',
    author: 'Amazon Flex Driver',
    rating: 5,
  },
];

const stats = [
  { value: '24/7', label: 'Monitoring' },
  { value: 'Instant', label: 'Offer Detection' },
  { value: 'Custom', label: 'Station Filters' },
  { value: 'Real-Time', label: 'Notifications' },
];

const pricingFeatures = [
  'Unlimited Monitoring',
  'Custom Filters',
  'Mobile Notifications',
  'Dashboard Analytics',
  '24/7 Operation',
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl text-balance">
                Never Miss Amazon Flex Blocks
                <span className="block text-orange-500 mt-2">Again</span>
              </h1>
              <p className="mt-2 text-lg text-orange-600 font-medium">
                Automated Block Grabbing 24/7
              </p>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                FlexGrabber continuously monitors Amazon Flex for available blocks and instantly attempts to grab offers that match your preferences. Stop refreshing manually and let automation work for you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8"
                  asChild
                >
                  <Link href="/sign-up">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full border-gray-300 hover:bg-gray-100"
                >
                  Watch Demo
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-10 grid grid-cols-2 gap-3 max-w-md">
                {[
                  'Real-Time Monitoring',
                  'Custom Filters',
                  'Instant Capture',
                  'Mobile Friendly',
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 lg:mt-0 lg:col-span-6"
            >
              <Terminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Everything You Need To Capture More Blocks
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Powerful features designed to maximize your Amazon Flex earnings
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index}>
                <motion.div 
                  whileHover={{ y: -4, boxShadow: '0 12px 40px -12px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get Started In Minutes
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Four simple steps to automate your block searching
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <AnimatedSection key={index}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-orange-200">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trusted By Drivers
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                See what Amazon Flex drivers are saying about FlexGrabber
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.author}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Simple Pricing
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                One plan with everything you need
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-md mx-auto">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 border-2 border-orange-500 shadow-xl shadow-orange-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Plan</h3>
                <ul className="space-y-4 mb-8">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  size="lg" 
                  className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <Link href="/sign-up">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready To Capture More Blocks?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Join thousands of drivers using FlexGrabber to automate block searching and maximize earning opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8"
                asChild
              >
                <Link href="/sign-up">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg rounded-full border-gray-600 text-white hover:bg-gray-800"
                asChild
              >
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                question: 'How does FlexGrabber work?',
                answer: 'FlexGrabber monitors Amazon Flex for available blocks and automatically attempts to capture offers that match your preferences. You set your filters, and we do the rest.',
              },
              {
                question: 'Is FlexGrabber safe to use?',
                answer: 'Yes, FlexGrabber is designed with security in mind. Your credentials are encrypted and we never share your data with third parties.',
              },
              {
                question: 'Can I customize which blocks to grab?',
                answer: 'Absolutely! You can set filters for specific stations, minimum pay rates, block durations, and preferred time slots.',
              },
              {
                question: 'How long is the free trial?',
                answer: 'Our free trial gives you full access to all features so you can experience the power of automated block grabbing.',
              },
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
