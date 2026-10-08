"use client";

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LogOut, LayoutDashboard, Users, FileText, Briefcase, HelpCircle, DollarSign, MessageSquare } from 'lucide-react';
// We will create these components next
import AdminNews from '@/components/admin/AdminNews';
import AdminCareers from '@/components/admin/AdminCareers';
import AdminReviews from '@/components/admin/AdminReviews';
import AdminFAQs from '@/components/admin/AdminFAQs';
import AdminPricing from '@/components/admin/AdminPricing';
import AdminTeam from '@/components/admin/AdminTeam';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("news");

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const menuItems = [
    { value: "news", label: "News", icon: <FileText className="w-4 h-4 mr-2" /> },
    { value: "careers", label: "Careers", icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { value: "reviews", label: "Reviews", icon: <MessageSquare className="w-4 h-4 mr-2" /> },
    { value: "faqs", label: "FAQs", icon: <HelpCircle className="w-4 h-4 mr-2" /> },
    { value: "pricing", label: "Pricing Plans", icon: <DollarSign className="w-4 h-4 mr-2" /> },
    { value: "team", label: "Team Members", icon: <Users className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Sidebar Navigation (simulated with Tabs) */}
      <Tabs 
        defaultValue="news" 
        orientation="vertical" 
        onValueChange={setActiveTab}
        className="flex w-full h-full"
      >
        <div className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <LayoutDashboard className="w-5 h-5 mr-2 text-primary" />
              OT Global Admin
            </h1>
          </div>
          
          <TabsList className="flex flex-col h-full items-start justify-start p-4 space-y-2 bg-transparent">
            {menuItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className={`w-full justify-start px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === item.value 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white"
                }`}
              >
                {item.icon}
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Button 
              variant="outline" 
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 p-8">
          <TabsContent value="news" className="h-full m-0 data-[state=inactive]:hidden"><AdminNews /></TabsContent>
          <TabsContent value="careers" className="h-full m-0 data-[state=inactive]:hidden"><AdminCareers /></TabsContent>
          <TabsContent value="reviews" className="h-full m-0 data-[state=inactive]:hidden"><AdminReviews /></TabsContent>
          <TabsContent value="faqs" className="h-full m-0 data-[state=inactive]:hidden"><AdminFAQs /></TabsContent>
          <TabsContent value="pricing" className="h-full m-0 data-[state=inactive]:hidden"><AdminPricing /></TabsContent>
          <TabsContent value="team" className="h-full m-0 data-[state=inactive]:hidden"><AdminTeam /></TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
