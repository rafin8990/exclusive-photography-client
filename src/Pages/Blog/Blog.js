import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div>
            <div className='mt-20 p-4 '>
                <div className=' border border-gray-500 bg-gray-800 rounded-lg ml-3 mr-3 mt-10 shadow-sm'>
                    <div className='border border-gray-500 p-2'>
                        <h1 className='text-amber-500 text-4xl'>What is the Difference between SQL and NoSQL?</h1>
                    </div>
                    <p className='text-amber-500 text-xl p-2'>Answer: </p>
                    <p className='text-gray-300 p-2'>
                        <li>
                            SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
                        </li>
                        <li> The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility.</li>
                        <li>
                            SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported. <br />

                        </li>
                        <li>NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.</li>
                        <li>SQL database schemata always represent relational, tabular data, with rules about consistency and integrity.</li>
                        <li>NoSQL databases need not stick to this format, but generally fit into one of four broad categories:
                            Column-oriented databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.</li>
                    </p>
                </div>
                <div className=' border border-gray-500 bg-gray-800 rounded-lg ml-3 mr-3 mt-10 shadow-sm'>
                    <div className='border border-gray-500 p-2'>
                        <h1 className='text-amber-500 text-4xl'>What is JWT, and how does it work?</h1>
                    </div>
                    <p className='text-amber-500 text-xl p-2'>Answer: </p>
                    <p className='text-gray-300 p-2'>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br />
                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br />
                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                        <li>User sign-in using username and password or google/facebook.</li>
                        <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                        <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                        <li>Resource server then verifies the authenticity of the token using the secret salt public key.</li>
                    </p>
                </div>
                <div className=' border border-gray-500 bg-gray-800 rounded-lg ml-3 mr-3 mt-10 shadow-sm'>
                    <div className='border border-gray-500 p-2'>
                        <h1 className='text-amber-500 text-4xl'>What is the difference between javascript and NodeJS?</h1>
                    </div>
                    <p className='text-amber-500 text-xl p-2'>Answer: </p>
                    <p className='text-gray-300 p-2'>
                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />

                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />

                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br />

                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. <br />

                        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive. <br />

                        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                    </p>
                </div>
                <div className=' border border-gray-500 bg-gray-800 rounded-lg ml-3 mr-3 mt-10 shadow-sm'>
                    <div className='border border-gray-500 p-2'>
                        <h1 className='text-amber-500 text-4xl'>How does NodeJS handle multiple requests at the same time?</h1>
                    </div>
                    <p className='text-amber-500 text-xl p-2'>Answer: </p>
                    <p className='text-gray-300 p-2'>
                        Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                        No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded. <br />
                        Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations. <br />
                        NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;