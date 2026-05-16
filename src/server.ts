import "./lib/error-capture";

import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { getRouter } from "./router";
import { consumeLastCapturedError } from "./lib/error-capture";

// Create the start handler with router getter
const handler = createStartHandler({
  getRouter,
});

export default async function (request: Request) {
  try {
    // Run the normal handler
    const response = await handler(request, defaultStreamHandler);
    return response;
  } catch (err) {
    // If we have a previously captured error, use it for better stack trace
    const captured = consumeLastCapturedError();
    const errorToLog = captured ?? err;
    console.error("Server error:", errorToLog);
    // Return a generic but safe response
    return new Response("Internal Server Error", { status: 500 });
  }
}
