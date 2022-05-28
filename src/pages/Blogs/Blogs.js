import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='ms-5 blog'>
            <h2>Q1. Difference between javascript and nodejs</h2>
            <h4>Javascript</h4>
            <li>Javascript is a programming language that is used for writing scripts on the website. </li>
            <li>Javascript can only be run in the browsers.</li>
            <li>It is basically used on the client-side.</li>
            <li>Javascript is capable enough to add HTML and play with the DOM.</li>
            <li>Javascript is used in frontend development.</li>

            <h4>NodeJs</h4>
            <li>NodeJS is a Javascript runtime environment.</li>
            <li>We can run Javascript outside the browser with the help of NodeJS.</li>
            <li>It is mostly used on the server-side.</li>
            <li>Nodejs does not have capability to add HTML tags.</li>
            <li>Nodejs is used in server-side development.</li>

            <h2>Q2. Difference between Sql and Nosql</h2>
            <h4>Sql</h4>
            <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
            <li>These databases have fixed or static or predefined schema.</li>
            <li>These databases are not suited for hierarchical data storage.</li>
            <li>These databases are best suited for complex queries</li>
            <li>Vertically Scalable</li>
            <h4>NoSql</h4>
            <li>Non-relational or distributed database system.</li>
            <li>They have dynamic schema</li>
            <li>These databases are best suited for hierarchical data storage.</li>
            <li>These databases are not so good for complex queries.</li>
            <li>Horizontally scalable.</li>

            <h2>Q3. What is the purpose of JWT and how does it work?</h2>
            <h4>What is the purpose of JWT</h4>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            <h4>How does it work?</h4>
            <p>A common way to use JWTs is as OAuth bearer tokens. In this example, an authorization server creates a JWT at the request of a client and signs it so that it cannot be altered by any other party. The client will then send this JWT with its request to a REST API. The REST API will verify that the JWT’s signature matches its payload and header to determine that the JWT is valid. When the REST API has verified the JWT, it can use the claims to either grant or deny the client’s request.

            In simpler terms, you can think of a JWT bearer token as an identity badge to get into a secured building. The badge comes with special permissions (the claims); that is, it may grant access to only select areas of the building. The authorization server in this analogy is the reception desk — or the issuer of the badge. And to verify that the badge is valid, the company logo is printed on it, similar to the signature of the JWT. If the badge holder attempts to access a restricted area, the permissions on the badge determine whether or not they can access the area, similar to the claims in a JWT.</p>

        </div>
    );
};

export default Blogs;