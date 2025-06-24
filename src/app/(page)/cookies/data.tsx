import { ReactNode } from "react";

const createRow = (...args: ReactNode[]) => {
  const [name, purpose, provider, service, type, expiresIn] = args;

  return {
    tableInner: [
      { row: ["Name:", name] },
      {
        row: ["Purpose:", purpose],
      },
      { row: ["Provider:", provider] },
      {
        row: ["Service:", service],
      },
      { row: ["Type:", type] },
      { row: ["Expires in:", expiresIn] },
    ],
  };
};

const createShortRow = (...args: ReactNode[]) => {
  const [name, provider, type, expiresIn] = args;

  return {
    tableInner: [
      { row: ["Name:", name] },
      { row: ["Provider:", provider] },
      { row: ["Type:", type] },
      { row: ["Expires in:", expiresIn] },
    ],
  };
};

export const analyticsCookies = [
  createRow(
    "_ga",
    "Records a particular ID used to come up with data about website usage by the user",
    ".monclips.com",
    <>
      Google Analytics{" "}
      <a
        href="https://business.safety.google/privacy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "http_cookie",
    "1 year 1 month 4 days"
  ),
  createRow(
    "s7",
    "Gather data regarding site usage and user behavior on the website.",
    ".yandex.com",
    "Adobe Analytics",
    "server_cookie",
    "9 years 11 months 28 days"
  ),
  createRow(
    "s7",
    "Gather data regarding site usage and user behavior on the website.",
    "monclips.com",
    "Adobe Analytics",
    "html_local_storage",
    "persistent"
  ),
  createRow(
    "s7",
    "Gather data regarding site usage and user behavior on the website.",
    "mc.yandex.com",
    "Adobe Analytics",
    "server_cookie",
    "session"
  ),
  createRow(
    "_ym_uid",
    "Used by Yandex Metrica as a unique user ID to help track a user in a website",
    "monclips.com",
    <>
      Metrica{" "}
      <a
        href="https://yandex.com/legal/privacy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "html_local_storage",
    "persistent"
  ),
  createShortRow("97423237", "mc.yandex.com", "pixel_tracker", "session"),
  createRow(
    "_ym_d",
    "Used by Yandex Metrica to determine the date of the user's first site session.",
    ".monclips.com",
    <>
      Metrica{" "}
      <a
        href="https://yandex.com/legal/privacy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "http_cookie",
    "11 months 30 days"
  ),
  createRow(
    "s7",
    "Gather data regarding site usage and user behavior on the website.",
    ".yandex.ru",
    "Adobe Analytics",
    "server_cookie",
    "9 years 11 months 28 days"
  ),
  createRow(
    "s7",
    "Gather data regarding site usage and user behavior on the website.",
    ".mc.yandex.ru",
    "Adobe Analytics",
    "server_cookie",
    "10 minutes"
  ),
  createRow(
    "_ym_isad",
    "Used by Yandex Metrica to determine if a visitor has ad blockers installed in their browsers",
    ".monclips.com",
    <>
      Metrica{" "}
      <a
        href="https://yandex.com/legal/privacy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "http_cookie",
    "19 hours 59 minutes"
  ),
  createRow(
    "_ym_uid",
    "Used by Yandex Metrica as a unique user ID to help track a user in a website",
    ".monclips.com",
    <>
      Metrica{" "}
      <a
        href="https://yandex.com/legal/privacy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "http_cookie",
    "11 months 30 days"
  ),
  createRow(
    "s7",
    "Gather data regarding site usage and user behavior on the website.",
    ".monclips.com",
    "Adobe Analytics",
    "http_cookie",
    "29 minutes"
  ),
  createRow(
    "i",
    "Used by Yandex Metrica for identifying site users. This cookie exists for a period of 1 year maximum.",
    ".yandex.com",
    <>
      Yandex Metrica{" "}
      <a
        href="https://yandex.com/legal/privacy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "server_cookie",
    "1 year 11 months 29 days"
  ),
  createRow(
    "i",
    "Used by Yandex Metrica for identifying site users. This cookie exists for a period of 1 year maximum.",
    ".yandex.ru",
    <>
      Yandex Metrica{" "}
      <a
        href="https://yandex.com/legal/privacy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "server_cookie",
    "1 year 11 months 29 days"
  ),
  createRow(
    "s7",
    "Gather data regarding site usage and user behavior on the website.",
    "mc.yandex.ru",
    "Adobe Analytics",
    "pixel_tracker",
    "session"
  ),
  createRow(
    "_ga_#",
    "Used to distinguish individual users by means of designation of a randomly generated number as client identifier, which allows calculation of visits and sessions",
    ".monclips.com",
    <>
      Google Analytics{" "}
      <a
        href="https://business.safety.google/privacy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "http_cookie",
    "1 year 1 month 4 days"
  ),
];

export const advertisingCookies = [
  createRow(
    "lastExternalReferrer",
    "Detects how the user reached the website by registering their last URL-address.",
    "monclips.com",
    <>
      Meta Platforms, Inc{" "}
      <a
        href="https://www.facebook.com/privacy/policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "html_local_storage",
    "persistent"
  ),
  createRow(
    "lastExternalReferrerTime",
    "Detects how the user reached the website by registering their last URL-address.",
    "monclips.com",
    <>
      Meta Platforms, Inc{" "}
      <a
        href="https://www.facebook.com/privacy/policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "html_local_storage",
    "persistent"
  ),
  createRow(
    "_fbp",
    "Facebook tracking pixel used to identify visitors for personalized advertising.",
    ".monclips.com",
    <>
      Facebook{" "}
      <a
        href="https://www.facebook.com/privacy/policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Service Privacy Policy
      </a>
    </>,
    "http_cookie",
    "2 months 29 days"
  ),
];

export const unclassifiedCookies = [
  createShortRow(
    "_ym97423237:0_reqNum",
    "monclips.com",
    "html_local_storage",
    "persistent"
  ),
  createShortRow(
    "yandexuid",
    ".yandex.com",
    "server_cookie",
    "1 year 11 months 29 days"
  ),
  createShortRow(
    "receive-cookie-deprecation",
    ".yandex.com",
    "server_cookie",
    "11 months 30 days"
  ),
  createShortRow("ymex", ".yandex.com", "server_cookie", "11 months 30 days"),
  createShortRow("ymex", ".yandex.ru", "server_cookie", "11 months 30 days"),
  createShortRow("bh", ".yandex.ru", "server_cookie", "1 year 1 month 4 days"),
  createShortRow(
    "yandexuid",
    ".yandex.ru",
    "server_cookie",
    "1 year 11 months 29 days"
  ),
  createShortRow(
    "yp",
    ".yandex.ru",
    "server_cookie",
    "9 years 11 months 28 days"
  ),
  createShortRow("bh", ".yandex.com", "server_cookie", "1 year 1 month 4 days"),
  createShortRow(
    "_ym_wv2rf:97423237:0",
    "monclips.com",
    "html_local_storage",
    "persistent"
  ),
  createShortRow(
    "__ym_tab_guid",
    "monclips.com",
    "html_session_storage",
    "session"
  ),
];
