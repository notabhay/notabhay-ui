export interface StatCard {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface Deploy {
  service: string;
  environment: "production" | "staging";
  status: "success" | "failed" | "pending";
  author: string;
  timestamp: string;
}

export interface WeeklyDeploys {
  day: string;
  count: number;
}
