import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/"
});

registerApplication({
  name: "@hc/react-single",
  app: () => System.import<LifeCycles>("@hc/react-single"),
  activeWhen: (location) => location.pathname === "/react-single"
});

registerApplication({
  name: "@hc/react-multiples",
  app: () => System.import<LifeCycles>("@hc/react-multiples"),
  activeWhen: ['/react-multiples']
});

registerApplication({
  name: "@hc/react-intern",
  app: () => System.import<LifeCycles>("@hc/react-intern"),
  activeWhen: (location) => location.pathname === "/react-intern"
});

registerApplication({
  name: "@hc/react-lazy",
  app: () => System.import<LifeCycles>("@hc/react-lazy"),
  activeWhen: ["/react-lazy"]
});

start({
  urlRerouteOnly: true,
});
