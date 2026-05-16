import "./lib/error-capture";

import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { getRouter } from "./router";
import { consumeLastCapturedError } from "./lib/error-capture";

export default createStartHandler({
  createRouter: getRouter,
})(defaultStreamHandler);
