import { Card } from "@/components/ui/card";

const Wallet = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-secondary mb-2">Wallet</h1>
          <p className="text-muted-foreground">Coin Balance & Transactions - Coming in Phase 2</p>
        </div>
        <Card className="p-6">
          <p className="text-center text-foreground">Wallet functionality will be implemented here</p>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
