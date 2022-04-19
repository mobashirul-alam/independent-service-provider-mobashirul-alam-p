import React from 'react';

const About = () => {
    return (
        <div className='container text-center'>
            <h1 className='display-5'>ABOUT ME</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcJS__a5zAHFv1jnF-Ti1xcATNexJqEO6pQ&usqp=CAU" alt="" />
            <p className='fs-3'>
                Myself
                <span className='border-bottom border-success ms-2'>
                    Md Mobashirul Alam Seam
                </span>
            </p>
            <p className='mx-5 fs-5 text-start'>
                In my childhood, I used to thought that how people make games or websites or different apps that I am using with my android tablet. At that time, I thought this is miracle that, I am just touching screen or clicking it, the things just changing or doing something awesome; How it is working or what's inside of this things?. Today, I know that all things are happening in this mobile or tablet screen are being made by developer though coding. So, i'm now learning web development. And I want to develop many awesome things that will amaze people.
                <br />
                Also, I know that being a web developer is not an easy task. To get this things I have to work as hard as possible. So, to achieve my goal i've started my work, and I am trying to make Coding as a part of my daily life with greatest priority.
            </p>
        </div>
    );
};

export default About;