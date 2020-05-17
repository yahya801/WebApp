import React from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs'
import './cattabs.css'
import Eventcards from '../eventcard'

const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  )
}

export default () => (
  <Tabs>
    <div className='tabsa'>
      <div className='tab-list'>
        <Tab>Private</Tab>

        <Tab>Corperate</Tab>

        <Tab>Charity</Tab>
      </div>

      <div className='tab-progress' />

      <Panel>
        <br />  
       <Eventcards />
      </Panel>

      <Panel>
        <p>
          The input range must be a linear series of numbers. The output range
          can be any value type supported by Framer Motion: numbers, colors,
          shadows, etc.
        </p>
      </Panel>

      <Panel>
        <p>
          Creates a MotionValue that, when set, will use a spring animation to
          animate to its new state.
        </p>
      </Panel>
    </div>
  </Tabs>
)