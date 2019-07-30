import React from 'react'

export default props => {
    const topLine = <div id='top_line'></div>
    const bottomLine = <div id='bottom_line'></div>

    return <div id='landing_page'>
        <div id='call_to_start_session'>
            <img
                src="https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="people walking beside the mountain"
                width='100%' />
            <div id='info'>
                {topLine}
                <div id='keep_every_step'>KEEP EVERY STEP</div>
                {bottomLine}
                <div id='description'>
                    Track a Trek of any kind, with the support of your closest friends.
                </div>
            </div>
        </div>
    </div>
}