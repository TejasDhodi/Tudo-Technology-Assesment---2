import React from 'react'

import '../Styles/MyAccount.css'
const MyAccount = () => {

    const accountDetails = [
        {
            label: 'Name',
            value: 'Arjun N',
            button: 'Edit'
        },
        {
            label: 'Email',
            value: 'arjun@gmail.com',
            button: 'Edit'
        },
        {
            label: 'Phone',
            value: '9826369270',
            button: 'Edit'
        },
        {
            value: 'Password',
            button: 'Change Password'
        },
    ]

    const subscriptionsDetails = [
        {
            heading: 'Subscription Details ',
            label: '1 Year membership for 750 INR',
            startDate: 'Started on: 13-11-2020',
            endDate: 'Valid till: 13-11-2021',
            button: 'Change Plan'
        },
        {
            heading: 'Subscription history',
            label: 'Referral Details',
            description: 'Share your referral code and earn cash credits for each friend that subscribes. (1 Friend = 5 USD/16 DHRM). Also, your friend receives a 5 USD credit.',
            label2: 'Referral Code: HSAGBWBDAV',
            description2: 'Referral History',
            button: 'Copy'
        },

    ]
    return (
        <section id='account' className='main'>
            <div className="heading">
                <h1>My <span>Account</span></h1>
                <img src="/Images/Group 50.png" alt="profilePhoto" />
            </div>

            <div className="accountDetails">
                {
                    accountDetails.map((currElem, index) => {
                        const { label, value, button } = currElem;
                        return (
                            <div className="personalData" key={index}>
                                {label && <h5>{label}</h5>}
                                <div className="details flexBtn">
                                    <h4>{value}</h4>
                                    <h4 className='accountBtn'>{button}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="subscriptions">
                {
                    subscriptionsDetails.map((currElem, index) => {
                        const { heading, label, label2, description, description2, startDate, endDate, button } = currElem;
                        return (
                            <React.Fragment key={index}>
                                <div className="heading">
                                    <h4>{heading}</h4>
                                </div>

                                <div className="subscriptionDetails">
                                    <div className="label flexBtn">
                                        <h3>{label}</h3>
                                        <p className='accountBtn'>{button}</p>
                                    </div>
                                    {startDate && <p>{startDate}</p>}
                                    {endDate && <p>{endDate}</p>}
                                    {description && <p>{description}</p>}
                                </div>
                                {
                                    label2 &&
                                    <div className="subscriptionHistory">
                                        <div className="label flexBtn">
                                            <p>{label2}</p>
                                            <p className='accountBtn'>{button}</p>
                                        </div>
                                        <p>{description2}</p>
                                    </div>
                                }
                            </React.Fragment>)
                    })
                }

            </div>
        </section>
    )
}

export default MyAccount
