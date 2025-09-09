import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Building2,
  Users,
  CreditCard,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react"

export default function MoniePointStaffWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-xl text-primary">MONIEPOINT</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#expertise" className="text-foreground hover:text-primary transition-colors">
                Expertise
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary-foreground/20">
                <AvatarImage src="/professional-african-business-person.jpg" alt="Staff Member" />
                <AvatarFallback className="text-2xl bg-primary-foreground text-primary">AO</AvatarFallback>
              </Avatar>
              <h1 className="text-5xl font-bold mb-4 text-balance">
                Your Partner in <br />
                <span className="text-secondary">Financial Growth</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-2">Adebayo Paul</p>
              <p className="text-lg text-primary-foreground/80 mb-8">Senior Financial Advisor | Moniepoint Inc.</p>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Empowering businesses and individuals to achieve their financial goals through innovative solutions and
                personalized service at Nigeria's leading fintech company.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <a href="#contact">
                  Get Started
                </a>
              </Button>
              <Button size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <a href="#service">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-balance">About Me</h2>
              <p className="text-xl text-muted-foreground">
                Dedicated to transforming financial experiences across Africa
              </p>
            </div>
            <Card className="p-8">
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  With over 8 years of experience in financial services and fintech innovation, I specialize in helping
                  businesses and individuals navigate the evolving landscape of digital finance. At Moniepoint, I've had
                  the privilege of working with thousands of clients to streamline their financial operations and unlock
                  new growth opportunities.
                </p>
                <p className="text-lg leading-relaxed">
                  My expertise spans business banking solutions, payment processing, credit facilities, and financial
                  advisory services. I'm passionate about leveraging technology to make financial services more
                  accessible, efficient, and impactful for African businesses.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary">Financial Advisory</Badge>
                  <Badge variant="secondary">Business Banking</Badge>
                  <Badge variant="secondary">Payment Solutions</Badge>
                  <Badge variant="secondary">Credit Analysis</Badge>
                  <Badge variant="secondary">Fintech Innovation</Badge>
                  <Badge variant="secondary">Client Relations</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-balance">My Expertise</h2>
              <p className="text-xl text-muted-foreground">Specialized knowledge to drive your financial success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Business Banking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive banking solutions tailored for businesses of all sizes, from startups to enterprises.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Payment Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Modern payment processing systems that streamline transactions and improve cash flow.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Credit & Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Flexible credit solutions and loan products designed to fuel business growth and expansion.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Client Advisory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Personalized financial guidance to help clients make informed decisions and achieve their goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced risk assessment and mitigation strategies to protect your financial interests.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Digital Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cutting-edge fintech solutions that leverage technology for superior financial experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Moniepoint Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-balance">Moniepoint Services</h2>
              <p className="text-xl text-muted-foreground">Comprehensive financial solutions for modern businesses</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Business Banking</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Transform your business operations with our comprehensive banking solutions. From account management
                  to transaction processing, we provide the tools and expertise your business needs to thrive in today's
                  competitive landscape.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Multi-currency business accounts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Real-time transaction monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Advanced reporting and analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Dedicated relationship management</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/10">
                  <CardContent className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Trusted by 5M+ Businesses</h4>
                    <p className="text-muted-foreground">
                      Join millions of businesses across Africa who trust Moniepoint for their financial operations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold mb-6 text-primary">Personal Banking Services</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Experience banking that puts you first. Our personal banking services are designed to simplify your
                  financial life while providing the security and convenience you deserve.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Zero-fee personal accounts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Instant money transfers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Mobile-first banking experience</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/5">
                  <CardContent className="text-center">
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Personalized Service</h4>
                    <p className="text-muted-foreground">
                      Get dedicated support and tailored financial solutions that grow with your needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-balance">Let's Connect</h2>
              <p className="text-xl text-muted-foreground">
                Ready to transform your financial journey? Get in touch today.
              </p>
            </div>
            <div className="gap-12">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">adebayopaul58@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+234 7068707844</p>
                      <p className="text-muted-foreground">+234 9127905593</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Office</p>
                      <p className="text-muted-foreground">8, Abubakar Batura Street, Off Stadium Road, Ilorin, Kwara State</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <span className="font-bold text-2xl">MONIEPOINT</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Empowering financial growth across Africa, one client at a time.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Support
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 Moniepoint Inc. All rights reserved. | Adebayo Paul - Senior Financial Advisor
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
