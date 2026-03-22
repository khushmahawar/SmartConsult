import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, X, Gem, TrendingUp, Rocket } from 'lucide-react'
import Navbar from './navbar'
import Footer from './Footer'

const packages = [
  {
    id: 'starter',
    name: 'Starter System',
    icon: <Rocket className="w-6 h-6 text-neon-cyan" />,
    startingPrice: 9999,
    tiers: [
      {
        id: 'starter-basic',
        name: 'Basic',
        basePrice: 9999,
        features: [
          '1 Landing Page',
          'Lead Capture Form',
          'WhatsApp Auto Reply (1 flow)',
          'Google Sheet Integration',
          '3 Automations',
          'Basic Setup',
          '7 Days Support',
          '15 Days Free Customization Support',
          '6 Months Warranty & Maintenance'
        ],
        addOns: [
          { id: 'lp', name: 'Extra Landing Page', price: 2000 },
          { id: 'wa', name: 'Advanced WhatsApp Flow', price: 3000 },
          { id: 'email', name: 'Email Automation', price: 2500 },
          { id: 'support', name: 'Extra Support (7 days)', price: 1500 },
        ],
      },
      {
        id: 'starter-pro',
        name: 'Pro',
        isPopular: true,
        basePrice: 19999,
        features: [
          '3 Landing Pages',
          'Advanced WhatsApp Automation',
          'Email Automation (Follow-ups)',
          'CRM Setup (Notion/Airtable)',
          'Lead Tagging System',
          'Analytics Dashboard',
          '8 Automations',
          '30 Days Free Customization Support',
          '6 Months Warranty & Maintenance'
        ],
        addOns: [
          { id: 'crm', name: 'Advanced CRM Pipeline', price: 4000 },
          { id: 'sequence', name: 'Full Email Sequence', price: 3000 },
          { id: 'tracking', name: 'Conversion Tracking', price: 3000 },
          { id: 'ai', name: 'AI Chatbot', price: 7000 },
        ],
      },
      {
        id: 'starter-advanced',
        name: 'Advanced',
        isBestValue: true,
        basePrice: 29999,
        features: [
          'Complete Funnel Setup',
          'Advanced CRM Pipeline',
          'WhatsApp + Email Integration',
          'Conversion Tracking Setup',
          'Custom Automation Flows',
          'Performance Dashboard',
          '12 Automations',
          '45 Days Free Customization Support',
          '8 Months Warranty & Maintenance'
        ],
        addOns: [
          { id: 'ads', name: 'Retargeting Setup', price: 5000 },
          { id: 'ai-adv', name: 'Advanced AI Chatbot', price: 9000 },
          { id: 'cro', name: 'Conversion Optimization', price: 5000 },
          { id: 'api', name: 'API Integration', price: 6000 },
        ],
      },
    ],
  },
  {
    id: 'growth',
    name: 'Growth Systems',
    icon: <TrendingUp className="w-6 h-6 text-neon-purple" />,
    startingPrice: 29999,
    tiers: [
      {
        id: 'growth-basic',
        name: 'Basic',
        basePrice: 29999,
        features: [
          'Complete Lead Funnel',
          'CRM Setup',
          'WhatsApp Automation',
          'Email Follow-ups',
          'Analytics Dashboard',
          '10 Automations',
          '14 Days Support'
        ],
        addOns: [
          { id: 'scoring', name: 'Lead Scoring System', price: 4000 },
          { id: 'funnel', name: 'Extra Funnel', price: 6000 },
          { id: 'support', name: 'Extra Support', price: 3000 },
        ],
      },
      {
        id: 'growth-pro',
        name: 'Pro',
        isPopular: true,
        basePrice: 39999,
        features: [
          '3 Funnels',
          'Advanced CRM Pipeline',
          'Lead Tagging + Scoring',
          'Advanced WhatsApp Automation',
          'Email Drip Campaigns',
          'Advanced Dashboard',
          '15 Automations',
          '30 Days Support'
        ],
        addOns: [
          { id: 'ab', name: 'A/B Testing Setup', price: 5000 },
          { id: 'api', name: 'API Integration', price: 6000 },
          { id: 'ai', name: 'AI Automation', price: 8000 },
        ],
      },
      {
        id: 'growth-advanced',
        name: 'Advanced',
        basePrice: 49999,
        features: [
          'Optimized Sales Funnel',
          'Sales Pipeline Automation',
          'Multi-channel Integration',
          'Retargeting Setup',
          'Custom Automations',
          'Advanced Analytics',
          '20+ Automations',
          '45 Days Free Customization Support',
          '8 Months Warranty & Maintenance'
        ],
        addOns: [
          { id: 'ads', name: 'Ads Integration', price: 6000 },
          { id: 'ai', name: 'Advanced AI System', price: 10000 },
          { id: 'cro', name: 'Conversion Optimization', price: 5000 },
        ],
      },
    ],
  },
  {
    id: 'scale',
    name: 'Scale Optimization',
    icon: <Gem className="w-6 h-6 text-neon-green" />,
    startingPrice: 79999,
    tiers: [
      {
        id: 'scale-basic',
        name: 'Basic',
        basePrice: 79999,
        features: [
          'Advanced Automation System',
          'Full CRM Setup',
          'Multi-channel Automation',
          'Analytics Dashboard',
          '25 Automations',
          '30 Days Free Customization Support',
          '6 Months Warranty & Maintenance'
        ],
        addOns: [
          { id: 'team', name: 'Team Workflow Automation', price: 8000 },
          { id: 'api', name: 'API Integration', price: 7000 },
        ],
      },
      {
        id: 'scale-pro',
        name: 'Pro',
        isRecommended: true,
        basePrice: 99999,
        features: [
          'AI Chatbot Integration',
          'Lead Scoring Automation',
          'Revenue Dashboard',
          'Multi Funnel System',
          'Team Automation',
          '35 Automations',
          '45 Days Free Customization Support',
          '8 Months Warranty & Maintenance'
        ],
        addOns: [
          { id: 'ai', name: 'Advanced AI Automation', price: 12000 },
          { id: 'team', name: 'Team Management System', price: 9000 },
        ],
      },
      {
        id: 'scale-advanced',
        name: 'Advanced',
        basePrice: 129999,
        features: [
          'Full Business Automation',
          'Custom API Integrations',
          'Sales Team Automation',
          'Advanced Analytics',
          'Unlimited Automations',
          'Priority Support',
          '60 Days Free Customization Support',
          '12 Months Warranty & Maintenance'
        ],
        addOns: [
          { id: 'calls', name: 'Dedicated Strategy Calls', price: 15000 },
          { id: 'ml', name: 'AI + ML System', price: 20000 },
        ],
      },
    ],
  },
]

