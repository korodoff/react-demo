import React from "react";

import { FirstName, LastName, MiddleName } from "../../../App";
const ComptCContext = () => {
  return (
    <>
      <h1>comonentC</h1>
      <FirstName.Consumer>
        {(fname) => (
          <LastName.Consumer>
            {(lname) => (
              <MiddleName.Consumer>
                {(mname) => (
                  <h2>Hi my name is: {`${fname} ${mname} ${lname}`}</h2>
                )}
              </MiddleName.Consumer>
            )}
          </LastName.Consumer>
        )}
      </FirstName.Consumer>
      {/* this is like a callbackhell alike and we have to use createContxt to avoid the callback hell */}
    </>
  );
};

export default ComptCContext;
