import React from 'react';
import { connect } from "react-redux";

export function BankStats() {
  return <div> Bank stats -> Not yet implemented </div>;
  /*
  return (
    <AccountsContext.Consumer>
      {({ balances, openNewAccount }) => (
        <div>
          <p>{balances.length} open accounts.</p>

          <button onClick={openNewAccount} className="new-account-button">
            Open new account
          </button>
        </div>
      )}
    </AccountsContext.Consumer>
  );*/
}

export default connect(null, null)(BankStats)