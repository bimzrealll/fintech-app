import { Loader2 } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="glass-strong p-8 rounded-2xl">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FinanceFlow
          </h1>
          <p className="text-muted-foreground">Loading your account...</p>
        </div>
      </div>
    </div>
  )
}
