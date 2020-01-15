import PropTypes from "prop-types";
import React from "react";
import "../../sass/widget.scss";
import {MessageContainer} from "./messageContainer";
import {SCRIPT} from "./chatScript";


export class Widget extends React.Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            chatLog: [{
                    author: "scout",
                    content: "Hi, I'm Marc Sloan",
                    type: "message"
                }],
            buttons: [],
            dropdowns: [],
            loading: true,
        };
      }

    componentDidMount() {
        this.transmitMessages('intro')
    }

    async transmitMessages(button){
        const LOADING_WAIT_TIME = 1000;
        const CHARACTER_WAIT_TIME = 50;

        const transcript = SCRIPT[button]
        const numMessages = transcript.chatLog.length;

        // figure out message wait times
        let waitTimes = []
        for (let i = 0; i < numMessages; i++){
            waitTimes.push((i == 0 ? 0 : waitTimes[i-1]) + LOADING_WAIT_TIME +
                transcript.chatLog[i].content.length * CHARACTER_WAIT_TIME)
        }

        for (let i = 0; i < numMessages; i++){
            setTimeout(function(){
                this.setState({
                    chatLog: this.state.chatLog.concat(transcript.chatLog[i]),
                    loading: false
                })
                if (i < numMessages - 1){
                    setTimeout(function(){
                        this.setState({
                            loading: true
                        })
                    }.bind(this), LOADING_WAIT_TIME)
                }
            }.bind(this), waitTimes[i])
        }
        setTimeout(function(){
            this.setState({
                buttons:  transcript.buttons,
                dropdown: transcript.dropdowns
            })
        }.bind(this), waitTimes[waitTimes.length - 1])
    }

    render() {

        // let loading = false;
        //
        // let buttons = ["wtf is in-browser AI?", "Tell me more about you"]
        // let dropdowns = [{
        //         "name": "",
        //         "text": "Dropdown text",
        //         options: [{"label": "Twitter", "key": "", "value": ""}, {"label": "Reddit", "key": "", "value": ""}]
        //     }]

        return (
            <div className="widget-bot-and-chat">
                <div className="chat-container">
                    <div className="sidepanel">
                        <div className="message-container">
                            <MessageContainer global={this.props.global} chatLog={this.state.chatLog} loading={this.state.loading}
                                              buttons={this.state.buttons} dropdowns={this.state.dropdowns}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
