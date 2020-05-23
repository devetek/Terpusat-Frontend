import { HOSTNAME } from "config";
import history from "utils/history";

export const Link = (link: string): string => {
  if (link.includes(HOSTNAME)) {
    return link.replace(HOSTNAME, "");
  }

  return link;
};

export const onClickLink = (link: string): void => {
  if (!link) {
    console.error(
      `Link provided to this function is ${link}, no data received.`
    );
  }

  if (link.includes(HOSTNAME)) {
    history.push(Link(link));
  } else {
    window.location.href = link;
  }
};
