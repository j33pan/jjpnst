import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";

function Signin() {
  return (
    <div>
      <AmplifySignOut buttonText="sign out"></AmplifySignOut>
    </div>
  );
}

export default withAuthenticator(Signin);
