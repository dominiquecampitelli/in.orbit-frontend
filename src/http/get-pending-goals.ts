type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequencyy: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch("http://localhost:3333/summary");
  const data = await response.json();

  return data.pendingGoals;
}
