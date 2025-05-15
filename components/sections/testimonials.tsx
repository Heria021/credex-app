"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was incredibly smooth and secure.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Inc.",
      initials: "SJ",
      delay: 0.1
    },
    {
      quote: "As a small business owner, every dollar counts. SoftSell made it easy to recoup costs from software we no longer needed.",
      name: "Michael Chen",
      role: "CEO",
      company: "Innovate Solutions",
      initials: "MC",
      delay: 0.3
    }
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/30 relative overflow-hidden" id="testimonials">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-40"></div>
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
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all hover:border-primary/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-xl"></div>

                <CardHeader className="pb-0 px-4 sm:px-6">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary/40 mb-2" />
                </CardHeader>
                <CardContent className="pt-4 px-4 sm:px-6">
                  <p className="text-base sm:text-lg italic mb-6 sm:mb-8 relative">
                    <span className="text-3xl sm:text-4xl font-serif text-primary/20 absolute -top-3 sm:-top-4 -left-1 sm:-left-2">"</span>
                    {testimonial.quote}
                    <span className="text-3xl sm:text-4xl font-serif text-primary/20 absolute -bottom-6 sm:-bottom-8 -right-1 sm:-right-2">"</span>
                  </p>
                </CardContent>
                <CardFooter className="border-t pt-4 sm:pt-6 px-4 sm:px-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs sm:text-sm">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardFooter>
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
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-muted-foreground/20 bg-muted/50 px-6 py-3 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-background h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background h-8 w-8">
                <AvatarFallback className="bg-secondary/10 text-secondary-foreground text-xs">TK</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background h-8 w-8">
                <AvatarFallback className="bg-muted text-muted-foreground text-xs">RB</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-muted-foreground text-sm">
              Trusted by <span className="font-semibold text-foreground">500+ customers</span> worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
