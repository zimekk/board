import React, { Suspense } from "react";

import Volume from "./Volume";

export const Text = "div";
export const View = "div";

function Loading() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

export default function Vcr() {
  return (
    <View>
      <Suspense fallback={<Loading />}>
        <Volume />
      </Suspense>
    </View>
  );
}
