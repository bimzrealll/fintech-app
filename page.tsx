"use client"

import { useState } from "react"
import { AuthProvider, useAuth } from "@/lib/auth-context"
import { Navigation } from "@/components/navigation"
import { AuthScreen } from "@/components/auth/auth-screen"
import { LoadingScreen } from "@/components/loading-screen"
import { HomeTab } from "@/components/tabs/home-tab"
import { HistoryTab } from "@/components/tabs/history-tab"
import { ScanTab } from "@/components/tabs/scan-tab"
import { NotesTab } from "@/components/tabs/notes-tab"
import { AccountTab } from "@/components/tabs/account-tab"

function AppContent() {
  const [activeTab, setActiveTab] = useState("home")
  const { user, loading } = useAuth()

  if (loading) {
    return <LoadingScreen />
  }

  if (!user) {
    return <AuthScreen />
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />
      case "history":
        return <HistoryTab />
      case "scan":
        return <ScanTab />
      case "notes":
        return <NotesTab />
      case "account":
        return <AccountTab />
      default:
        return <HomeTab />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <main className="pb-24">{renderActiveTab()}</main>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
