import React from 'react'
import BottomNav from './BottomNav';
import Header from './Header';
import './Layout.css';

export default function Layout(props) {
  return (
    <div className="layout">
        <Header />
        {/* // create a main container componenet to house screens as layout children */}
        {props.children}
        <BottomNav />
    </div>
  )
}
