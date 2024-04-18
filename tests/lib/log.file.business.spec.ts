/**
 * @jest-environment node
 */

import {
  countUniqueIps,
  getMostActiveIps,
  getMostedVisitedUrls,
  LogFileContent,
} from "@/lib";

describe("Log File Business Unit tests", () => {
  it("should count unique ips for giving a log file content", () => {
    const mockLogFileContent: LogFileContent[] = [
      {
        ip: "177.71.128.21",
        userIdentifier: "-",
        userId: "-",
        time: "10/Jul/2018:22:21:28 +0200",
        method: '"GET',
        resource: "/intranet-analytics/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(X11;U;Linuxx86_64;fr-FR)AppleWebKit/534.7(KHTML,likeGecko)Epiphany/2.30.6Safari/534.7"',
          browser: { name: "Epiphany", version: "2.30.6Safari", major: "2" },
          engine: { name: "WebKit", version: "534.7" },
          os: { name: "Linux", version: "x86_64" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "amd64" },
        },
        raw: '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      },
      {
        ip: "50.112.00.11",
        userIdentifier: "-",
        userId: "admin",
        time: "11/Jul/2018:17:31:05 +0200",
        method: '"GET',
        resource: "/hosting/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(WindowsNT6.1;WOW64)AppleWebKit/536.6(KHTML,likeGecko)Chrome/20.0.1092.0Safari/536.6"',
          browser: {
            name: "Chrome",
            version: "20.0.1092.0Safari",
            major: "20",
          },
          engine: { name: "WebKit", version: "536.6" },
          os: { name: "Windows", version: "NT6.1" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "amd64" },
        },
        raw: '50.112.00.11 - admin [11/Jul/2018:17:31:05 +0200] "GET /hosting/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"',
      },
      {
        ip: "72.44.32.10",
        userIdentifier: "-",
        userId: "-",
        time: "09/Jul/2018:15:48:20 +0200",
        method: '"GET',
        resource: "/download/counter/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(X11;U;Linuxx86;en-US)AppleWebKit/534.7(KHTML,likeGecko)Epiphany/2.30.6Safari/534.7"',
          browser: { name: "Epiphany", version: "2.30.6Safari", major: "2" },
          engine: { name: "WebKit", version: "534.7" },
          os: { name: "Linux", version: "x86" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "ia32" },
        },
        raw: '72.44.32.10 - - [09/Jul/2018:15:48:20 +0200] "GET /download/counter/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      },
      {
        ip: "72.44.32.10",
        userIdentifier: "-",
        userId: "-",
        time: "09/Jul/2018:15:48:20 +0200",
        method: '"GET',
        resource: "/download/counter/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(X11;U;Linuxx86;en-US)AppleWebKit/534.7(KHTML,likeGecko)Epiphany/2.30.6Safari/534.7"',
          browser: { name: "Epiphany", version: "2.30.6Safari", major: "2" },
          engine: { name: "WebKit", version: "534.7" },
          os: { name: "Linux", version: "x86" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "ia32" },
        },
        raw: '72.44.32.10 - - [09/Jul/2018:15:48:20 +0200] "GET /download/counter/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      },
    ];

    const result = countUniqueIps(mockLogFileContent);
    expect(result).toEqual(3);
  });

  it("should get most visited URLs for a giving file content", () => {
    const mockLogFileContent: LogFileContent[] = [
      {
        ip: "177.71.128.21",
        userIdentifier: "-",
        userId: "-",
        time: "10/Jul/2018:22:21:28 +0200",
        method: '"GET',
        resource: "/intranet-analytics/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(X11;U;Linuxx86_64;fr-FR)AppleWebKit/534.7(KHTML,likeGecko)Epiphany/2.30.6Safari/534.7"',
          browser: { name: "Epiphany", version: "2.30.6Safari", major: "2" },
          engine: { name: "WebKit", version: "534.7" },
          os: { name: "Linux", version: "x86_64" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "amd64" },
        },
        raw: '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      },
      {
        ip: "50.112.00.11",
        userIdentifier: "-",
        userId: "admin",
        time: "11/Jul/2018:17:31:05 +0200",
        method: '"GET',
        resource: "/intranet-analytics/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(WindowsNT6.1;WOW64)AppleWebKit/536.6(KHTML,likeGecko)Chrome/20.0.1092.0Safari/536.6"',
          browser: {
            name: "Chrome",
            version: "20.0.1092.0Safari",
            major: "20",
          },
          engine: { name: "WebKit", version: "536.6" },
          os: { name: "Windows", version: "NT6.1" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "amd64" },
        },
        raw: '50.112.00.11 - admin [11/Jul/2018:17:31:05 +0200] "GET /hosting/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"',
      },
      {
        ip: "72.44.32.10",
        userIdentifier: "-",
        userId: "-",
        time: "09/Jul/2018:15:48:20 +0200",
        method: '"GET',
        resource: "/download/counter/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(X11;U;Linuxx86;en-US)AppleWebKit/534.7(KHTML,likeGecko)Epiphany/2.30.6Safari/534.7"',
          browser: { name: "Epiphany", version: "2.30.6Safari", major: "2" },
          engine: { name: "WebKit", version: "534.7" },
          os: { name: "Linux", version: "x86" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "ia32" },
        },
        raw: '72.44.32.10 - - [09/Jul/2018:15:48:20 +0200] "GET /download/counter/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      },
    ];

    const result = getMostedVisitedUrls(mockLogFileContent, 3);

    expect(result).toEqual(["/intranet-analytics/", "/download/counter/"]);
  });

  it("should get most active IPs for a giving file content", () => {
    const mockLogFileContent: LogFileContent[] = [
      {
        ip: "177.71.128.21",
        userIdentifier: "-",
        userId: "-",
        time: "10/Jul/2018:22:21:28 +0200",
        method: '"GET',
        resource: "/intranet-analytics/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(X11;U;Linuxx86_64;fr-FR)AppleWebKit/534.7(KHTML,likeGecko)Epiphany/2.30.6Safari/534.7"',
          browser: { name: "Epiphany", version: "2.30.6Safari", major: "2" },
          engine: { name: "WebKit", version: "534.7" },
          os: { name: "Linux", version: "x86_64" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "amd64" },
        },
        raw: '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      },
      {
        ip: "177.71.128.21",
        userIdentifier: "-",
        userId: "admin",
        time: "11/Jul/2018:17:31:05 +0200",
        method: '"GET',
        resource: "/intranet-analytics/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(WindowsNT6.1;WOW64)AppleWebKit/536.6(KHTML,likeGecko)Chrome/20.0.1092.0Safari/536.6"',
          browser: {
            name: "Chrome",
            version: "20.0.1092.0Safari",
            major: "20",
          },
          engine: { name: "WebKit", version: "536.6" },
          os: { name: "Windows", version: "NT6.1" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "amd64" },
        },
        raw: '50.112.00.11 - admin [11/Jul/2018:17:31:05 +0200] "GET /hosting/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"',
      },
      {
        ip: "72.44.32.10",
        userIdentifier: "-",
        userId: "-",
        time: "09/Jul/2018:15:48:20 +0200",
        method: '"GET',
        resource: "/download/counter/",
        protocol: 'HTTP/1.1"',
        statusCode: 200,
        size: 3574,
        referer: '"-"',
        userAgent: {
          ua: '"Mozilla/5.0(X11;U;Linuxx86;en-US)AppleWebKit/534.7(KHTML,likeGecko)Epiphany/2.30.6Safari/534.7"',
          browser: { name: "Epiphany", version: "2.30.6Safari", major: "2" },
          engine: { name: "WebKit", version: "534.7" },
          os: { name: "Linux", version: "x86" },
          device: { model: "", type: "", vendor: "" },
          cpu: { architecture: "ia32" },
        },
        raw: '72.44.32.10 - - [09/Jul/2018:15:48:20 +0200] "GET /download/counter/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      },
    ];

    const result = getMostActiveIps(mockLogFileContent, 3);

    expect(result).toEqual(["177.71.128.21", "72.44.32.10"]);
  });
});
