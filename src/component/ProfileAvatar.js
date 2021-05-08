import React, { PureComponent } from 'react'

class ProfileAvatar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="col-sm-3 paside order-sm-12">
            <div className="usr-profile pt-5 pb-2">
                <div className='avatar'>
                    <span className='davatar'>{fullname[0]}</span>
                </div>
                <p className="font-roboto text-center mb-0 weight-600">Add an avatar</p>
                <div className='ch-image'>
                    <button className='btn btn-av font-roboto'>Choose image</button>
                </div>
                <p className='text-center font-roboto mt-2 text-14'>&gt;or choose one of our defaults</p>
            </div>
            <hr className='hr-white' />
            <div className='ctoggle'>
                <div href='/' className="icon" id="ctoggle">
                    <i className="fa fa-bars"></i>
                </div></div>
            <div className='ptabs' id='ptabs'>
                <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active text-color" data-toggle="pill" href="#pbasic">Profile Basics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-color" data-toggle="pill" href="#djourney">Design Journy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-color" data-toggle="pill" href="#mwork">My Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-color" data-toggle="pill" href="#pstatus">Profile Status</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-color" data-toggle="pill" href="#bpayment">Billing & Payment</a>
                    </li>
                </ul>
            </div>
            <Link className="text-color lgout">Logout</Link>
        </div>
        )
    }
}

export default ProfileAvatar