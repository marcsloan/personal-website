export const SCRIPT = {
    "Go back to start": {
        chatLog:
            [
                {
                    author: "robot",
                    content: "This is an interactive demo you can play around with",
                    type: "message"
                },
                {
                    author: "robot",
                    content: "Just click the **Get Started** button below",
                    type: "message"
                },
            ],
        buttons: ["Get Started"],
        dropdowns: []
    },
    "Get Started": {
        chatLog:
            [
                {
                    author: "robot",
                    content: "![Let's Get Started](https://media.giphy.com/media/l0DAHAQ3Ex4XbL1ni/giphy.gif)",
                    type: "message"
                },
                {
                    author: "robot",
                    content: "Right now, I'm just a demo and I live on this blog. But normally I'd live inside your web browser",
                    type: "message"
                },
                {
                    author: "robot",
                    content: "As you browse the web, I'd pop up occasionally to comment on what you're doing and try to help",
                    type: "message"
                },
                {
                    author: "robot",
                    content: "![Pop-up](https://media.giphy.com/media/l41Yq0LrP3i7GOpqw/giphy.gif)",
                    type: "message"
                },
            ],
        buttons: ["Show me an example"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "dialogue triggers", "key": "1", "value": ""},
                    {"label": "tasks", "key": "2", "value": ""},
                    {"label": "dialogue history", "key": "3", "value": ""},
                ]
            }
        ],
    },
    "Show me an example": {
        chatLog:
            [
                {
                    author: "robot",
                    content: "Let's say you were on Amazon looking at a new camera, then I'd pop up and you'd see something like:",
                    type: "message"
                },
                {
                    author: "user",
                    content: "Looking to buy a camera: **Olympus OM-D E-M10 Mark III** - _£629.00_\n<blockquote>\n ![Olympus OM-D E-M10 Mark III Compact System Camera with: Amazon.co.uk: Camera & Photo](https://images-na.ssl-images-amazon.com/images/I/91exNRnTqHL._AC_SX466_.jpg)\n ** www.amazon.co.uk **\n <a href='https://www.amazon.co.uk/Olympus-OM-D-Mark-II-Compact/dp/B013QWFKZ8?pf_rd_p=c4861c1a-6fda-4890-9f8d-37412e8ab94b&pd_rd_wg=3V9ly&pf_rd_r=647F0BCJAA2JF9FMK0R8&ref_=pd_gw_cr_simh&pd_rd_w=WYhHO&pd_rd_r=9b285006-335d-4f6c-9230-30999887dd6f' target='_blank'>Olympus OM-D E-M10 Mark III Compact System Camera</a> \n Free delivery and returns on eligible orders. Buy Olympus OM-D E-M10 Mark III Compact System Camera with 14-42 EZ Zoom Lens\n </blockquote>",
                    type: "message"
                },
                {
                    author: "robot",
                    content: "You could then ask me to do useful things like:",
                    type: "message"
                },
                {
                    author: "user",
                    content: "Find video review",
                    type: "message"
                },
                {
                    type: "message",
                    author: "youtube",
                    content: '<iframe src="https://www.youtube.com/embed/2TbX2wfZlwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
                },
                {
                    author: "user",
                    content: "Find alternative price",
                    type: "message"
                },
                {
                    author: "google",
                    content: "** Jessops ** - _£329.00_<blockquote>\n ![Olympus OM-D E-M10 Mark II Compact System Camera in Silver with 14-42mm Lens](https://i.jessops.com/ce-images/PRODUCT/PRODUCT_ENLARGED/AOLYMCM185282693.jpg?image=600)\n** jessops.com **\n <a target='_blank' href='https://www.jessops.com/p/olympus/om-d-e-m10-mark-ii-compact-system-camera-in-silver-with-14-42mm-lens-98019'>Olympus OM-D E-M10 Mark II Compact System Camera in Silver with 14-42mm Lens</a> \n</blockquote>",
                    type: "message"
                },
                {
                    author: "robot",
                    content: "And so on... :nerd_face:",
                    type: "message"
                }
            ],
        buttons: ["What else could it do?"],
        dropdowns: []
    },
    "What else could it do?": {
        chatLog: [
            {
                author: "robot",
                content: "I can help with all sorts of websites like **Amazon**, **Ticketmaster**, **BBC** and doing all sorts of things like:",
                type: "message"
            },
            {
                author: "robot",
                content: "Finding directions to gig venues when you're buying tickets on **ticketmaster**",
                type: "message"
            },
            {
                author: "googlemaps",
                content: "Here are the directions to **Pearl Jam** at _Hyde Park_ <br><br><iframe src='https://maps.google.com/?saddr=Hyde%20Park%2C%20London&daddr=51.5044771999999966,-0.0821610000000000&output=embed' frameborder='0' style='border:0' allowfullscreen></iframe>",
                type: "message"
            },
            {
                author: "robot",
                content: "Or showing you the top tweets about the news article you're reading, such as:",
                type: "message"
            },
            {
                author: "user",
                content: "Currently reading: <br> <blockquote> ![Are we on the cusp of an ‘AI winter’?](https://ichef.bbci.co.uk/news/1024/branded_news/136BA/production/_110464597_atlas.jpg) ** BBC News ** <a href='https://www.bbc.co.uk/news/technology-51064369' target='_blank'>Are we on the cusp of an ‘AI winter’?</a> <br>AI researchers admit that the hype around AI may be cooling off once again. </blockquote>",
                type: "message"
            },
            {
                author: "twitter",
                content: "<tweet>1216769557215485952</tweet><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>",
                type: "message"
            },
            {
                author: "robot",
                content: "Or when you're watching a film trailer on **YouTube**, I can find the background music for you on Spotify",
                type: "message"
            },
            {
                author: "user",
                content: "Watching **GUARDIANS OF THE GALAXY 2 Trailer (2017)**<br><br><iframe src='https://www.youtube.com/embed/jQFIu9InG7Q' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>",
                type: "message"
            },
            {
                author: "spotify",
                content: "Playing **Fox on the Run** by **Sweet**<br><br><iframe src='https://open.spotify.com/embed/track/23QyZNbiKujRQjE4omMvRi' width='300' height='80' frameborder='0' allow='encrypted-media'></iframe>",
                type: "message"
            },
            {
                author: "robot",
                content: "...and many more",
                type: "message"
            },
        ],
        buttons: ["Is there another demo I can play with?"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "dialogue triggers", "key": "1", "value": ""},
                    {"label": "tasks", "key": "2", "value": ""},
                    {"label": "dialogue history", "key": "3", "value": ""},
                ]
            }
        ],
    },
    "Is there another demo I can play with?": {
        chatLog: [
            {
                author: "robot",
                content: "There's another demo on Marc's website, I'll take you there now",
                type: "message"
            },
            {
                author: "robot",
                content: "I've just opened up the website (or click this <a href='https://marcsloan.ai/' target='_blank'>link</a> if your browser blocks popups)",
                type: "message"
            },
            {
                author: "robot",
                content: "![Enjoy](https://media.giphy.com/media/6oB3X3W6MYM3C/giphy.gif)",
                type: "message"
            },
        ],
        buttons: [],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "dialogue triggers", "key": "1", "value": ""},
                    {"label": "tasks", "key": "2", "value": ""},
                    {"label": "dialogue history", "key": "3", "value": ""},
                ]
            }
        ],
    },
    "Tell me more about dialogue triggers": {
        chatLog: [
            {
                author: "robot",
                content: "I only pop up when you've done something online to *trigger* me",
                type: "message"
            },
            {
                author: "robot",
                content: "![Triggered](https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif)",
                type: "message"
            },
            {
                author: "robot",
                content: "Something like shopping on Amazon, or reading a news article. Something that lets me know I can help",
                type: "message"
            },
            {
                author: "robot",
                content: "Or when you click on one of my buttons, like the ones below 👇",
                type: "message"
            },
        ],
        buttons: ["Show me an example"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "tasks", "key": "2", "value": ""},
                    {"label": "dialogue history", "key": "3", "value": ""},
                ]
            }
        ],
    },
    "Tell me more about tasks": {
        chatLog: [
            {
                author: "robot",
                content: "It's easy for me to tell the difference between when you're shopping online, when you're planning an event and when you're just messing about on social media.",
                type: "message"
            },
            {
                author: "robot",
                content: "![Shopping](https://media.giphy.com/media/d6WWh3Em7kWHu/giphy.gif)",
                type: "message"
            },
            {
                author: "robot",
                content: "Depending on what *task* you're doing online, I'll suggest different ways to help you. Check out the example to see some ways I can help you.",
                type: "message"
            },
        ],
        buttons: ["Show me an example"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "dialogue triggers", "key": "1", "value": ""},
                    {"label": "dialogue history", "key": "3", "value": ""},
                ]
            }
        ],
    },
    "Tell me more about dialogue history": {
        chatLog: [
            {
                author: "robot",
                content: "As you visit more websites and interact with me, our conversation will become a timeline of your interactions online.",
                type: "message"
            },
            {
                author: "robot",
                content: "Just scroll up to see this happening already ☝️",
                type: "message"
            },
        ],
        buttons: ["Show me an example"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "dialogue triggers", "key": "1", "value": ""},
                    {"label": "tasks", "key": "2", "value": ""},
                ]
            }
        ],
    }
}

// "button text": {
//     chatLog: [
//         {
//             author: "scout",
//             content: "Message",
//             type: "message"
//         },
//     ],
//     buttons: [],
//     dropdowns: [],
// }