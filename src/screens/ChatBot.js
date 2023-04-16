import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {Button} from '@rneui/base';
import {dialogflowConfig} from '../../env';

const botAva = require('../assets/botAva.jpeg');

const BOT = {
  _id: 2,
  name: 'Bot',
  avatar: botAva,
};

class ChatBot extends Component {
  state = {
    messages: [
      {_id: 2, text: 'My name is Rocket', createdAt: new Date(), user: BOT},
      {_id: 1, text: 'Hi', createdAt: new Date(), user: BOT},
    ],
    id: 1,
    name: '',
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }
  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg;
    msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT,
      quickReplies: {
        type: 'radio',
        keepIt: true,
        values: [
          {title: 'Yes', value: 'Yes'},
          {title: 'No', value: 'No'},
        ],
      },
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error),
    );
  }
  onQuickReply(quickReply) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, quickReply),
    }));
    console.log(quickReply);
    let message = quickReply[0].value;
    // Dialogflow_V2.requestQuery(
    //   message,
    //   result => this.handleGoogleResponse(result),
    //   error => console.log(error)
    // );
    if (message == 'Yes') {
      this.props.navigation.push('Transfer');
    } else {
        this.sendBotResponse('Bạn muốn đặt lịch chuyển khoản vào thời gian khác không?')
    //   let msg;
    //   msg = {
    //     _id: this.state.messages.length + 1,
    //     text: 'Bạn muốn đặt lịch chuyển khoản vào thời gian khác không?',
    //     createdAt: new Date(),
    //     user: BOT,
    //   };
    }
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={message => this.onSend(message)}
          onQuickReply={quickReply => this.onQuickReply(quickReply)}
          user={{_id: 1}}></GiftedChat>
      </SafeAreaView>
    );
  }
}

export default ChatBot;
