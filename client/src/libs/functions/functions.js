import { useLocation } from "@solidjs/router";
import { jwtDecode } from "jwt-decode";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function pageName() {
  const currentLocation = useLocation();
  const pathnameWithoutSlash = currentLocation.pathname.replace("/", "");
  const capitalizedPathname = capitalizeFirstLetter(pathnameWithoutSlash);

  return capitalizedPathname;
}

export function decodeToken(token) {
  try {
    const user = jwtDecode(token);
    return user;
  } catch (error) {
    console.log("err decoding token", error);
  }
}

export function decodedUser(token) {
  try {
    const user = jwtDecode(token);
    if (user) {
      const User = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profile: user.profile,
        created: user.created,
      };
      return User;
    }
  } catch (error) {
    console.log("err decoding token", error);
  }
}

export const formatTime = (timestamp) => {
  const currentTime = new Date();
  const timeDifference = currentTime - timestamp;

  // Convert milliseconds to seconds, minutes, and hours
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    // Display in days if more than a day
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    // Display in hours if more than an hour
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    // Display in minutes if more than a minute
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else {
    // Display in seconds if less than a minute
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
};

export function formatDate(date) {
  const timestamp = new Date(date);
  const formattedDate = timestamp.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });

  return formattedDate;
}
