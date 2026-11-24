export type Platform = "ios" | "material";

export const defaultPlatform: Platform = "ios";
export const platformStorageKey = "atlas-platform";

/**
 * Runs before first paint (inlined in <head>) so a saved platform is applied
 * without flashing the default theme first.
 */
export const platformScript = `try{if(localStorage.getItem(${JSON.stringify(
  platformStorageKey,
)})==="material")document.documentElement.dataset.platform="material"}catch(e){}`;
