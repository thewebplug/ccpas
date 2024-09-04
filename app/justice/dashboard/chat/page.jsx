'use client';

import dynamic from "next/dynamic";
import '@sendbird/uikit-react/dist/index.css';

const DynamicAppWithNoSSR = dynamic(() => import("../../../components/chat/Chat"), {
  ssr: false,
  loading: () => <p>...</p>
});

export default function Home() {
  return (
    <main>
      <DynamicAppWithNoSSR />
    </main>
  )
}