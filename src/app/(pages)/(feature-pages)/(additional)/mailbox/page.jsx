"use client"

import React, { useState } from 'react';
import ActionMailbox from './components/action-mailbox';
import MailList from './components/mail-list';
import SearchMailbox from './components/search-mailbox';
import MailDetailPopup from './components/detail-mail-popup';
const Page = () => {
    const [selectedMail, setSelectedMail] = useState(null);

    const dataMail = [
        {
            id: 1,
            title: 'Mailbox 1',
            date: '12/12/2021',
            mentor_name: "Devyta",
            student_name: "Rizky",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Lorem ipsum...'
        },
        {
            id: 2,
            title: 'Mailbox 2',
            date: '12/12/2021',
            mentor_name: "Devyta",
            student_name: "Rizky",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Lorem ipsum...'
        },
        {
            id: 3,
            title: 'Mailbox 3',
            date: '12/12/2021',
            mentor_name: "Devyta",
            student_name: "Rizky",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Lorem ipsum...'
        },
    ];

    const handleMailClick = (mail) => {
        setSelectedMail(mail);
    };

    const handleClosePopup = () => {
        setSelectedMail(null);
    };

    return (
        <div className='p-40 bg-white'>
            <div className='flex justify-between'>
                <SearchMailbox />
                <ActionMailbox />
            </div>
            {dataMail.map((data) => (
                <MailList
                    key={data.id}
                    data={data}
                    onClick={() => handleMailClick(data)}
                />
            ))}
            <MailDetailPopup data={selectedMail} onClose={handleClosePopup} />
        </div>
    );
};

export default Page;