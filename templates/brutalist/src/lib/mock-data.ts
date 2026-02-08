import type { StatCard, Deploy, WeeklyDeploys } from "@notabhay-ui/ui";

export const statCards: StatCard[] = [
  { label: "Total Deploys", value: "1,284", change: "+12.5%", trend: "up" },
  { label: "Avg Review Time", value: "4.2h", change: "-8.3%", trend: "down" },
  { label: "Active PRs", value: "23", change: "+2", trend: "up" },
  { label: "Incidents (30d)", value: "7", change: "-22.2%", trend: "down" },
];

export const deploys: Deploy[] = [
  {
    service: "api-gateway",
    environment: "production",
    status: "success",
    author: "Sarah Chen",
    timestamp: "2024-01-15 14:32",
  },
  {
    service: "auth-service",
    environment: "staging",
    status: "success",
    author: "Marcus Webb",
    timestamp: "2024-01-15 14:18",
  },
  {
    service: "web-app",
    environment: "production",
    status: "failed",
    author: "Priya Patel",
    timestamp: "2024-01-15 13:55",
  },
  {
    service: "data-pipeline",
    environment: "production",
    status: "success",
    author: "Alex Kojima",
    timestamp: "2024-01-15 12:41",
  },
  {
    service: "api-gateway",
    environment: "staging",
    status: "success",
    author: "Sarah Chen",
    timestamp: "2024-01-15 11:22",
  },
  {
    service: "web-app",
    environment: "staging",
    status: "success",
    author: "Jordan Lee",
    timestamp: "2024-01-15 10:08",
  },
  {
    service: "auth-service",
    environment: "production",
    status: "success",
    author: "Marcus Webb",
    timestamp: "2024-01-15 09:45",
  },
  {
    service: "notifications",
    environment: "production",
    status: "success",
    author: "Priya Patel",
    timestamp: "2024-01-15 08:30",
  },
];

export const weeklyDeploys: WeeklyDeploys[] = [
  { day: "MON", count: 18 },
  { day: "TUE", count: 24 },
  { day: "WED", count: 31 },
  { day: "THU", count: 22 },
  { day: "FRI", count: 28 },
  { day: "SAT", count: 8 },
  { day: "SUN", count: 4 },
];
