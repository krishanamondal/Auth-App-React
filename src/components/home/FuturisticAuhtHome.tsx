import React from "react";
import { Button } from "../ui/button";
// import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Sparkles, 
  Fingerprint, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Cpu 
} from "lucide-react";

export default function FuturisticAuhtHome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-950 text-white selection:bg-cyan-500 selection:text-black">
      
      {/* Background Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

    

      {/* Hero Section */}
      <section className="relative z-10 py-28 px-6 text-center flex flex-col items-center justify-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5" /> Next-Gen Identity Verification
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500"
        >
          Secure. Fast. Futuristic.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed"
        >
          The next-generation authentication platform built for modern apps. Protect your users with biometrics, zero-knowledge proofs, and instant passkeys.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="h-12 px-8 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-base shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
            Deploy Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 border-neutral-700 bg-neutral-900/50 text-neutral-200 hover:bg-neutral-800 hover:text-white">
            Read Documentation
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineered for the Modern Web
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Everything you need to secure user identities without compromising speed or user experience.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Fingerprint,
              title: "Passkey & Biometrics",
              description: "Seamless passwordless login using hardware-backed WebAuthn, Touch ID, and Face ID.",
            },
            {
              icon: Shield,
              title: "Zero-Trust Architecture",
              description: "End-to-end encryption with dynamic session validation to neutralize threats automatically.",
            },
            {
              icon: Zap,
              title: "Sub-Millisecond Speed",
              description: "Edge-computed authentication guarantees instant response times anywhere across the globe.",
            },
          ].map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="bg-neutral-900/60 border-neutral-800 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group h-full">
                <CardHeader>
                  <div className="p-3 w-fit rounded-lg bg-neutral-800 border border-neutral-700 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-white mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl p-12 bg-gradient-to-r from-neutral-900 via-cyan-950/40 to-neutral-900 border border-cyan-500/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Want To Upgrade AUTH-APP Security System ?
            </h2>
            <p className="text-neutral-300 text-lg mb-8">
              Integrate our futuristic auth SDK into your application in under 5 minutes.
            </p>
            <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:brightness-110">
              Get Started for Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Auth-APP  Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}