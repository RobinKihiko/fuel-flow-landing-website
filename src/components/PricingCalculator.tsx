import { useMemo, useState } from "react";
import { Check, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ETIMS_ADDON = 3000;

function planFor(branches: number) {
  if (branches <= 1) return { name: "Starter", perBranch: 5000, etimsIncluded: false };
  if (branches <= 5) return { name: "Growth", perBranch: 4000, etimsIncluded: false };
  return { name: "Pro", perBranch: 3500, etimsIncluded: true };
}

const fmt = (n: number) => `KSh ${Math.round(n).toLocaleString("en-KE")}`;

export function PricingCalculator() {
  const [branches, setBranches] = useState(3);
  const [etims, setEtims] = useState(false);
  const [annual, setAnnual] = useState(false);

  const q = useMemo(() => {
    const plan = planFor(branches);
    const base = plan.perBranch * branches;
    const addon = etims && !plan.etimsIncluded ? ETIMS_ADDON : 0;
    const monthly = base + addon;
    const yearlyFull = monthly * 12;
    const yearly = annual ? yearlyFull * 0.8 : yearlyFull;
    return {
      plan,
      base,
      addon,
      monthly: annual ? yearly / 12 : monthly,
      listMonthly: monthly,
      yearly,
      saving: annual ? yearlyFull - yearly : 0,
    };
  }, [branches, etims, annual]);

  return (
    <div className="grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-[1.1fr_0.9fr]">
      <div className="bg-background p-7 sm:p-9">
        <div>
          <div className="flex items-end justify-between gap-4">
            <Label className="text-sm text-muted-foreground">Number of branches</Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-sm"
                aria-label="Fewer branches"
                onClick={() => setBranches((b) => Math.max(1, b - 1))}
              >
                <Minus className="size-3.5" />
              </Button>
              <strong className="w-8 text-center text-2xl font-semibold text-gold">{branches}</strong>
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-sm"
                aria-label="More branches"
                onClick={() => setBranches((b) => Math.min(40, b + 1))}
              >
                <Plus className="size-3.5" />
              </Button>
            </div>
          </div>
          <Slider
            className="mt-6"
            value={[branches]}
            min={1}
            max={40}
            step={1}
            onValueChange={(v) => setBranches(v[0] ?? 1)}
            aria-label="Number of branches"
          />
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between gap-4 border border-border bg-surface p-4">
            <div>
              <p className="text-sm font-medium">eTIMS / KRA e-invoicing</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {q.plan.etimsIncluded
                  ? "Included with Pro at 6+ branches"
                  : `Flat add-on · ${fmt(ETIMS_ADDON)}/mo`}
              </p>
            </div>
            <Switch
              checked={etims || q.plan.etimsIncluded}
              disabled={q.plan.etimsIncluded}
              onCheckedChange={setEtims}
              aria-label="Include eTIMS"
            />
          </div>
          <div className="flex items-center justify-between gap-4 border border-border bg-surface p-4">
            <div>
              <p className="text-sm font-medium">Pay annually</p>
              <p className="mt-1 text-xs text-muted-foreground">Save 20% on annual prepay</p>
            </div>
            <Switch checked={annual} onCheckedChange={setAnnual} aria-label="Pay annually" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-surface p-7 sm:p-9">
        <div>
          <p className="eyebrow">Your estimate</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {q.plan.name} plan · {fmt(q.plan.perBranch)} per branch
          </p>
          <p className="mt-5 font-display text-4xl font-semibold text-gold-gradient sm:text-5xl">
            {fmt(q.monthly)}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            per month {annual && "· billed annually"}
          </p>

          <dl className="mt-7 space-y-3 border-t border-border pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">
                {branches} branch{branches > 1 ? "es" : ""}
              </dt>
              <dd>{fmt(q.base)}</dd>
            </div>
            {q.addon > 0 && (
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">eTIMS add-on</dt>
                <dd>{fmt(q.addon)}</dd>
              </div>
            )}
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Yearly total</dt>
              <dd>{fmt(q.yearly)}</dd>
            </div>
            {q.saving > 0 && (
              <div className="flex justify-between gap-4 text-success">
                <dt>Annual saving</dt>
                <dd>−{fmt(q.saving)}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="mt-8">
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex gap-2">
              <Check className="size-3.5 text-gold" /> Free trial on your first branch
            </li>
            <li className="flex gap-2">
              <Check className="size-3.5 text-gold" /> No installation fees, no hidden charges
            </li>
          </ul>
          <Button asChild className="mt-6 h-11 w-full rounded-sm font-semibold">
            <a href="#contact">Get this quote</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
