"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Send, X } from "lucide-react"

import { Button } from "./button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card"
import { Input } from "./input"
import { Avatar, AvatarFallback } from "./avatar"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi there! How can I help you with selling your software licenses today?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("how") && (input.includes("sell") || input.includes("work"))) {
      return "Selling your license is easy! Just upload your license details through our secure portal, get an instant valuation, and receive payment within 24 hours after accepting the offer."
    }

    if (input.includes("price") || input.includes("worth") || input.includes("value")) {
      return "The value of your license depends on several factors including software type, remaining subscription time, and market demand. Our AI system provides accurate valuations based on current market data."
    }

    if (input.includes("payment") || input.includes("paid")) {
      return "We offer multiple payment methods including direct bank transfer, PayPal, and cryptocurrency. Payments are typically processed within 24 hours of accepting an offer."
    }

    if (input.includes("secure") || input.includes("safe")) {
      return "Security is our top priority. We use bank-level encryption for all transactions and never share your personal information with third parties without your consent."
    }

    return "Thanks for your question. To provide you with the most accurate information, please contact our support team directly at support@softsell.com or fill out the contact form above."
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 z-50 w-80 md:w-96"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border shadow-lg bg-card/95 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-2 flex flex-row justify-between items-center border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Chat with SoftSell</CardTitle>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-80 overflow-y-auto space-y-4 pr-2 scrollbar-thin">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className="flex items-start gap-2 max-w-[80%]">
                        {message.sender === "bot" && (
                          <Avatar className="w-8 h-8 border border-primary/10">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                              AI
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`rounded-2xl px-4 py-2 text-sm ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground rounded-tr-none"
                              : "bg-muted rounded-tl-none"
                          }`}
                        >
                          {message.text}
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-2 border-t">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="rounded-full bg-muted/50"
                  />
                  <Button
                    size="icon"
                    className="rounded-full"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle chat</span>
        </Button>
        {!isOpen && (
          <motion.div
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-destructive flex items-center justify-center text-[10px] font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            1
          </motion.div>
        )}
      </motion.div>
    </>
  )
}
