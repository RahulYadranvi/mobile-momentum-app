import { Card } from "@/components/ui/card";

const Withdraw = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-accent mb-2">Withdraw</h1>
          <p className="text-muted-foreground">Withdrawal System - Coming in Phase 2</p>
        </div>
        <Card className="p-6">
          <p className="text-center text-foreground">Withdrawal functionality will be implemented here</p>
        </Card>
      </div>
    </div>
  );
};

export default Withdraw;