const money = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value)

export default function PricingPage() {
  const [activePackageId, setActivePackageId] = useState(packages[0].id)
  const [activeTier, setActiveTier] = useState(null)
  const [selectedAddOnIds, setSelectedAddOnIds] = useState([])
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false)
  const [lastSaved, setLastSaved] = useState('')

  const activePackage = packages.find((pkg) => pkg.id === activePackageId) ?? null
  const selectedAddOns = useMemo(
    () => activeTier?.addOns.filter((addOn) => selectedAddOnIds.includes(addOn.id)) ?? [],
    [activeTier, selectedAddOnIds],
  )
  const addOnsTotal = selectedAddOns.reduce((total, addOn) => total + addOn.price, 0)
  const basePrice = activeTier?.basePrice ?? 0
  const finalTotal = basePrice + addOnsTotal

  const openCustomizer = (tier) => {
    setActiveTier(tier)
    setSelectedAddOnIds([])
    setIsCustomizerOpen(true)
  }

  const toggleAddOn = (id) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const proceed = () => {
    if (!activePackage || !activeTier) return
    const payload = {
      package: activePackage.name,
      tier: activeTier.name,
      basePrice,
      addOns: selectedAddOns,
      total: finalTotal,
      savedAt: new Date().toISOString(),
    }
    localStorage.setItem('pricingSelection', JSON.stringify(payload))
    setLastSaved(`Saved ${activePackage.name} - ${activeTier.name} (${money(finalTotal)})`)
    setIsCustomizerOpen(false)
  }

  return (
    <div className="min-h-[100dvh] min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Navbar />
      <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:pb-24">
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[min(62.5rem,220vw)] h-[min(31.25rem,55vh)] bg-neon-cyan/5 blur-[5rem] sm:blur-[9.375rem] -z-10" />

      <div className="container mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16 px-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 sm:mb-6">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-neon-cyan">Pricing System</span>
          </div>
          <h1 className="text-[clamp(1.75rem,5.5vw,3.75rem)] md:text-6xl font-heading font-extrabold mb-4 sm:mb-6 leading-tight">
            Build Your Custom <span className="text-neon-gradient">Growth Plan</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Select a package, choose your tier, and customize with add-ons for the perfect operational system.
          </p>
          
          <AnimatePresence>
            {lastSaved && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mt-8 inline-block px-6 py-2 rounded-full glass border-neon-green/30 text-neon-green font-medium"
              >
                {lastSaved}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Package Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => {
                setActivePackageId(pkg.id)
                setActiveTier(null)
              }}
              className={`cursor-pointer p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] transition-all duration-500 relative overflow-hidden group touch-manipulation ${
                activePackageId === pkg.id
                  ? 'glass border-neon-cyan/50 shadow-[0_0_50px_rgba(0,255,255,0.1)]'
                  : 'glass-dark border-transparent hover:border-white/10'
              }`}
            >
              {activePackageId === pkg.id && (
                <motion.div
                  layoutId="activePackage"
                  className="absolute inset-0 bg-neon-cyan/5 -z-10"
                />
              )}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${activePackageId === pkg.id ? 'bg-neon-cyan/20' : 'bg-white/5'}`}>
                  {pkg.icon}
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold min-w-0">{pkg.name}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-2">Starting at</p>
              <p className={`text-2xl sm:text-3xl md:text-4xl font-extrabold break-words ${activePackageId === pkg.id ? 'text-neon-cyan' : 'text-white'}`}>
                {money(pkg.startingPrice)}
              </p>
              
              <div className={`mt-8 flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activePackageId === pkg.id ? 'text-neon-cyan' : 'text-gray-500 group-hover:text-white'
              }`}>
                {activePackageId === pkg.id ? 'Current Package' : 'View Plans'} <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tiers Grid */}
        <AnimatePresence mode="wait">
          {activePackage && (
            <motion.div
              key={activePackageId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 border-b border-white/5 pb-4 sm:pb-6">
                <div className="min-w-0 text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Recommended Tiers</h3>
                  <p className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-2">Scale your {activePackage.name} with precision.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {activePackage.tiers.map((tier, idx) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-[2rem] flex flex-col min-h-0 ${
                      tier.isPopular || tier.isRecommended
                        ? 'glass border-neon-cyan/40 bg-white/[0.04]'
                        : 'glass border-white/5'
                    }`}
                  >
                    {(tier.isPopular || tier.isRecommended || tier.isBestValue) && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-cyan text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-neon-cyan/30">
                        {tier.isPopular ? 'Most Popular' : tier.isRecommended ? 'Recommended' : 'Best Value'}
                      </div>
                    )}
                    
                    <div className="mb-8">
                      <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-2">{tier.name}</p>
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 break-words">{money(tier.basePrice)}</h4>
                      <p className="text-sm text-gray-500">per system implementation</p>
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 group">
                          <div className="mt-1 text-neon-cyan group-hover:scale-125 transition-transform">
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => openCustomizer(tier)}
                      className={`w-full min-h-[48px] py-3.5 sm:py-4 rounded-xl font-bold transition-all duration-300 transform active:scale-95 touch-manipulation ${
                        tier.isPopular || tier.isRecommended
                          ? 'bg-neon-cyan text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]'
                          : 'glass text-white hover:bg-white/10'
                      }`}
                    >
                      Customize Plan
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Customizer Modal */}
      <AnimatePresence>
        {isCustomizerOpen && activeTier && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCustomizerOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl glass-dark rounded-t-2xl sm:rounded-2xl md:rounded-[3rem] p-4 sm:p-8 md:p-12 overflow-y-auto max-h-[min(92dvh,100vh)] sm:max-h-[90vh] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 md:mb-12">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neon-cyan mb-2">Configuration Mode</p>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">{activeTier.name} Customizer</h4>
                  <p className="text-sm sm:text-base text-gray-400">Add advanced modules to your core {activeTier.name} implementation.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCustomizerOpen(false)}
                  className="self-end sm:self-start shrink-0 min-h-[44px] min-w-[44px] p-3 glass rounded-full hover:bg-white/10 transition-colors touch-manipulation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <h5 className="text-xl font-bold mb-6 flex items-center gap-2">
                    Available Modules <div className="h-[2px] w-12 bg-neon-cyan rounded-full" />
                  </h5>
                  <div className="space-y-4">
                    {activeTier.addOns.map((addOn) => {
                      const isSelected = selectedAddOnIds.includes(addOn.id)
                      return (
                        <div
                          key={addOn.id}
                          onClick={() => toggleAddOn(addOn.id)}
                          className={`cursor-pointer p-4 md:p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                            isSelected
                              ? 'glass border-neon-cyan bg-neon-cyan/5'
                              : 'glass-dark border-transparent hover:border-white/10'
                          }`}
                        >
                          <div>
                            <p className={`font-bold transition-colors ${isSelected ? 'text-neon-cyan' : 'text-white'}`}>
                              {addOn.name}
                            </p>
                            <p className="text-sm text-gray-400 mt-1">{money(addOn.price)}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            isSelected ? 'bg-neon-cyan border-neon-cyan' : 'border-gray-600 group-hover:border-white'
                          }`}>
                            {isSelected && <Check className="w-4 h-4 text-black font-black" />}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="glass-dark p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-white/5 h-fit relative lg:sticky lg:top-0">
                  <h5 className="text-xl font-bold mb-6 md:mb-8">System Summary</h5>
                  
                  <div className="space-y-6 text-sm mb-10 pb-10 border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Base Implementation</span>
                      <span className="font-bold">{money(basePrice)}</span>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-black">Active Modules</p>
                      {selectedAddOns.length === 0 ? (
                        <p className="text-gray-600 italic">No additional modules selected</p>
                      ) : (
                        selectedAddOns.map((addOn) => (
                          <motion.div
                            layout
                            key={addOn.id}
                            className="flex items-center justify-between"
                          >
                            <span className="text-gray-300">{addOn.name}</span>
                            <span className="font-bold text-neon-cyan">+{money(addOn.price)}</span>
                          </motion.div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-10">
                    <span className="text-lg font-bold">Total Implementation</span>
                    <span className="text-3xl font-black text-neon-gradient">{money(finalTotal)}</span>
                  </div>

                  <button
                    onClick={proceed}
                    className="w-full py-5 bg-white text-black font-black rounded-2xl hover:scale-[1.02] transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] active:scale-95 flex items-center justify-center gap-3"
                  >
                    Confirm Selection <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
