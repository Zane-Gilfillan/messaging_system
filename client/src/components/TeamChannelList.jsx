import React from 'react'

import { AddChannel } from '../assets';

const TeamChannelList = ({ children, error = false, loading, type}) => {
    if(error) {
        return type === 'team' ? (
            <div className='team-channel-list'>
                <p className='tream-channel-list__message'>
                    connection error, one moment please
                </p>
            </div>

        ) : null
    }

    if(loading) {
        return (
            <div className='team-channel-list'>
                <p className='tream-channel-list__message' loading>
                    {type === 'team' ? 'channels' : 'messages'} loading...
                </p>
            </div>
        )
    }

    return (
        <div className='team-channel-list'>
            <div className='team-channel-list__header'>
                <p className='team-channel-list__header__title '>
                {type === 'team' ? 'channels' : 'direct message'}
                </p>
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
