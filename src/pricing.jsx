import React, { useMemo, useState } from 'react'

const packages = [
  {
    id: 'starter',
    name: 'Starter System',
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
        name: 'Pro ⭐ Most Popular',
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
        name: 'Advanced 🔥 Best Value',
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
        name: 'Pro ⭐ Most Popular',
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
        name: 'Pro 🔥 Recommended',
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
export default function App() {
  const [activePackageId, setActivePackageId] = useState(null)
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Pricing System</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Build your custom AI growth plan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Select a package, choose your tier, then customize with add-ons and get live pricing.
          </p>
          {lastSaved && (
            <p className="mx-auto mt-4 max-w-2xl rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
              {lastSaved}
            </p>
          )}
        </header>

        <section>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition ${
                  activePackageId === pkg.id
                    ? 'border-cyan-400/60 bg-slate-900/80'
                    : 'border-slate-800 bg-slate-900/50'
                }`}
              >
                <h2 className="text-2xl font-semibold">{pkg.name}</h2>
                <p className="mt-3 text-sm text-slate-300">Starting at</p>
                <p className="mt-1 text-3xl font-bold text-cyan-300">{money(pkg.startingPrice)}</p>
                <button
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 font-medium text-slate-950 transition hover:scale-[1.02]"
                  onClick={() => {
                    setActivePackageId(pkg.id)
                    setActiveTier(null)
                  }}
                >
                  View Plans
                </button>
              </article>
            ))}
          </div>
        </section>

        {activePackage && (
          <section className="mt-12">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Tiers</p>
                <h3 className="text-2xl font-semibold">{activePackage.name}</h3>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {activePackage.tiers.map((tier) => (
                <article key={tier.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{tier.name}</p>
                  <p className="mt-2 text-3xl font-bold">{money(tier.basePrice)}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-6 w-full rounded-xl border border-cyan-400/50 px-4 py-2.5 font-medium text-cyan-200 transition hover:bg-cyan-500/10"
                    onClick={() => openCustomizer(tier)}
                  >
                    Customize Plan
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {isCustomizerOpen && activeTier && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950 p-6">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Customize plan</p>
                <h4 className="mt-2 text-2xl font-semibold">{activeTier.name} Tier</h4>
                <p className="mt-1 text-slate-300">Base price: {money(activeTier.basePrice)}</p>
              </div>
              <button
                className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-900"
                onClick={() => setIsCustomizerOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <p className="mb-3 font-medium">Optional add-ons</p>
                <div className="space-y-3">
                  {activeTier.addOns.map((addOn) => {
                    const checked = selectedAddOnIds.includes(addOn.id)
                    return (
                      <label
                        key={addOn.id}
                        className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 transition ${
                          checked ? 'border-cyan-400/60 bg-cyan-500/10' : 'border-slate-800 bg-slate-900/60'
                        }`}
                      >
                        <div>
                          <p className="font-medium">{addOn.name}</p>
                          <p className="text-sm text-slate-300">{money(addOn.price)}</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAddOn(addOn.id)}
                          className="h-4 w-4 accent-cyan-400"
                        />
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Price summary</p>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Base price</span>
                    <span>{money(basePrice)}</span>
                  </div>
                  <div>
                    <p className="mb-2 text-slate-300">Selected add-ons</p>
                    {selectedAddOns.length === 0 ? (
                      <p className="text-slate-500">No add-ons selected</p>
                    ) : (
                      <ul className="space-y-1 text-slate-200">
                        {selectedAddOns.map((addOn) => (
                          <li key={addOn.id} className="flex items-center justify-between">
                            <span>{addOn.name}</span>
                            <span>+{money(addOn.price)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="mt-4 border-t border-slate-700 pt-3">
                    <div className="flex items-center justify-between text-lg font-semibold">
                      <span>Final total</span>
                      <span className="text-cyan-300">{money(finalTotal)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={proceed}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
