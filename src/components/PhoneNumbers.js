import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import { storageClearer, ascOrder, descOrder } from '../utils';

/* istanbul ignore next */
const Routes = ({ match, phones }) => 
<React.Fragment>
  <Route path={match.path} render={(match) => <SortTabs match={match} />} />
  <Route path={`${match.path}/asc`} 
         render={(match) => <PhoneNumbers match={match} phones={phones} />} />
  <Route path={`${match.path}/desc`} 
         render={(match) => <PhoneNumbers match={match} phones={phones} />} />
  <Route exact path={match.path} 
         render={(match) => <PhoneNumbers match={match} phones={phones} />} />

</React.Fragment>

/* istanbul ignore next */
const SortTabs = ({ match }) => 
<div className="tabs is-centered">
  <ul>
    <li>
      <NavLink to="/generate/asc" activeClassName="is-active">Sort Ascending</NavLink>
    </li>
    <li>
      <NavLink to="/generate/desc" activeClassName="is-active">Sort Descending</NavLink>
    </li>
    <li>
      <NavLink to="#" className="button is-danger" onClick={storageClearer}>
        Clear these numbers
      </NavLink>
    </li>
  </ul>
</div>


const backToTop = (e) => {
      e.preventDefault();
      let distance = 0 - window.pageYOffset;
      let increments = distance/(500/16);
      /* istanbul ignore next */
      function animateScroll() {
          window.scrollBy(0, increments);
          if (window.pageYOffset <= document.body.offsetTop) {
              clearInterval(runAnimation);
          }
      };
      // Loop the animation function
      let runAnimation = setInterval(animateScroll, 16);
      return window.pageYOffset;
}

const PhoneNumbers = ({ phones, match }) => {
  /* istanbul ignore next */
  let sortOrder = match.location ? match.location.pathname : null
  const phoneNumbers = sortOrder === '/generate/asc' ? ascOrder(phones) :
        sortOrder === '/generate/desc' ? descOrder(phones) : phones

return (
    <div className="columns is-centered">
      <span className="unsorted-tag">
        {sortOrder === '/generate' ? 'Un sorted' : null}
      </span>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: '10rem' }}>
              <abbr title="Position">#</abbr>
            </th>
            <th>Phone Number Generated</th>
          </tr>
        </thead>
        <tbody>
          {
            phoneNumbers.map((phone, i)=><tr key={phone}><th>{i+1}</th><td>{phone}</td></tr>)
          }
        </tbody>
      </table>
      {
        phoneNumbers.length > 100 ?
        <button className="back-to-top" onClick={backToTop}>Back to top</button> :
        null
      }
    </div>
  )
}

export default Routes;
export { PhoneNumbers, backToTop, SortTabs };

