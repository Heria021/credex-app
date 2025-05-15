"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      title: "Upload License",
      description: "Submit your software license details through our secure portal.",
      icon: Upload,
      delay: 0.1
    },
    {
      title: "Get Valuation",
      description: "Our AI-powered system provides an instant market valuation for your license.",
      icon: DollarSign,
      delay: 0.3
    },
    {
      title: "Get Paid",
      description: "Accept the offer and receive payment via your preferred method within 24 hours.",
      icon: CreditCard,
      delay: 0.5
    }
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/30 relative overflow-hidden" id="how-it-works">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent opacity-70"></div>
      </div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Simple Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Selling your unused software licenses has never been easier. Our streamlined process gets you paid quickly and securely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border hover:border-primary/50 transition-all shadow-sm hover:shadow-md bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-2 px-4 sm:px-6">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <span className="absolute top-0 right-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <CardDescription className="text-sm sm:text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" className="rounded-full" asChild>
            <Link href="#contact">Get Started Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
