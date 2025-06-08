import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const featuredModels = [
    {
      name: "Gemini 2.5 Pro Preview 08-05",
      version: "v1.0",
      metrics: { latency: "2.2s", tokens: "Latency", growth: "Weekly growth" },
      icon: "💎"
    },
    {
      name: "GPT-4.1",
      metrics: { tokens: "47.0B", latency: "771ms", growth: "1.71%" },
      icon: "🔮"
    },
    {
      name: "Claude Sonnet 4",
      metrics: { tokens: "12.4B", latency: "1.4s", growth: "18.11%" },
      icon: "🎭"
    }
  ];

  const stats = [
    { value: "8.4T", label: "Monthly Tokens" },
    { value: "2.5M+", label: "Global Users" },
    { value: "60+", label: "Active Providers" },
    { value: "400+", label: "Models", highlight: true }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Signup",
      description: "Create an account to get started. You can set up an org for your team later.",
      icons: ["🔗", "👤", "📧", "✉️"]
    },
    {
      step: "2", 
      title: "Buy credits",
      description: "Credits can be used with any model or provider.",
      price: "$99",
      detail: "Aug 30"
    },
    {
      step: "3",
      title: "Get your API key", 
      description: "Create an API key and start making requests. Fully OpenAI-compatible.",
      keyExample: "OPENROUTER_API_KEY"
    }
  ];

  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenRouter GPT works out of the box.",
      icon: "🔧"
    },
    {
      title: "Higher Availability", 
      description: "Distribute AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      icon: "📡"
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. OpenRouter runs at the edge, getting just ~25ms latency between your users and their inference.",
      icon: "📊"
    },
    {
      title: "Custom Data Policies",
      description: "Protect your organization with the granular data policies. Ensure prompts only go to the models and providers you trust.",
      icon: "🛡️"
    }
  ];

  const topApps = [
    { rank: 1, name: "Cline", description: "AI-powered coding agent for...", users: "23.5B", icon: "📟" },
    { rank: 2, name: "Poe Code", description: "Written GPT-4o and all of Anthropic...", users: "20.5B", icon: "💻" },
    { rank: 3, name: "Klio Code", description: "The most advanced AI and...", users: "10.8B", icon: "🖥️" },
    { rank: 4, name: "Bolt.LM", description: "Build and debug code", users: "8.97B", icon: "⚡" },
    { rank: 5, name: "SillyTavern", description: "LLM Frontend for power users", users: "5.74B", icon: "🎭" },
    { rank: 6, name: "Clab AI", description: "Chat for everyone", users: "4.14B", icon: "💬" },
    { rank: 7, name: "HammerAI", description: "Chat with AI-enhanced for free", users: "2.1B", icon: "🔨" },
    { rank: 8, name: "OpenRouter Chathou...", description: "Native support LLMs at once", users: "1.3B", icon: "🚀" },
    { rank: 9, name: "Infinite Worlds", description: "Limitless RPG, AI adventures that...", users: "1.26B", icon: "🌍" },
    { rank: 10, name: "shapez Inc.", description: "Research through shape segment", users: "1.14B", icon: "🔺" },
    { rank: 11, name: "Quack", description: "Discord and Discord with voice...", users: "971M", icon: "🦆" },
    { rank: 12, name: "RoleChat - AI Chat", description: "Voice over text", users: "924M", icon: "🎯" },
    { rank: 13, name: "Caveduck", description: "AI tool generator", users: "902M", icon: "🦆" },
    { rank: 14, name: "LinkAI", description: "Chat GPT with voice capability", users: "831M", icon: "🔗" },
    { rank: 15, name: "SillyTavern", description: "LLM Frontend for power users", users: "5.74B", icon: "🎭" },
    { rank: 16, name: "Xertis AI", description: "Server for entertainment.", users: "752M", icon: "❌" },
    { rank: 17, name: "Juju", description: "Juju for mobile chat", users: "531M", icon: "🎪" },
    { rank: 18, name: "novelcatcher", description: "Your personal novel writing ai", users: "521M", icon: "📖" },
    { rank: 19, name: "Open WebUI", description: "User-friendly WebUI for chat", users: "409M", icon: "🌐" },
    { rank: 20, name: "Aziel", description: "AI-first programming tutor to", users: "387M", icon: "🎓" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
              <span className="font-semibold text-lg">OpenRouter</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 w-64 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Models</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Chat</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Rankings</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Docs</a>
            <Button variant="outline" size="sm">Sign in</Button>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                The Unified<br />
                Interface For LLMs
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Better <span className="text-blue-600">pricing</span>, {" "}
                better <span className="text-blue-600">uptime</span>, no subscription.
              </p>
              
              <div className="flex gap-3 mb-8">
                <Input 
                  placeholder="Start a message" 
                  className="flex-1 h-12 border-gray-300"
                />
                <Button className="h-12 px-6 bg-blue-600 text-white">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${stat.highlight ? 'text-blue-600' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-6 border border-gray-200">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    {step.icons && (
                      <div className="flex gap-2">
                        {step.icons.map((icon, i) => (
                          <span key={i} className="text-lg">{icon}</span>
                        ))}
                      </div>
                    )}
                    {step.price && (
                      <div className="bg-purple-100 rounded p-3 text-center">
                        <div className="font-bold">{step.price}</div>
                        <div className="text-sm text-gray-500">{step.detail}</div>
                      </div>
                    )}
                    {step.keyExample && (
                      <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                        {step.keyExample}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 border border-gray-200">
                  <CardContent className="p-0">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 mt-3">
                      Learn more <ChevronRight className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Models Sidebar */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-semibold text-lg">Featured Models</h2>
              <a href="#" className="text-blue-600 text-sm">View Trending →</a>
            </div>
            
            <div className="space-y-4">
              {featuredModels.map((model, index) => (
                <Card key={index} className="p-4 border border-gray-200 hover:border-gray-300 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{model.icon}</span>
                        <div>
                          <h3 className="font-medium text-sm">{model.name}</h3>
                          {model.version && (
                            <span className="text-xs text-gray-500">{model.version}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="font-medium text-gray-900">{Object.values(model.metrics)[0]}</div>
                        <div className="text-gray-500">{Object.keys(model.metrics)[0]}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-gray-900">{Object.values(model.metrics)[1]}</div>
                        <div className="text-gray-500">{Object.keys(model.metrics)[1]}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-green-600">{Object.values(model.metrics)[2]}</div>
                        <div className="text-gray-500">{Object.keys(model.metrics)[2]}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Top Apps Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-lg">📱 Top Apps</h2>
            <span className="text-sm text-gray-500">Today</span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Largest public apps using our usage tracking on OpenRouter
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
            {topApps.map((app, index) => (
              <div key={index} className="flex items-center gap-3 py-2">
                <span className="text-sm text-gray-500 w-4">{app.rank}.</span>
                <span className="text-lg">{app.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm truncate">{app.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{app.description}</p>
                </div>
                <span className="text-sm font-mono text-gray-600">{app.users}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span>© 2023 – 2025 OpenRouter, Inc.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-700">📘</a>
                <a href="#" className="hover:text-gray-700">🔗</a>
                <a href="#" className="hover:text-gray-700">📧</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span>Status</span>
              <span>Announcements</span>
              <span>Docs</span>
              <span>Partners</span>
              <span>Careers</span>
              <span>Pricing</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;