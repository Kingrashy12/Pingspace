import { useLocation } from "@solidjs/router";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function pageName() {
  const currentLocation = useLocation();
  const pathnameWithoutSlash = currentLocation.pathname.replace("/", "");
  const capitalizedPathname = capitalizeFirstLetter(pathnameWithoutSlash);

  return capitalizedPathname;
}
