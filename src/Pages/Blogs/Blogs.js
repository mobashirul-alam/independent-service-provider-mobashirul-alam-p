import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-75'>
            <h1 className='text-center fs-1 my-4'>Conceptual Question And Answers</h1>
            <div className='mx-auto'>
                <article>
                    <h3>Q1: Difference between authorization and authentication.</h3>
                    <p>
                        <h4>Ans:</h4>
                        <span className='fw-bold ps-5'>Authentication : </span>
                        Authentication is the process of being confirmed that the users are who they say they are. Authentication works through passwords, pins, etc. It is visible and changeable by the users.
                        <br />
                        <span className='fw-bold ps-5'>Authorization : </span>
                        Authorization is the system of giving users permission to access particular resource of website. Authorization works through settings maintain by the admin panel. User has no access to change anything in this system.
                    </p>
                </article>
                <article>
                    <h3>Q2: Why am I using firebase? What other options do you have to implement authentication?</h3>
                    <p>
                        <h4>Ans:</h4>
                        <span className='fw-bold ps-5'>Why Firebase : </span>
                        There are so many platform to develop mobile and web applications. But for me Firebase is the best. Because, Firebase has some awesome extension that is enough to help a developer to develop his common development tasks very easily. Firebase has awesome flexibility as it allow so many different tools like GoogleAds, AdMob, Play Store, Slack, BigQuery, etc. It is easy to integrate on iOS, Android, and the Web.
                        <br />
                        <span className='fw-bold ps-5'>Other Options : </span>
                        There are many other options except firebase to implement authentication. Some are given below:
                        <div className='d-flex justify-content-center'>
                            <div>
                                <ul>
                                    <li>Octa</li>
                                    <li>Auth0</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Parse</li>
                                    <li>Back4app</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Kuzzle</li>
                                    <li>Game Sparks</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>NHost</li>
                                    <li>Amplify JS</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Heroku</li>
                                    <li>etc.</li>
                                </ul>
                            </div>
                        </div>
                    </p>
                </article>
                <article>
                    <h3>Q3: What other services does firebase provide other than authentication ?</h3>
                    <p>
                        <h4>Ans:</h4>
                        <span className='fw-bold ps-5'>Firebase services: </span>
                        Firebase provides different kinds of services that help a developer to develop any kinds of high-quality web or mobile applications. It is a full package that will make the development process very easier. Some useful services provided by Firebase are given below.
                        <br />
                        <div className='d-flex justify-content-center'>
                            <div>
                                <ul>
                                    <li>Hosting</li>
                                    <li>Cloud Storage</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Google Analytics</li>
                                    <li>Cloud Firestore</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Cloud Functions</li>
                                    <li>Predictions</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Cloud Messaging</li>
                                    <li>Dynamic Links</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Remote Config</li>
                                    <li>etc.</li>
                                </ul>
                            </div>
                        </div>
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;