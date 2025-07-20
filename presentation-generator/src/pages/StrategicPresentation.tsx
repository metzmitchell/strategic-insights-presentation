import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Home, 
  TrendingUp, 
  Users, 
  Target, 
  AlertCircle, 
  ChevronDown,
  Building2,
  DollarSign,
  Briefcase,
  Hammer,
  MapPin,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight
} from 'lucide-react';

const StrategicPresentation = () => {
  const [counters, setCounters] = useState({
    revenue: 0,
    profit: 0,
    projects: 0,
    avgDeal: 0
  });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const targetValues = {
      revenue: 24799999.60,
      profit: 2975999.96,
      projects: 32,
      avgDeal: 775000
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        revenue: targetValues.revenue * progress,
        profit: targetValues.profit * progress,
        projects: Math.floor(targetValues.projects * progress),
        avgDeal: targetValues.avgDeal * progress
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Chart data
  const revenueData = [
    { month: 'Jan', revenue: 2745454.54, profit: 329454.54 },
    { month: 'Feb', revenue: 2745454.54, profit: 329454.54 },
    { month: 'Mar', revenue: 4127272.72, profit: 495272.73 },
    { month: 'Apr', revenue: 4145454.54, profit: 497454.55 },
    { month: 'May', revenue: 4145454.54, profit: 497454.55 },
    { month: 'Jun', revenue: 4127272.72, profit: 495272.73 },
    { month: 'Jul', revenue: 2763636.36, profit: 331636.36 }
  ];

  const leadSourceData = [
    { name: 'Referrals', value: 97, percentage: 64.7 },
    { name: 'Google Ads', value: 42, percentage: 28 },
    { name: 'Houzz', value: 8, percentage: 5.3 },
    { name: 'Other', value: 3, percentage: 2 }
  ];

  const monthlyLeadData = [
    { month: 'Jan', realtor: 4, architect: 4, client: 2, parade: 0, google: 5, houzz: 1, other: 0 },
    { month: 'Feb', realtor: 4, architect: 3, client: 3, parade: 0, google: 6, houzz: 0, other: 0 },
    { month: 'Mar', realtor: 2, architect: 2, client: 1, parade: 15, google: 5, houzz: 1, other: 0 },
    { month: 'Apr', realtor: 6, architect: 5, client: 4, parade: 0, google: 9, houzz: 0, other: 1 },
    { month: 'May', realtor: 6, architect: 6, client: 3, parade: 0, google: 8, houzz: 1, other: 1 },
    { month: 'Jun', realtor: 6, architect: 6, client: 4, parade: 0, google: 6, houzz: 0, other: 0 },
    { month: 'Jul', realtor: 5, architect: 4, client: 2, parade: 0, google: 7, houzz: 1, other: 1 }
  ];

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#6b7280'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100 dark:to-slate-900 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80")'
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center max-w-4xl mx-auto px-6"
        >
          <Badge variant="secondary" className="mb-4">
            <Building2 className="w-3 h-3 mr-1" />
            Half-Year Strategic Review
          </Badge>
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
            Rowan Construction
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive performance analysis and strategic opportunities for sustainable growth
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-slate-400 animate-bounce" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Executive Summary - Key Metrics */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              The Big Picture
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Strong growth driven by referrals, with untapped opportunities in high-end renovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                icon: DollarSign, 
                label: 'Total Revenue (YTD)', 
                value: `$${(counters.revenue / 1000000).toFixed(1)}M`,
                desc: 'Strong revenue growth'
              },
              { 
                icon: TrendingUp, 
                label: 'Gross Profit (YTD)', 
                value: `$${(counters.profit / 1000000).toFixed(1)}M`,
                desc: '12% profit margin'
              },
              { 
                icon: Briefcase, 
                label: 'Projects Closed', 
                value: counters.projects,
                desc: 'High-value projects'
              },
              { 
                icon: Target, 
                label: 'Average Deal Size', 
                value: `$${(counters.avgDeal / 1000).toFixed(0)}K`,
                desc: 'Premium market position'
              }
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <metric.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardDescription>{metric.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                      {metric.value}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      {metric.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Key Insights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: 'Strong Growth, But Reliant on Referrals',
                content: 'Over 60% of leads come from referrals, indicating high client satisfaction but significant risk if pipeline slows.',
                color: 'text-blue-600'
              },
              {
                icon: Hammer,
                title: 'Missed Opportunity in Renovations',
                content: 'High-end renovations are booming in Phoenix, yet represent a smaller portion of business.',
                color: 'text-amber-600'
              },
              {
                icon: AlertCircle,
                title: 'Marketing Underinvestment',
                content: 'Less than 1% of revenue spent on marketing is holding back brand awareness and lead diversification.',
                color: 'text-red-600'
              },
              {
                icon: Lightbulb,
                title: 'The "Oak Leaf" Opportunity',
                content: 'Upcoming Oak Leaf Community launch is a major strategic opportunity requiring focused marketing.',
                color: 'text-green-600'
              }
            ].map((insight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <insight.icon className={`w-8 h-8 ${insight.color} shrink-0`} />
                      <CardTitle className="text-xl">{insight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">{insight.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Performance Deep Dive */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Sales Performance Deep Dive
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Understanding revenue trends and lead generation patterns
            </p>
          </motion.div>

          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Revenue and Profitability Over Time</CardTitle>
                <CardDescription>Monthly breakdown of gross revenue and profit</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                    <Tooltip 
                      formatter={(value) => `$${Number(value).toLocaleString()}`}
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px' }}
                    />
                    <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
                    <Bar dataKey="profit" fill="#10b981" name="Profit" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Lead Sources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Lead Sources Breakdown</CardTitle>
                  <CardDescription>Where our business comes from</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={leadSourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry) => `${entry.name} (${entry.percentage}%)`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {leadSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-4 space-y-2">
                    {leadSourceData.map((source, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[idx] }} />
                          <span className="text-sm">{source.name}</span>
                        </div>
                        <Badge variant="secondary">{source.value} leads</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>Critical observations from the data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-900 dark:text-amber-100">
                          Heavy Referral Dependence
                        </p>
                        <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                          64.7% of leads from referrals creates vulnerability if this pipeline slows
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900 dark:text-green-100">
                          Google Ads Performance
                        </p>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          Second highest lead source with room for growth through increased investment
                        </p>
                      </div>
                    </div>
                  </div>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <span className="font-medium">View Monthly Lead Breakdown</span>
                      <ChevronDown className="w-4 h-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Month</th>
                              <th className="text-center py-2">Realtor</th>
                              <th className="text-center py-2">Architect</th>
                              <th className="text-center py-2">Client</th>
                              <th className="text-center py-2">Parade</th>
                              <th className="text-center py-2">Google</th>
                              <th className="text-center py-2">Houzz</th>
                              <th className="text-center py-2">Other</th>
                            </tr>
                          </thead>
                          <tbody>
                            {monthlyLeadData.map((month, idx) => (
                              <tr key={idx} className="border-b">
                                <td className="py-2 font-medium">{month.month}</td>
                                <td className="text-center py-2">{month.realtor}</td>
                                <td className="text-center py-2">{month.architect}</td>
                                <td className="text-center py-2">{month.client}</td>
                                <td className="text-center py-2">{month.parade}</td>
                                <td className="text-center py-2">{month.google}</td>
                                <td className="text-center py-2">{month.houzz}</td>
                                <td className="text-center py-2">{month.other}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing Plan vs Reality */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Marketing Plan vs. Reality
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Comparing goals with actual performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                goal: 'Increase qualified leads to 13/month',
                reality: 'Met in Mar, Apr, May, Jun',
                status: 'partial',
                icon: Target
              },
              {
                goal: 'Increase marketing spend to 3% of revenue',
                reality: 'Currently less than 1%',
                status: 'failed',
                icon: DollarSign
              },
              {
                goal: 'Increase brand awareness',
                reality: 'Limited reach due to low spend',
                status: 'failed',
                icon: TrendingUp
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <item.icon className="w-8 h-8 text-primary" />
                      {item.status === 'success' && <CheckCircle2 className="w-6 h-6 text-green-600" />}
                      {item.status === 'partial' && <AlertCircle className="w-6 h-6 text-amber-600" />}
                      {item.status === 'failed' && <XCircle className="w-6 h-6 text-red-600" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Goal</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.goal}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Reality</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.reality}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="font-medium text-lg">View Detailed Marketing Metrics</span>
                <ChevronDown className="w-5 h-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Marketing Spend', value: '$203,846.16' },
                    { label: 'Google Ads Spend', value: '$19,090.89' },
                    { label: 'Website Visitors', value: '27,400' },
                    { label: 'Lead Magnet Form Fills', value: '316' }
                  ].map((metric, idx) => (
                    <Card key={idx}>
                      <CardHeader className="pb-2">
                        <CardDescription>{metric.label}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">{metric.value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </motion.div>
        </div>
      </section>

      {/* Market Landscape & Opportunities */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Market Landscape & Opportunities
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Phoenix luxury market insights and growth potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Home,
                title: 'Luxury Market is Hot',
                content: 'Phoenix luxury home market thriving with high-net-worth individuals, remote work flexibility, and favorable tax environment.',
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                icon: Hammer,
                title: 'Renovations Gateway',
                content: 'High-end renovation market growing rapidly - strategic entry point for builders moving upmarket.',
                gradient: 'from-amber-500 to-orange-600'
              },
              {
                icon: Users,
                title: 'Labor Shortage Challenge',
                content: 'Significant construction labor shortage requires creative solutions: incentives, efficiency focus.',
                gradient: 'from-red-500 to-pink-600'
              },
              {
                icon: MapPin,
                title: 'Growth Hotspots',
                content: 'North Central Phoenix (Arcadia, Biltmore), North Scottsdale, Paradise Valley prime for luxury development.',
                gradient: 'from-green-500 to-teal-600'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient}`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-lg hover:shadow-md transition-shadow">
                <span className="font-medium text-lg">Deeper Dive into Market Dynamics</span>
                <ChevronDown className="w-5 h-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Who is the new luxury buyer?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span>High-income individuals ($100K-$200K+ bracket)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Executives, engineers, professionals from TSMC & Intel</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Remote workers seeking quality of life</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What do they want?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Sustainable, energy-efficient designs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Open floor plans & smart home technology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Personalized outdoor living spaces</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </motion.div>
        </div>
      </section>

      {/* Strategic Recommendations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-serif text-slate-900 dark:text-slate-100 mb-4">
              Strategic Recommendations
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Action-oriented strategies for sustainable growth
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Diversify Lead Generation',
                what: 'Reduce reliance on referrals by investing in multi-channel marketing',
                how: [
                  'Increase Google Ads spend targeting luxury markets in North Scottsdale and Paradise Valley',
                  'Develop content marketing strategy showcasing expertise in luxury and sustainable building',
                  'Launch targeted marketing campaigns for Oak Leaf Community'
                ],
                prompt: 'What\'s a realistic marketing budget we can commit to for the next 6-12 months?',
                color: 'from-blue-500 to-blue-600'
              },
              {
                number: '2',
                title: 'Attack the High-End Renovation Market',
                what: 'Actively pursue large-scale, high-margin renovation projects',
                how: [
                  'Create dedicated website section for high-end renovations with portfolio',
                  'Develop marketing materials targeting homeowners in Arcadia',
                  'Offer design-build services to streamline the process'
                ],
                prompt: 'Do we have the right team and processes for higher volume renovation projects?',
                color: 'from-amber-500 to-amber-600'
              },
              {
                number: '3',
                title: 'Address Labor Shortage Proactively',
                what: 'Implement strategies to attract and retain top talent',
                how: [
                  'Offer competitive wages and benefits',
                  'Partner with local trade schools and Build Your Future Arizona',
                  'Create positive company culture valuing craftsmanship'
                ],
                prompt: 'How can we make Rowan Construction the most attractive employer for skilled craftspeople?',
                color: 'from-green-500 to-green-600'
              }
            ].map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${rec.color}`} />
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${rec.color} flex items-center justify-center text-white font-bold text-xl`}>
                        {rec.number}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{rec.title}</CardTitle>
                        <CardDescription className="text-base">{rec.what}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">How to implement:</p>
                      <ul className="space-y-2">
                        {rec.how.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <p className="text-sm font-medium text-primary">Key Question for Leadership:</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{rec.prompt}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl mb-8 text-slate-300">
              The Phoenix luxury market is yours to capture. With strategic marketing investment, 
              focus on high-end renovations, and proactive talent management, Rowan Construction 
              can achieve sustainable growth beyond referral dependence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-3">
                <TrendingUp className="w-5 h-5 mr-2" />
                Time to Scale Strategically
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategicPresentation; 