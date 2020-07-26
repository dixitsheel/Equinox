import React from 'react'

function LatestSales(){
    return <div className='latest-sales'>
        <p className='latest-sales-text'>Latest Sales</p>
        <p className='dropdown-text'>LAST 7 DAYS</p>
        <i class="dropdown fas fa-caret-down"></i>
        <div className='line-light'></div>
        <ul>
            <li>30</li>
            <li>25</li>
            <li>20</li>
            <li>15</li>
            <li>10</li>
            <li>5</li>
            <li>0</li>
        </ul>
        <div className='blue-vertical-1'></div>
        <div className='grey-vertical-1'></div>
        <div className='blue-vertical-2'></div>
        <div className='grey-vertical-2'></div>
        <div className='blue-vertical-3'></div>
        <div className='grey-vertical-3'></div>
        <div className='blue-vertical-4'></div>
        <div className='grey-vertical-4'></div>
        <div className='blue-vertical-5'></div>
        <div className='grey-vertical-5'></div>
        <div className='blue-vertical-6'></div>
        <div className='grey-vertical-6'></div>
        <div className='date-div'>
            <p className='date-1'>1 Aug</p>
            <p className='date'>2 Aug</p>
            <p className='date'>3 Aug</p>
            <p className='date'>4 Aug</p>
            <p className='date'>5 Aug</p>
            <p className='date'>6 Aug</p>
        </div>
        <p className='overview'>OVERVIEW</p>
        <i class="dropright fas fa-caret-down"></i>
    </div>
}
export default LatestSales