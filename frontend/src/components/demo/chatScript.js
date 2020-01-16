export const SCRIPT = {
    "Go back to start": {
        chatLog:
            [
                {
                    author: "scout",
                    content: "I invented this **in-browser AI assistant** to help you when you read webpages and surf the web",
                    type: "message"
                },
                {
                    author: "scout",
                    content: "I can help you while you're viewing this webpage (about me)",
                    type: "message"
                },
                {
                    author: "scout",
                    content: "What would you like to know more about?",
                    type: "message"
                }
            ],
        buttons: ["What is in-browser AI?", "Tell me more about you"],
        dropdowns: []
    },
    "What is in-browser AI?": {
        chatLog: [
            {
                author: "scout",
                content: "It's an add-on for your web browser (like a Chrome Extension)",
                type: "message"
            },
            {
                author: "scout",
                content: "It reads the webpages you visit in real-time (it's completely private and no information leaves the browser)",
                type: "message"
            },
            {
                author: "scout",
                content: "![Private](https://media.giphy.com/media/leqmpruKOh3gY/giphy.gif)",
                type: "message"
            },
            {
                author: "scout",
                content: "And depending on what you're doing online, it offers helpful suggestions for how it can help",
                type: "message"
            },
            {
                author: "scout",
                content: "We called it [Scout](https://contextscout.com)",
                type: "message"
            },
        ],
        buttons: ["Show me an example", "Give it a go"],
        dropdowns: [],
    },
    "Give it a go": {
        chatLog: [
            {
                author: "scout",
                content: "I've just opened up the website for installing the browser add-on",
                type: "message"
            },
            {
                author: "scout",
                content: "![Enjoy](https://media.giphy.com/media/6oB3X3W6MYM3C/giphy.gif)",
                type: "message"
            },
        ],
        buttons: ["Show me an example", "Go back to start"],
        dropdowns: [],
    },
    "Show me an example": {
        chatLog: [
            {
                author: "scout",
                content: "Let's say you were on Amazon looking at a new camera, then Scout would pop up and you'd see something like:",
                type: "message"
            },
            {
                author: "user",
                content: "I'm thinking of buying **Olympus OM-D E-M10 Mark III** - _£629.00_\n<blockquote>\n ![Olympus OM-D E-M10 Mark III Compact System Camera with: Amazon.co.uk: Camera & Photo](https://images-na.ssl-images-amazon.com/images/I/91exNRnTqHL._AC_SX466_.jpg)\n ** www.amazon.co.uk **\n <a href='https://www.amazon.co.uk/Olympus-OM-D-Mark-II-Compact/dp/B013QWFKZ8?pf_rd_p=c4861c1a-6fda-4890-9f8d-37412e8ab94b&pd_rd_wg=3V9ly&pf_rd_r=647F0BCJAA2JF9FMK0R8&ref_=pd_gw_cr_simh&pd_rd_w=WYhHO&pd_rd_r=9b285006-335d-4f6c-9230-30999887dd6f' target='_blank'>Olympus OM-D E-M10 Mark III Compact System Camera</a> \n Free delivery and returns on eligible orders. Buy Olympus OM-D E-M10 Mark III Compact System Camera with 14-42 EZ Zoom Lens\n </blockquote>",
                type: "message"
            },
            {
                author: "scout",
                content: "You could then ask the AI to do useful things like:",
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
                author: "scout",
                content: "And so on... :nerd_face:",
                type: "message"
            },
            {
                author: "scout",
                content: "We had it working on all sorts of websites like **Amazon**, **Ticketmaster**, **BBC** and doing all sorts of things like:",
                type: "message"
            },
            {
                author: "scout",
                content: "Finding directions to gig venues when you're buying tickets on **ticketmaster**",
                type: "message"
            },
            {
                author: "googlemaps",
                content: "Here are the directions to **Pearl Jam** at _Hyde Park_ <br><br><iframe src='https://maps.google.com/?saddr=Hyde%20Park%2C%20London&daddr=51.5044771999999966,-0.0821610000000000&output=embed' frameborder='0' style='border:0' allowfullscreen></iframe>",
                type: "message"
            },
            {
                author: "scout",
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
                author: "scout",
                content: "Or when you're watching a film trailer on **YouTube**, we can find the background music for you on Spotify",
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
                author: "scout",
                content: "...and many more",
                type: "message"
            },
        ],
        buttons: ["This is cool", "This sucks"],
        dropdowns: [],
    },
    "This is cool": {
        chatLog: [
            {
                author: "scout",
                content: "Thanks, we thought so too. However, getting it out to market proved harder than we thought. I've written more about why this is the case in my <a href='https://blog.marcsloan.ai' target='_blank'>blog</a>.",
                type: "message"
            },
        ],
        buttons: ["Give it a go", "Go back to start"],
        dropdowns: [],
    },
    "This sucks": {
        chatLog: [
            {
                author: "scout",
                content: "![Big Lebowski](https://media.giphy.com/media/F3G8ymQkOkbII/giphy.gif)",
                type: "message"
            },
            {
                author: "scout",
                content: "Well we thought it was a cool idea, but we did also have a hard time getting it out to market, so perhaps you are right.",
                type: "message"
            },
            {
                author: "scout",
                content: "Seriously though, if you'd like to share with me what you think sucks about this I'd love to hear, contact me here <copybox>marc@contextscout.com</copybox>",
                type: "message"
            },
        ],
        buttons: ["Give it a go", "Go back to start"],
        dropdowns: [],
    },
    "Tell me more about you": {
        chatLog: [
            {
                author: "scout",
                content: "There's plenty about me on this page already",
                type: "message"
            },
            {
                author: "scout",
                content: "![Over there](https://media.giphy.com/media/3o751YEpVSNnZLMSWc/giphy.gif)",
                type: "message"
            },
            {
                author: "scout",
                content: "But I can tell you more if you'd like to dig deeper",
                type: "message"
            },
        ],
        buttons: ["Do you tweet?", "Can I contact you?", "Go back to start"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "the technology you used", "key": "1", "value": ""},
                    {"label": "your research", "key": "2", "value": ""},
                    {"label": "your personal life", "key": "3", "value": ""}
                    ]
            }
        ],
    },
    "Do you tweet?": {
        chatLog: [
            {
                author: "scout",
                content: "Who doesn't? Here are my latest tweets",
                type: "message"
            },
            {
                author: "scout",
                content: "<twitter>MarcCSloan</twitter>",
                type: "message"
            },
        ],
        buttons: ["Can I contact you?", "Go back to start"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "the technology you used", "key": "1", "value": ""},
                    {"label": "your research", "key": "2", "value": ""},
                    {"label": "your personal life", "key": "3", "value": ""}
                    ]
            }
        ],
    },
    "Tell me more about your research": {
        chatLog: [
            {
                author: "scout",
                content: "**Dynamic Information Retrieval** was the topic of my PhD thesis at UCL under **Prof Jun Wang** (from _Mediagamma_) and **Prof David Silver** (creator of _AlphaGo_ at _DeepMind_)",
                type: "message"
            },
            {
                author: "youtube",
                content: '<iframe src="https://www.youtube.com/embed/WXHFqTvfFSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
                type: "message"
            },
            {
                author: "scout",
                content: "I combined reinforcement learning with information retrieval so that web searches could dynamically respond to user input",
                type: "message"
            },
            {
                author: "scout",
                content: "The idea was for a search engine to adapt to your behaviour over time",
                type: "message"
            },
            {
                author: "scout",
                content: "**Scout** is simply my effort to bring that technology outside of search engines and into the browser",
                type: "message"
            },
            {
                author: "scout",
                content: "I even wrote a book on the subject called <a href='https://www.amazon.co.uk/Information-Retrieval-Modeling-Synthesis-Lectures/dp/1627055258' target='_blank'>Dynamic Information Retrieval Modeling</a>",
                type: "message"
            },
        ],
        buttons: ["Any papers I should read?", "Do you tweet?", "Can I contact you?", "Go back to start"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "the technology you used", "key": "1", "value": ""},
                    {"label": "your personal life", "key": "3", "value": ""}
                    ]
            }
        ],
    },
    "Any papers I should read?": {
        chatLog: [
            {
                author: "scout",
                content: "Sure, here are the one's I'd suggest:",
                type: "message"
            },
            {
                author: "googlescholar",
                content: "[Dynamic information retrieval: Theoretical framework and application](https://dl.acm.org/doi/10.1145/2808194.2809457)<br>" +
                    "<blockquote>_Marc Sloan, Jun Wang_<br>ICTIR '15: Proceedings of the 2015 International Conference on The Theory of Information Retrieval<br>2015</blockquote>",
                type: "message"
            },
            {
                author: "googlescholar",
                content: "[A term-based methodology for query reformulation understanding](https://dl.acm.org/doi/10.1007/s10791-015-9251-5)<br>" +
                    "<blockquote>_Marc Sloan, Hui Yang, Jun Wang_<br>Information Retrieval Journal 18 (2), 145-165<br>2015</blockquote>",
                type: "message"
            },
            {
                author: "googlescholar",
                content: "[Dynamical information retrieval modelling: a portfolio-armed bandit machine approach](https://dl.acm.org/doi/10.1145/2187980.2188148)<br>" +
                    "<blockquote>_Marc Sloan, Jun Wang_<br>WWW '12: Proceedings of the 21st International Conference on World Wide Web<br>2012</blockquote>",
                type: "message"
            },
        ],
        buttons: ["Do you tweet?", "Can I contact you?", "Go back to start"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "the technology you used", "key": "1", "value": ""},
                    {"label": "your personal life", "key": "3", "value": ""}
                    ]
            }
        ],
    },
    "Tell me more about the technology you used": {
        chatLog: [
            {
                author: "scout",
                content: "This website and our product were built using a **Javascript** + **React** frontend with a **Django** **Python** backend hosted on **Heroku** and **GCP**.",
                type: "message"
            },
            {
                author: "scout",
                content: "If this is what you're interested in, you should go visit my co-founder Andy's <a href='http://andrewoharney.com/' target='_blank'>website</a> where he covers more of the technical side of things",
                type: "message"
            },
        ],
        buttons: ["Do you tweet?", "Can I contact you?", "Go back to start"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "your research", "key": "2", "value": ""},
                    {"label": "your personal life", "key": "3", "value": ""}
                    ]
            }
        ],
    },
    "Can I contact you?": {
        chatLog: [
            {
                author: "scout",
                content: "Sure, here's my email address <copybox>marc@contextscout.com</copybox>",
                type: "message"
            },
        ],
        buttons: ["Do you tweet?", "Go back to start"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "the technology you used", "key": "1", "value": ""},
                    {"label": "your research", "key": "2", "value": ""},
                    {"label": "your personal life", "key": "3", "value": ""}
                    ]
            }
        ],
    },
    "Tell me more about your personal life": {
        chatLog: [
            {
                author: "scout",
                content: "You're a nosy one aren't you…",
                type: "message"
            },
            {
                author: "scout",
                content: "![Nosy](https://media.giphy.com/media/3owzVYGmoE8FLJialy/giphy.gif)",
                type: "message"
            },
            {
                author: "scout",
                content: "Well, I'm from Wales, I live in London, I'm married to <a href='https://twitter.com/thethickett' target='_blank'>Sarah Thickett</a> and these are a few of the things I enjoy:",
                type: "message"
            },
            {
                author: "scout",
                content: "![Photography](https://media.giphy.com/media/7Jgt9Boex0vIjmfcX6/giphy.gif)",
                type: "message"
            },
            {
                author: "scout",
                content: "![Photography](https://media.giphy.com/media/5tbHTuLf2vOrcm6eDy/giphy.gif)",
                type: "message"
            },
            {
                author: "scout",
                content: "![Rugby](https://media.giphy.com/media/lfwUfJQvkiKB2/giphy.gif)",
                type: "message"
            },
            {
                author: "scout",
                content: "![Travel](https://media.giphy.com/media/ygCHE46Pn3kCQVV0fV/giphy.gif)",
                type: "message"
            },
            {
                author: "scout",
                content: "![Video Games](https://media.giphy.com/media/TTy5YmVmhmWhq/giphy.gif)",
                type: "message"
            },
        ],
        buttons: ["Do you tweet?", "Can I contact you?", "Go back to start"],
        dropdowns: [
            {
                "name": "",
                "text": "Tell me more about",
                options: [
                    {"label": "the technology you used", "key": "1", "value": ""},
                    {"label": "your research", "key": "2", "value": ""},
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