import EmojiConvertor from "emoji-js";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Select from "react-dropdown-select";
import ScrollToBottom from "react-scroll-to-bottom";
import ReactTooltip from "react-tooltip";
import $ from "jquery";
import Markdown from 'markdown-to-jsx';
import { TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed';

export const CHAT_SIZE = {
  width: 387,
  height: 403 // <-if you change this, also make sure to update the max-height attribute in ".conversation .conversation-container" in
  //messagecontainer.scss to be this value minus 10 pixels.
};

let STATIC_URL = ""

export class MessageContainer extends Component {
  static propTypes = {
    global: PropTypes.object.isRequired,
    chatLog: PropTypes.array.isRequired,
    buttons: PropTypes.array.isRequired,
    dropdowns: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { dropdowns: this.props.dropdowns };
    this.handleChange = this.handleChange.bind(this);
    STATIC_URL = this.props.global.STATIC_URL
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.dropdowns) !== JSON.stringify(this.props.dropdowns)) {
      this.setState({
        dropdowns: this.props.dropdowns
      });
    }
  }

  handleClick = async function(buttonText) {
      this.props.handleClick(buttonText)
  };

  handleChange = async function(event, text, name) {
    if (event.length === 0) {
      return;
    }
    let value = event[0].label;
    if (value) {
      this.props.handleChange(text + ' ' + value)
    }
  };

  componentDidMount() {
    // ensures the chat log always starts at the bottom
    document.getElementsByClassName("conversation-container")[0].scrollTop =
      document.getElementsByClassName("conversation-container")[0].scrollHeight;
  }

  render() {
    // new
    let chatLog = this.props.chatLog || [];
    let currentAuthor = "";

    const buttons = (this.props.buttons) || [];
    const dropdowns = (this.state.dropdowns) || [];

    const handleClick = this.handleClick.bind(this);

    const emoji_converter = new EmojiConvertor();
    const handleChange = this.handleChange.bind(this);

    return (
      <div className="chat">
        <div className="chat-section">
          <ScrollToBottom mode={"bottom"} className={"conversation"}
                          scrollViewClassName={"conversation-container"}
                          followButtonClassName={"conversation-follow-button"}
          >
            {
              chatLog.map(function(item, i) {
                if (item.content !== "") {
                  let msg = (<Message message={item} key={i}
                                      isFirst={(item.author !== currentAuthor)}/>);
                  currentAuthor = item.author;
                  return msg;
                }
              }, this)
            }
            {
              this.props.loading ? (<Message
                  global={this.props.global}
                message={{
                  author: "scout",
                  content: "",
                  type: "message"
                }} isFirst={('scout' !== currentAuthor)} isLoading={true}/>) : (<div></div>)}
          </ScrollToBottom>
        </div>
        {(buttons.length > 0 || dropdowns.length > 0) ?
          <div className="button-box" id="scout-button-box">
            {buttons.map(function(item, i) {
              return <button className="action-button" key={`${i}-button`}
                             onClick={() => handleClick(item)}>{emoji_converter.replace_colons(item)}</button>;
            })}
            {dropdowns.map(function(item, i) {
              return <Select key={`${i}-dropdown`}
                             options={item.options}
                             values={[]}
                             placeholder={`${item.text}...`}
                             dropdownPosition="top"
                             searchable={false}
                             labelField={"label"}
                             dropdownGap={0}
                             onChange={(e) => handleChange(e, item.text, item.name)}
              />;
            })}
          </div>
          : ""
        }

      </div>

    );
  }
}

