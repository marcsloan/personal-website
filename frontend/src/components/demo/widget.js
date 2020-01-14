import PropTypes from "prop-types";
import React from "react";
import "../../sass/widget.scss";
import {MessageContainer} from "./messageContainer";


export class Widget extends React.Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
    };

    render() {
        let chatLog = [{
            author: "scout",
            content: "Hi, I'm Marc Sloan",
            type: "message"
          },
        {
            author: "scout",
            content: "I invented this in-browser AI assistant to help you when you read webpages and surf the web",
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
        ]

        let loading = false;

        let buttons = ["wtf is in-browser AI?", "Tell me more about you"]
        let dropdowns = [{
                "name": "",
                "text": "Dropdown text",
                options: [{"label": "Twitter", "key": "", "value": ""}, {"label": "Reddit", "key": "", "value": ""}]
            }]

        return (
            <div className="widget-bot-and-chat">
                <div className="chat-container">
                    <div className="sidepanel">
                        <div className="message-container">
                            <MessageContainer global={this.props.global} chatLog={chatLog} loading={loading}
                                              buttons={buttons} dropdowns={dropdowns}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
