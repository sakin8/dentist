"use client";

import { VapiWidget } from "@vapi-ai/client-sdk-react";

export default function VapiDentalWidget() {
  return (
    <VapiWidget
      publicKey="09cc8f17-f3a7-47bd-af37-7de3672ac2a2"
      assistantId="d8c58e02-d16c-4175-a87a-f34527456828"
      position="bottom-right"
      mode="voice"
      theme="light"
      title="TALK WITH DR. SMILE"
    />
  );
}
