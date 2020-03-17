import PropTypes from "prop-types";
import React from "react";
import "../../sass/widget.scss";
import {MessageContainer} from "./messageContainer";
import min from "ramda/src/min";


export class Widget extends React.Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
        script: PropTypes.object.isRequired,
        openingMessage: PropTypes.string.isRequired,
        openingAuthor: PropTypes.string.isRequired,
        ga: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            chatLog: [{
                author: this.props.openingAuthor,
                content: this.props.openingMessage,
                type: "message",
                timestamp: this.getTime()
            }],
            buttons: [],
            dropdowns: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.transmitMessages("Go back to start")
    }

    async handleButtonClick(button) {
        this.setState({
            buttons: [],
            chatLog: this.state.chatLog.concat({
                author: "user",
                content: button,
                type: "message",
                timestamp: this.getTime()
            }),
            dropdowns: [],
            loading: true
        })
        this.transmitMessages(button)
    }

    async handleDropdownChange(dropdown) {
        this.setState({
            buttons: [],
            chatLog: this.state.chatLog.concat({
                author: "user",
                content: dropdown,
                type: "message",
                timestamp: this.getTime()
            }),
            dropdowns: [],
            loading: true
        })
        this.transmitMessages(dropdown)
    }

    getTime = function () {
        let dt = new Date();
        return dt.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    async transmitMessages(button) {
        const LOADING_WAIT_TIME = 700;
        const CHARACTER_WAIT_TIME = 50;

        // const LOADING_WAIT_TIME = 10;
        // const CHARACTER_WAIT_TIME = 1;

        const MAX_MESSAGE_WAIT_TIME = 2500;

        const transcript = this.props.script[button]
        const numMessages = transcript.chatLog.length;

        // the idea here is to schedule all messages so that they appear one after the other
        // figure out message wait times
        let waitTimes = []
        for (let i = 0; i < numMessages; i++) {
            waitTimes.push((i == 0 ? 0 : waitTimes[i - 1]) + LOADING_WAIT_TIME +
                min(transcript.chatLog[i].content.length * CHARACTER_WAIT_TIME, MAX_MESSAGE_WAIT_TIME))
        }

        for (let i = 0; i < numMessages; i++) {
            setTimeout(function () {
                // display the next message in the queue
                let chatEntry = transcript.chatLog[i]
                chatEntry.timestamp = this.getTime()
                this.setState({
                    chatLog: this.state.chatLog.concat(chatEntry),
                    loading: false
                })

                // if there are more messages to come, show a loading animation
                if (i < numMessages - 1) {
                    setTimeout(function () {
                        this.setState({
                            loading: true
                        })
                    }.bind(this), LOADING_WAIT_TIME)
                }
            }.bind(this), waitTimes[i])
        }

        // show the buttons and dropdowns at the same time as the last message
        setTimeout(function () {
            this.setState({
                buttons: transcript.buttons,
                dropdowns: transcript.dropdowns
            })
        }.bind(this), waitTimes[waitTimes.length - 1])
    }

    render() {

        const handleButtonClick = this.handleButtonClick.bind(this);
        const handleDropdownChange = this.handleDropdownChange.bind(this);

        return (
            <div className="widget-bot-and-chat">
                <div className="chat-container">
                    <div className="sidepanel">
                        <div className="message-container">
                            <MessageContainer global={this.props.global} chatLog={this.state.chatLog}
                                              loading={this.state.loading}
                                              buttons={this.state.buttons} dropdowns={this.state.dropdowns}
                                              handleClick={handleButtonClick} handleChange={handleDropdownChange}
                                              defaultAuthor={this.props.openingAuthor} ga={this.props.ga}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
