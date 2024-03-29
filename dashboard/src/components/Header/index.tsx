import React from 'react'

import styles from './index.module.css'

function Header() {
  return (
    <div className={styles['header']}>
        <div className="row">
            <div className="col-12">
                <h3>Dashboard Analytics</h3>
            </div>
        </div>
    </div>
  )
}

export default Header