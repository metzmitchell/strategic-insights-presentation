import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Presentation Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Welcome</div>
            <p className="text-xs text-muted-foreground">
              Create beautiful presentations with ease
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
