import React from "react";

function Loader() {
  return (
    <>
      <div class="progress" style={{width: '75%'}}>
        <div class="indeterminate"></div>
      </div>
    </>
  );
}

export default Loader;
