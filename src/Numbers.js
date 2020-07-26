import React from 'react'

function Numbers(){
 return <div className='numbers'>
    <div className='budget'>
        <p className='budget-name'>BUDGET</p>
        <h6 className='dollar'>$24,000</h6>
        <i class="arrow-down fas fa-arrow-down"></i>
        <p className='budget-stat'><span style={{ color: 'red' }}>12%</span><span style={{ marginLeft: '8px' }}>Since last month</span></p>
    </div>
    <div className='total-users'>
        <p className='budget-name'>TOTAL USERS</p>
        <h6 className='dollar'>1,600</h6>
        <i class="arrow-up fas fa-arrow-up"></i>
        <p className='budget-stat'><span>16%</span><span style={{ marginLeft: '8px' }}>Since last month</span></p>
    </div>
    <div className='tasks-progress'>
        <p className='budget-name'>TASKS PROGRESS</p>
        <h6 className='dollar'>75.5%</h6>
        <div className='line'>
            <div className='line-blue'></div>
        </div>
    </div>
    <div className='total-profit'>
        <p className='budget-name'>TOTAL PROFIT</p>
        <h6 className='dollar'>$23,200</h6>
    </div>
</div>
}
export default Numbers