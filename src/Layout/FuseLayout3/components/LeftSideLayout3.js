import React from "react";
import FuseShortcuts from "@fuse/core/FuseShortcuts";
import FuseSidePanel from "@fuse/core/FuseSidePanel";

function LeftSideLayout3() {
  return (
    <>
      <FuseSidePanel>
        <FuseShortcuts className="py-16 px-8" variant="vertical" />
      </FuseSidePanel>
    </>
  );
}

export default React.memo(LeftSideLayout3);
