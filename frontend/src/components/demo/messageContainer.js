import EmojiConvertor from "emoji-js";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Select from "react-dropdown-select";
import ScrollToBottom from "react-scroll-to-bottom";
import ReactTooltip from "react-tooltip";
import styles from "../../sass/messagecontainer.scss";
// import { getAsset, timeout } from "../../utils/utils";
// import $ from "jquery";
import Markdown from 'markdown-to-jsx';

export const CHAT_SIZE = {
  width: 387,
  height: 403 // <-if you change this, also make sure to update the max-height attribute in ".conversation .conversation-container" in
  //messagecontainer.scss to be this value minus 10 pixels.
};

export class MessageContainer extends Component {
  static propTypes = {
    // new
    chatLog: PropTypes.array.isRequired,
    buttons: PropTypes.array.isRequired,
    dropdowns: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { dropdowns: this.props.dropdowns };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.dropdowns) !== JSON.stringify(this.prop.dropdowns)) {
      this.setState({
        dropdowns: this.props.dropdowns
      });
    }
  }

  handleClick = async function(buttonText) {
    // need some code here that moves the chatlog further along
    console.log("Button clicked: " + buttonText)
  };

  handleChange = async function(event, text, name) {
    if (event.length === 0) {
      return;
    }
    let value = event[0].label;
    if (value) {
      this.setState({ dropdowns: [] });
      //do something here that moves the chatlog along and also removes the dropdown option that was selected
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

    let loadingMessage = this.props.loading ? (<Message
      message={{
        author: "scout",
        content: "",
        type: "message"
      }} isFirst={true} isLoading={true}/>) : (<div></div>);

    const buttons = (this.props.buttons) || [];
    const dropdowns = (this.state.dropdowns) || [];

    const handleClick = this.handleClick;

    const emoji_converter = new EmojiConvertor();
    const handleChange = this.handleChange;

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
                  let msg = <div></div>
                  // let msg = (<Message message={item} key={i}
                  //                     isFirst={(item.author !== currentAuthor)}/>);
                  currentAuthor = item.author;
                  return msg;
                }
              }, this)
            }
            {loadingMessage}
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
    global: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    isFirst: PropTypes.bool.isRequired
  };


  getTime = function(timestamp) {
    let dt = new Date(timestamp);
    // return dt.getHours() + ":" + dt.getMinutes()
    return dt.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  getAvatarSrc() {
    if (this.props.message.author !== "user" || this.props.user.avatar === "") {
      return getAsset(`img/chatbot-avatars/${this.props.message.author}.png`);
    } else {
      return this.props.user.avatar;
    }
  }

  async handleLinkClick(event) {
    dispatchToBackground("sendAnalyticsEvent",
      {
        "event_type": "extension_interaction",
        "interaction_type": "link_click",
        "url": window.location.href
      }
    );
  }

  render() {
    const emoji_converter = new EmojiConvertor();
    const emoji_output = emoji_converter.replace_colons(this.props.message.content);

    return (
      <div className={`${styles["message-box"]} ${this.props.isFirst ? `${styles["first"]}` : ""}`}>

        {this.props.isFirst && this.props.message.author !== "user" ? <img
          className={`${styles["message-avatar"]} ${styles["received"]}`}
          src={this.getAvatarSrc()}/> : ""}

        <div
          className={`${styles["message"]} ${this.props.message.author !== "user" ? styles["received"] : styles["sent"]} ${this.props.isFirst ? styles["first"] : ""} ${styles[`${this.props.message.author}`]}`}>
          {
            this.props.isLoading ? (
              <div className={styles["spinner"]}>
                <div className={styles["bounce1"]}></div>
                <div className={styles["bounce2"]}></div>
                <div className={styles["bounce3"]}></div>
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
                          a: {
                            props: {
                              target: "_blank"
                            }
                          }
                        },
                      }}
                    >{emoji_output}</Markdown>
                  </div>
                {
                  this.props.message.timestamp && (this.props.message.timestamp !== "") ? (
                    <span className={styles["metadata"]}>
                                    <span className={styles["time"]}>{this.getTime(this.props.message.timestamp)}</span>
                                </span>
                  ) : ""
                }
              </div>
            )
          }
        </div>

        {this.props.isFirst && this.props.message.author === "user" ? <img
          className={`${styles["message-avatar"]} ${styles["sent"]}`}
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

      dispatchToBackground("sendAnalyticsEvent",
        {
          "event_type": "extension_interaction",
          "interaction_type": "copy_click",
          "url": window.location.href
        }
      );
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
        <div className={styles["copy-box"]}>
          <div className={styles["copy-box-content"]}>
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
          <div className={styles["copy-button"]} data-tip={this.getCopyText()} key={this.getCopyText()}
                 onClick={() => this.handleCopyClick()}

                 onMouseEnter={() => {
                   this.setState({ hover: true });
                 }}
                 onMouseLeave={() => {
                   this.setState({ hover: false });
                 }}
            >
              <img src={getAsset(`img/copy.png`)}/>
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

// $(function() {
// 	React.getInnerText = function(obj) {
// 		var buf = '';
// 		if( obj ) {
// 			var type = typeof(obj);
// 			if( type === 'string' || type === 'number' ) {
// 				buf += obj;
// 			} else if( type === 'object' ) {
// 				var children = null;
// 				if( Array.isArray(obj) ) {
// 					children = obj;
// 				} else {
// 					var props = obj.props;
// 					if( props ) {
// 						children = props.children;
// 					}
// 				}
// 				if( children ) {
// 					if( Array.isArray(children) ) {
// 						children.forEach(function(o) {
// 							buf += React.getInnerText(o);
// 						});
// 					} else {
// 						buf += React.getInnerText(children);
// 					}
// 				}
// 			}
// 		}
// 		return buf;
// 	};
// });
