"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "../ui/button"

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden" id="hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
        <div className="absolute top-0 right-0 -z-10 transform translate-x-1/2 -translate-y-1/4">
          <div className="w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 transform -translate-x-1/2 translate-y-1/4">
          <div className="w-[300px] h-[300px] rounded-full bg-secondary/10 blur-3xl"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto">
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit"
            >
              Launching Soon
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sell Your Unused Software Licenses in Minutes
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Turn your idle software investments into cash. Our marketplace connects you with buyers looking for exactly what you have.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="rounded-full" asChild>
                <Link href="#contact">Sell My Licenses</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center mt-8 sm:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-md">
                <div className="relative w-full h-full">
                  {/* Background card with shadow */}
                  <div className="absolute top-4 right-4 w-full h-full bg-muted rounded-xl shadow-xl"></div>

                  {/* Main card */}
                  <div className="relative w-full h-full bg-card rounded-xl border shadow-lg p-8 flex flex-col justify-center">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>

                    <div className="space-y-8 relative">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                            <polyline points="7.5 19.79 7.5 14.6 3 12" />
                            <polyline points="21 12 16.5 14.6 16.5 19.79" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Adobe Creative Cloud</h3>
                          <p className="text-sm text-muted-foreground">Enterprise License</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">License Type</p>
                            <p className="font-medium">Enterprise (10 seats)</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Expiry</p>
                            <p className="font-medium">Dec 2025</p>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Estimated Value</p>
                              <p className="text-2xl font-bold">$1,200</p>
                            </div>
                            <Button size="lg" className="rounded-full">Sell Now</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
