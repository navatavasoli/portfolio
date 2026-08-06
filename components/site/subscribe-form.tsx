"use client";

import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Set this to your Buttondown username (buttondown.com/settings) to go live.
const BUTTONDOWN_USERNAME = "YOUR_BUTTONDOWN_USERNAME";

export function SubscribeForm({ className }: { className?: string }) {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit() {
    window.open(`https://buttondown.com/${BUTTONDOWN_USERNAME}`, "popupwindow");
    setSubscribed(true);
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-md border border-border bg-card p-5",
        className
      )}
    >
      <div className="flex items-center gap-2 font-tech text-xs text-primary">
        <Mail className="h-3.5 w-3.5" /> SUBSCRIBE
      </div>
      <p className="text-sm text-muted-foreground">
        Get an email whenever I publish a new post. No spam, unsubscribe
        anytime.
      </p>

      {subscribed ? (
        <p className="font-tech text-xs text-primary">
          Almost there — check your inbox to confirm.
        </p>
      ) : (
        <form
          action={`https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`}
          method="post"
          target="popupwindow"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="bd-email" className="sr-only">
            Email address
          </label>
          <input
            id="bd-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="h-9 flex-1 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary"
          />
          <input type="hidden" value="1" name="embed" />
          <Button
            type="submit"
            size="lg"
            className="gap-1.5 font-tech transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
          >
            Subscribe <ArrowUpRight className="h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  );
}
