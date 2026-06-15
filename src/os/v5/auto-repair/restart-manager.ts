export type RestartPlan = {
  stopCommand: string;
  startCommand: string;
};

export function createRestartPlan(port = 3001): RestartPlan {
  return {
    stopCommand: "Stop matching node/next processes",
    startCommand: `npm.cmd run dev -- -p ${port}`,
  };
}
