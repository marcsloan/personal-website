import PropTypes from "prop-types";
import React from "react";
import "../../sass/widget.scss";
import {MessageContainer} from "./messageContainer";


export class Widget extends React.Component {
    static propTypes = {

    };

    render() {
        let chatLog = [{
            author: "scout",
            content: "Test Chat log",
            type: "message"
          }]

        let loading = false;

        let buttons = ["Test button"]
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
                            <MessageContainer chatLog={chatLog} loading={loading}
                                              buttons={buttons} dropdowns={dropdowns}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
