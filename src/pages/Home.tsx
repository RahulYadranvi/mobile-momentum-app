import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-primary mb-2">MoneySpin Dashboard</h1>
          <p className="text-muted-foreground">Spin Wheel Screen - Coming in Phase 2</p>
        </div>
        <Card className="p-6">
          <p className="text-center text-foreground">Interactive spin wheel will be implemented here</p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
