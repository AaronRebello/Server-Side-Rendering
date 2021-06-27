// import React from 'react';
// import { Route, Switch, Link } from 'react-router-dom'

// import Advantages from './Advantages'
// import HomePage from './HomePage';

// const routes = [
//     { path: '/', component: HomePage, isHome: true, text: 'Home' },
//     { path: '/Advantages', component: Advantages, text: 'Advantages' },
// ]

// function AppRouter(props) {
//     return (
//         <>
//             <ul>
//                 {
//                     routes.map(r => <li key={r.path}><Link to={r.path}>{r.text}</Link></li>)
//                 }
//             </ul>
//             <Switch>
//                 {
//                     routes.map(r => <Route path={r.path} component={r.component} key={r.path} exact={r.isHome === undefined ? false : true} />)
//                 }
//             </Switch>
//         </>
//     )
// }
// export default AppRouter;