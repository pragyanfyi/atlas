import { Outfit } from "next/font/google";

/** Wordmark font. Used only for the "Atlas" name; body text stays Inter. */
export const wordmark = Outfit({
  subsets: ["latin"],
  weight: "600",
});
