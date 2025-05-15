"use client"

import { motion } from "framer-motion"
import { Shield, Clock, BarChart, Globe } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export function BenefitsSection() {
  const benefits = [
    {
      title: "Secure Transactions",
      description: "Bank-level encryption and secure payment processing protect your data and finances.",
      icon: Shield,
      delay: 0.1
    },
    {
      title: "Fast Turnaround",
      description: "Get paid within 24 hours of accepting an offer, no lengthy waiting periods.",
      icon: Clock,
      delay: 0.2
    },
    {
      title: "Best Market Value",
      description: "Our AI valuation ensures you get the best possible price for your licenses.",
      icon: BarChart,
      delay: 0.3
    },
    {
      title: "Global Marketplace",
      description: "Connect with buyers worldwide to maximize your selling potential.",
      icon: Globe,
      delay: 0.4
    }
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 relative" id="benefits">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-3xl"></div>
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
            Our Advantages
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            SoftSell provides the most secure, efficient, and profitable way to sell your unused software licenses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex"
            >
              <Card className="h-full border bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all hover:border-primary/50 flex flex-col">
                <CardHeader className="px-4 sm:px-6">
                  <div className="mb-4 sm:mb-5 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
                      <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary relative z-10" />
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-center">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col px-4 sm:px-6">
                  <CardDescription className="text-sm sm:text-base text-center">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-flex items-center justify-center rounded-xl border border-muted-foreground/20 bg-muted/50 px-6 py-4 backdrop-blur-sm">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Join over 500+ businesses</span> that have successfully sold their licenses through our platform
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
