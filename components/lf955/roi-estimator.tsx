"use client";

import { useState } from "react";

type RoiEstimatorLabels = {
  hourlyLoss: string;
  dailyHours: string;
  towers: string;
  duration: string;
  monthlyLoss: string;
  savings: string;
  payback: string;
  cycleExposure: string;
  monthsUnit: string;
};

type RoiEstimatorProps = {
  title: string;
  subtitle: string;
  labels: RoiEstimatorLabels;
  defaults: {
    hourlyLoss: number;
    dailyHours: number;
    towers: number;
    duration: number;
    savingsRate: number;
    paybackValue: number;
  };
};

const formatCurrency = (value: number) =>
  `$${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(value))}`;

const formatMonths = (value: number) => {
  const safeValue = Number.isFinite(value) ? value : 0;
  return `${safeValue.toFixed(1)}`;
};

export function RoiEstimator({ title, subtitle, labels, defaults }: RoiEstimatorProps) {
  const [hourlyLoss, setHourlyLoss] = useState(defaults.hourlyLoss);
  const [dailyHours, setDailyHours] = useState(defaults.dailyHours);
  const [towers, setTowers] = useState(defaults.towers);
  const [duration, setDuration] = useState(defaults.duration);
  const fields = [
    { label: labels.hourlyLoss, value: hourlyLoss, setter: setHourlyLoss },
    { label: labels.dailyHours, value: dailyHours, setter: setDailyHours },
    { label: labels.towers, value: towers, setter: setTowers },
    { label: labels.duration, value: duration, setter: setDuration },
  ] as const;

  const monthlyLoss = hourlyLoss * dailyHours * 30 * towers;
  const estimatedSavings = monthlyLoss * defaults.savingsRate;
  const paybackPeriod = defaults.paybackValue / Math.max(estimatedSavings, 1);
  const cycleExposure = hourlyLoss * dailyHours * duration * towers;

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">{title}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{subtitle}</h3>
        </div>
        <div className="hidden h-1 w-24 bg-amber-400 lg:block" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <span className="mb-3 block text-sm font-semibold text-slate-200">{field.label}</span>
              <input
                type="number"
                min="0"
                step="any"
                value={field.value}
                onChange={(event) => field.setter(Number(event.target.value) || 0)}
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
              />
            </label>
          ))}
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{labels.monthlyLoss}</p>
            <p className="mt-3 text-[38px] font-semibold leading-none text-[#F5A623]">{formatCurrency(monthlyLoss)}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{labels.savings}</p>
            <p className="mt-3 text-[38px] font-semibold leading-none text-[#F5A623]">{formatCurrency(estimatedSavings)}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{labels.payback}</p>
            <p className="mt-3 text-[38px] font-semibold leading-none text-[#F5A623]">
              {formatMonths(paybackPeriod)} {labels.monthsUnit}
            </p>
          </div>

          <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{labels.cycleExposure}</p>
            <p className="mt-3 text-[32px] font-semibold leading-none text-white">{formatCurrency(cycleExposure)}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              {duration} days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
