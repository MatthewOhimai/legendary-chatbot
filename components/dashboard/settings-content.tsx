"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Globe, Shield, Download, Trash2, AlertTriangle, Camera, Save, Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function SettingsContent() {
  const { theme, setTheme } = useTheme()
  const [profile, setProfile] = useState({
    firstName: "Ohimai",
    lastName: "Matthew",
    email: "ohimai@example.com",
    bio: "AI Engineer and creator of Legendary-Grade Chatbot",
    timezone: "Africa/Lagos",
    language: "en",
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
    weeklyReports: true,
  })

  const [privacy, setPrivacy] = useState({
    dataCollection: true,
    analytics: true,
    thirdPartySharing: false,
    gdprConsent: true,
    ndprConsent: true,
  })

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "yo", name: "Yoruba", flag: "🇳🇬" },
    { code: "ha", name: "Hausa", flag: "🇳🇬" },
    { code: "ru", name: "Russian", flag: "🇷🇺" },
  ]

  const timezones = [
    { value: "Africa/Lagos", label: "Lagos (WAT)" },
    { value: "America/New_York", label: "New York (EST)" },
    { value: "Europe/London", label: "London (GMT)" },
    { value: "Europe/Moscow", label: "Moscow (MSK)" },
    { value: "Asia/Tokyo", label: "Tokyo (JST)" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Manage your account preferences, privacy settings, and application behavior
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="language">Language</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback className="text-lg">OM</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                </div>
              </div>

              <Separator />

              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select value={profile.timezone} onValueChange={(value) => setProfile({ ...profile, timezone: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz.value} value={tz.value}>
                        {tz.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified about updates and activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, emailNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications in your browser</p>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive emails about new features and updates</p>
                  </div>
                  <Switch
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketingEmails: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Security Alerts</Label>
                    <p className="text-sm text-muted-foreground">Important security notifications</p>
                  </div>
                  <Switch
                    checked={notifications.securityAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, securityAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">Weekly usage and analytics reports</p>
                  </div>
                  <Switch
                    checked={notifications.weeklyReports}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
                  />
                </div>
              </div>

              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Language & Region</CardTitle>
              <CardDescription>Set your preferred language and regional settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Interface Language</Label>
                  <Select
                    value={profile.language}
                    onValueChange={(value) => setProfile({ ...profile, language: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          <div className="flex items-center space-x-2">
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Alert>
                  <Globe className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Multi-language AI Support:</strong> Our AI can understand and respond in English, Yoruba,
                    Hausa, and Russian. The interface language setting only affects the UI elements.
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  <Label>Supported AI Languages</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {languages.map((lang) => (
                      <div key={lang.code} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </div>
                        <Badge variant="secondary">Available</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Save className="w-4 h-4 mr-2" />
                Save Language Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Data Protection</CardTitle>
              <CardDescription>Control how your data is collected and used</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  We are committed to protecting your privacy and complying with GDPR, NDPR, and other data protection
                  regulations.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Data Collection</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow collection of usage data to improve our services
                    </p>
                  </div>
                  <Switch
                    checked={privacy.dataCollection}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, dataCollection: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Analytics</Label>
                    <p className="text-sm text-muted-foreground">Help us understand how you use our platform</p>
                  </div>
                  <Switch
                    checked={privacy.analytics}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, analytics: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Third-party Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share anonymized data with trusted partners</p>
                  </div>
                  <Switch
                    checked={privacy.thirdPartySharing}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, thirdPartySharing: checked })}
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label>Compliance Consents</Label>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>GDPR Consent (EU)</Label>
                      <p className="text-sm text-muted-foreground">General Data Protection Regulation compliance</p>
                    </div>
                    <Switch
                      checked={privacy.gdprConsent}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, gdprConsent: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>NDPR Consent (Nigeria)</Label>
                      <p className="text-sm text-muted-foreground">Nigeria Data Protection Regulation compliance</p>
                    </div>
                    <Switch
                      checked={privacy.ndprConsent}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, ndprConsent: checked })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Data Management</Label>
                <div className="flex space-x-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export My Data
                  </Button>
                  <Button variant="outline">View Privacy Policy</Button>
                </div>
              </div>

              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Save className="w-4 h-4 mr-2" />
                Save Privacy Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance & Theme</CardTitle>
              <CardDescription>Customize the look and feel of your interface</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label>Theme Preference</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant={theme === "light" ? "default" : "outline"}
                      onClick={() => setTheme("light")}
                      className="flex flex-col items-center space-y-2 h-20"
                    >
                      <Sun className="w-6 h-6" />
                      <span>Light</span>
                    </Button>
                    <Button
                      variant={theme === "dark" ? "default" : "outline"}
                      onClick={() => setTheme("dark")}
                      className="flex flex-col items-center space-y-2 h-20"
                    >
                      <Moon className="w-6 h-6" />
                      <span>Dark</span>
                    </Button>
                    <Button
                      variant={theme === "system" ? "default" : "outline"}
                      onClick={() => setTheme("system")}
                      className="flex flex-col items-center space-y-2 h-20"
                    >
                      <Monitor className="w-6 h-6" />
                      <span>System</span>
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label>Color Scheme</Label>
                  <p className="text-sm text-muted-foreground">
                    The indigo-blue theme is optimized for the Legendary-Grade experience
                  </p>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full border-2 border-indigo-800"></div>
                    <div className="w-8 h-8 bg-purple-600 rounded-full opacity-50"></div>
                    <div className="w-8 h-8 bg-blue-600 rounded-full opacity-50"></div>
                    <div className="w-8 h-8 bg-slate-600 rounded-full opacity-50"></div>
                  </div>
                  <Badge variant="secondary">More themes coming soon</Badge>
                </div>
              </div>

              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Save className="w-4 h-4 mr-2" />
                Save Appearance
              </Button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="text-red-600 dark:text-red-400">Danger Zone</CardTitle>
              <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-red-200 dark:border-red-800">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>These actions cannot be undone. Please proceed with caution.</AlertDescription>
              </Alert>

              <div className="space-y-3">
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-950">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete All Chat History
                </Button>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-950">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
