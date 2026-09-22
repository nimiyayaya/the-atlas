import { atlasFirstLevelRegions, type AtlasCountryRegions } from "../../public/reference images/atlas-first-level-regions";

const sourceNameBySlug: Record<string, string> = {
  brunei: "brunei-darussalam",
  "dr-congo": "congo-the-democratic-republic-of",
  laos: "lao-peoples-democratic-republic-of",
  micronesia: "micronesia-federated-states-of",
  "north-korea": "korea-democratic-peoples-republic-of",
  "south-korea": "korea-republic-of",
  "vatican-city": "holy-see-vatican-city-state",
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const regionsBySourceSlug = new Map(
  atlasFirstLevelRegions.map((country) => [slugify(country.countryName), country]),
);

export function getRegionsForCountry(
  countrySlug: string,
  countryName: string,
): AtlasCountryRegions | undefined {
  return (
    regionsBySourceSlug.get(sourceNameBySlug[countrySlug] ?? slugify(countryName)) ??
    undefined
  );
}
