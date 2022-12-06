import React from 'react';

const blog = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className="card w-96 bg-gray-500 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.<br/>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.<br/>Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes.</p>
                <div className="card-actions justify-end">
                {/* <button className="btn">Buy Now</button> */}
                </div>
            </div>
            </div>

            <div className="card w-96 bg-cyan-600 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">What is JWT, and how does it work?</h2>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br/>JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                <div className="card-actions justify-end">
                {/* <button className="btn">Buy Now</button> */}
                </div>
            </div>
            </div>

            <div className="card w-96 bg-orange-600 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                <div className="card-actions justify-end">
                {/* <button className="btn">Buy Now</button> */}
                </div>
            </div>
            </div>

            <div className="card w-96 bg-yellow-600 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                <div className="card-actions justify-end">
                {/* <button className="btn">Buy Now</button> */}
                </div>
            </div>
            </div>
        </div>
    );
};

export default blog;