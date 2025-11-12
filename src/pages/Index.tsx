import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Coins, TrendingUp, Users, Wallet } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coins className="w-12 h-12 text-accent" />
              <h1 className="text-5xl md:text-6xl font-bold text-primary">MoneySpin</h1>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Spin & Earn Real Cash Rewards
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch ads, spin the wheel, and earn coins that convert to real money. 
            Withdraw directly to your bank account when you reach ₹500.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg" asChild>
              <Link to="/login">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link to="/home">View Demo</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          <Card className="p-6 text-center space-y-4 hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Watch & Earn</h3>
            <p className="text-sm text-muted-foreground">
              Watch video ads to unlock spins and earn coins with every wheel spin
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg">Daily Rewards</h3>
            <p className="text-sm text-muted-foreground">
              Login daily to maintain your streak and earn bonus coins
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">Refer & Earn</h3>
            <p className="text-sm text-muted-foreground">
              Invite friends and earn bonus rewards for every successful referral
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
              <Wallet className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-lg">Easy Withdrawal</h3>
            <p className="text-sm text-muted-foreground">
              Withdraw your earnings directly to your bank account (min ₹500)
            </p>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">Phase 1: Planning Complete ✓</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold text-secondary font-mono">100%</p>
                <p className="text-sm text-muted-foreground">Design System</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary font-mono">100%</p>
                <p className="text-sm text-muted-foreground">Supabase Setup</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent font-mono">100%</p>
                <p className="text-sm text-muted-foreground">Route Structure</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-success font-mono">6</p>
                <p className="text-sm text-muted-foreground">Core Screens</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