class Message extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    isFirst: PropTypes.bool.isRequired,
  };

    componentDidMount() {
    if (this.props.message.content === "I've just opened up the website for installing the browser add-on"){
      setTimeout(function(){
        window.open("https://chrome.google.com/webstore/detail/scout-browser-assistant/jjfheehgdpcdemmbceopcailhbgcnanm", '_blank');
      }, 1500)
    }
  }

  getTime = function() {
    let dt = new Date();
    // return dt.getHours() + ":" + dt.getMinutes()
    return dt.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  getAvatarSrc() {
    return `${STATIC_URL}img/demo/${this.props.message.author}.png`
  }

  async handleLinkClick(event) {
    // dispatchToBackground("sendAnalyticsEvent",
    //   {
    //     "event_type": "extension_interaction",
    //     "interaction_type": "link_click",
    //     "url": window.location.href
    //   }
    // );
    // I might want to use this to send GA events for when people click on links
  }

  render() {
    const emoji_converter = new EmojiConvertor();
    const emoji_output = emoji_converter.replace_colons(this.props.message.content);

    const SpanInsteadOfP = ({ children, ...props }) => (
        <span {...props}>{children}</span>
    );

    const Twitter = ({ children}) => (
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={"" + children[0]}
          options={{height: 300}}
        />
    );

    const Tweet = ({ children}) => (
      <TwitterTweetEmbed
        tweetId={"" + children[0]}
      />
    );


    return (
      <div className={`message-box ${this.props.isFirst ? `first` : ""}`}>

        {this.props.isFirst && this.props.message.author !== "user" ?
            <img className="message-avatar received" src={this.getAvatarSrc()}/> : ""}
        <div
          className={`message ${this.props.message.author !== "user" ? "received" : "sent"} ${this.props.isFirst ? "first" : ""} ${this.props.message.author}`}>
          {
            this.props.isLoading ? (
              <div className={"spinner"}>
                <div className={"bounce1"}></div>
                <div className={"bounce2"}></div>
                <div className={"bounce3"}></div>
              </div>
            ) : (
              <div>
                  <div onClick={() => this.handleLinkClick()}>
                    <Markdown className={"scout-react-select"}
                      options={{
                        overrides: {
                          copybox: {
                            component: Copybox,
                          },
                          twitter: {
                            component: Twitter,
                          },
                          tweet: {
                            component: Tweet
                          },
                          a: {
                            props: {
                              target: "_blank"
                            }
                          },
                          p: {
                            component: SpanInsteadOfP
                          }
                        },
                      }}
                    >{emoji_output}</Markdown>
                  </div>
                    <span className="metadata">
                      <span className="time">{this.getTime()}</span>
                    </span>
              </div>
            )
          }
        </div>

        {this.props.isFirst && this.props.message.author === "user" ? <img
          className="message-avatar sent"
          src={this.getAvatarSrc()}/> : ""}
      </div>
    );
  }
}

class Copybox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        copied: false,
        hover: false
      };
    }

    async handleCopyClick() {
      copyToClipboard(React.getInnerText(this));

      this.setState({ copied: true });
      await timeout(2000);
      this.setState({ copied: false });

      // Keep for GA reporting
      // dispatchToBackground("sendAnalyticsEvent",
      //   {
      //     "event_type": "extension_interaction",
      //     "interaction_type": "copy_click",
      //     "url": window.location.href
      //   }
      // );
    }

  getCopyText() {
    if (this.state.copied) {
      return "Copied";
    } else if (this.state.hover) {
      return "Click to copy";
    } else {
      return "Click to copy";
    }
  }

  componentDidUpdate(prevProps) {
    ReactTooltip.rebuild();
  }

  componentDidMount() {
    ReactTooltip.rebuild();
  }

    render() {
      const emoji_converter = new EmojiConvertor();
      const emoji_output = emoji_converter.replace_colons(React.getInnerText(this));

      return (
        <div className="copy-box">
          <div className="copy-box-content">
            <Markdown className={"scout-react-select"} options={{
                        overrides: {
                          a: {
                            props: {
                              target: "_blank"
                            }
                          }
                        },
                      }}>{emoji_output}</Markdown>
          </div>
          <div className="copy-button" data-tip={this.getCopyText()} key={this.getCopyText()}
                 onClick={() => this.handleCopyClick()}

                 onMouseEnter={() => {
                   this.setState({ hover: true });
                 }}
                 onMouseLeave={() => {
                   this.setState({ hover: false });
                 }}
            >
              <img src={`${STATIC_URL}img/demo/copy.png`}/>
            </div>
          <ReactTooltip/>
          </div>
      )
    }
}

function copyToClipboard(value) {
  let textField = document.createElement("textarea");
  textField.innerText = value;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
}

$(function() {
	React.getInnerText = function(obj) {
		var buf = '';
		if( obj ) {
			var type = typeof(obj);
			if( type === 'string' || type === 'number' ) {
				buf += obj;
			} else if( type === 'object' ) {
				var children = null;
				if( Array.isArray(obj) ) {
					children = obj;
				} else {
					var props = obj.props;
					if( props ) {
						children = props.children;
					}
				}
				if( children ) {
					if( Array.isArray(children) ) {
						children.forEach(function(o) {
							buf += React.getInnerText(o);
						});
					} else {
						buf += React.getInnerText(children);
					}
				}
			}
		}
		return buf;
	};
});
