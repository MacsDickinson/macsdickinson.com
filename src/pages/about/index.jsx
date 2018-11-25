import React from 'react'
import Layout from '../../components/Layout'
import img from '../../img/alice.jpg';

export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <p className="title">Hi, I'm Macs.</p>
                            <p>
                                I used to blog about software engineering a little bit but these days 
                                I spend most of my time trying to entertain this little chimp.
                            </p>
                            <img src={img} alt="this is alice" style={{ maxWidth: 500 }} />
                            <p>
                                I've been working in and around software for the last {(new Date()).getFullYear() - 2008} years, 
                                in a variety of roles. I'm currently working at Sky Betting and Gaming although my thoughts 
                                and comments on here are entirely my own.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}