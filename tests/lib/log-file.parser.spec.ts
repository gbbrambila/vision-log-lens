/**
 * @jest-environment node
 */

import { parseLogFileContent, parseLogFileLine } from "@/lib/";

describe("Log File Parser Unit tests", () => {
  it("should parse an entire log file content", () => {
    const mockContent = [
      `177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"`,
      `168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"`,
      `168.41.191.41 - - [11/Jul/2018:17:41:30 +0200] "GET /this/page/does/not/exist/ HTTP/1.1" 404 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"`,
    ];
    const parsedContent = parseLogFileContent(mockContent);
    expect(parsedContent.length).toEqual(mockContent.length);
  });

  it("should parse an entire log file content but ignore invalid lines", () => {
    const mockContent = [
      `177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"`,
      `168.41.191.41 - -`,
      ``,
      `168.41.191.41 - - [11/Jul/2018:17:41:30 +0200] "GET /this/page/does/not/exist/ HTTP/1.1" 404 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"`,
    ];
    const parsedContent = parseLogFileContent(mockContent);
    expect(parsedContent.length).toBeLessThan(mockContent.length);
  });

  it("should parse a log line correctly", () => {
    const parsedLine = parseLogFileLine(
      `177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"`
    );

    expect(parsedLine).toEqual({
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
        device: { vendor: undefined, model: undefined, type: undefined },
        cpu: { architecture: "amd64" },
      },
      raw: '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
    });
  });

  it("should return null if log line is invalid", () => {
    const parsedLine = parseLogFileLine(``);
    expect(parsedLine).toBeNull();
  });
});
