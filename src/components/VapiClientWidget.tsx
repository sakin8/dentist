"use client";

import { VapiWidget } from "@vapi-ai/client-sdk-react";

export default function VapiDentalWidget() {
  return (
    // <VapiWidget
    //   publicKey="09cc8f17-f3a7-47bd-af37-7de3672ac2a2"
    //   assistantId="d8c58e02-d16c-4175-a87a-f34527456828"
    //   mode="voice"
    //   theme="light"
    //   baseBgColor="#ffffff"
    //   accentColor="#14B8A6"
    //   ctaButtonColor="#ffffff"
    //   ctaButtonTextColor="#000000"
    //   borderRadius="small"
    //   size="compact"
    //   position="bottom-right"
    //   title="TALK WITH DR. SMILE"
    //   startButtonText="Start"
    //   endButtonText="End Call"
    //   chatFirstMessage="Hey, How can I help you today?"
    //   chatPlaceholder="Type your message..."
    //   voiceShowTranscript={true}
    //   consentRequired={true}
    //   consentTitle="Terms and conditions"
    //   consentContent={`By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.`}
    //   consentStorageKey="vapi_widget_consent"
    // />


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
