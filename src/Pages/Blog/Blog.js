import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 mx-auto bg-info text-gray p-4 rounded-4'>
            <div>
                <h3>What is Cors?</h3>
                <p>Ans: CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API</p>
            </div>
            <div>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div>
                <h3>How does the private route work?</h3>
                <p>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div>
                <h3>What is Node? How does Node work?</h3>
                <p>Ans: Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>
        </div>
    );
};

export default Blog;