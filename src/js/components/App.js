import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div class="row search"></div>
      <div class="row search">
        <div class="col-sm-12" >
          <form role="form">
            <div class="input-group">
              <input type="text" class="form-control input-sm"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
