import { SSTConfig, SSTApp, SSTStack } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input: any) {
    return {
      name: "ssa-fe",
      region: "us-east-1",
    };
  },
  stacks(app: SSTApp) {
    app.stack(function Site({ stack }: { stack: SSTStack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: stack.stage === "prod" ? "ssa-fe.com" : "dev.ssa-fe.com",
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
