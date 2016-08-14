import React from 'react';

import RightSide from './component/right_side.js'
import LeftMenus from './component/left_menus.js'

class App extends React.Component
{
    render () {
        return (
            <div className="wrap">
                <div className="container">
                    <header>
                        <h1>kms.Net</h1>
                    </header>
                    <LeftMenus/>
                    <section className="content">
                        {this.props.children}
                    </section>
                    <RightSide/>
                </div>
                <footer>
                    kms1837
                </footer>
            </div>
        );
    }
}

export default App;