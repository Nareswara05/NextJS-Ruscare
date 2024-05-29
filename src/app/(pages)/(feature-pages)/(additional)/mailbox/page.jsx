import React from 'react'
import ActionMailbox from './components/action-mailbox'
import MailList from './components/mail-list'
import SearchMailbox from './components/search-mailbox'

const page = () => {

    const dataMail = [
        {
            id: 1,
            title: 'Mailbox 1',
            date: '12/12/2021',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
        },
        {
            id: 2,
            title: 'Mailbox 1',
            date: '12/12/2021',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
        },
        {
            id: 3,
            title: 'Mailbox 1',
            date: '12/12/2021',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
        },
    ]
    
  return (
    <div className='p-40 bg-white'>
        <div className='flex justify-between'>
            <SearchMailbox/>
            <ActionMailbox/>
        </div>
        {dataMail.map((data) => (
          <MailList key={data.id} data={data} />
        ))}
    </div>
  )
}

export default page