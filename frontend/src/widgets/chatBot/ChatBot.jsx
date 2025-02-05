import React, { useEffect } from 'react';
import './ChatBot.module.css';

const ChatBot = () => {
  useEffect(() => {
    const loadWebChatScript = () => {
      return new Promise((resolve, reject) => {
        if (window.WebChat) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
        script.crossOrigin = 'anonymous';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Web Chat script.'));
        document.body.appendChild(script);
      });
    };

    const loadWebChat = async () => {
      try {
        await loadWebChatScript();

        if (!window.WebChat || !window.WebChat.createDirectLine) {
          throw new Error('Web Chat library failed to load properly.');
        }

        const styleOptions = {
          hideUploadButton: true,
          accent: '#0063B1',
          backgroundColor: 'White',
          cardEmphasisBackgroundColor: '#F0F0F0',
          paddingRegular: 10,
          paddingWide: 10 * 2,
          subtle: '#767676',

          avatarSize: 40,
          botAvatarBackgroundColor: undefined, // defaults to accent color
          botAvatarImage: '/logo1.png',
          botAvatarInitials: '',
          userAvatarBackgroundColor: undefined, // defaults to accent color
          userAvatarImage: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
          userAvatarInitials: '',
          // speech: true,
          hideSendBox: false,
          microphoneButtonColorOnDictate: '#F33',
          sendBoxBackground: 'White',
          sendBoxButtonColor: undefined, // defaults to subtle
          sendBoxButtonColorOnDisabled: '#CCC',
          sendBoxButtonColorOnFocus: '#333',
          sendBoxButtonColorOnHover: '#333',
          sendBoxDisabledTextColor: '#CCC', // defaults to subtle
          sendBoxHeight: 40,
          sendBoxMaxHeight: 200,
          sendBoxTextColor: 'Black',
          sendBoxBorderBottom: '',
          sendBoxBorderLeft: '',
          sendBoxBorderRight: '',
          sendBoxBorderTop: 'solid 1px #E6E6E6',
          sendBoxPlaceholderColor: undefined, // defaults to subtle
          sendBoxTextWrap: false,

          rootHeight: 'calc(90vh - 150px)',
          rootWidth: '100%',

        };

        const tokenEndpointURL = new URL('https://default88227c99d1574dbe8e33d8b3fcc295.77.environment.api.powerplatform.com/powervirtualagents/botsbyschema/cr69f_agentKgArTj/directline/token?api-version=2022-03-01-preview');
        const locale = document.documentElement.lang || 'en';
        const apiVersion = tokenEndpointURL.searchParams.get('api-version');

        const [directLineResponse, tokenResponse] = await Promise.all([
          fetch(new URL(`/powervirtualagents/regionalchannelsettings?api-version=${apiVersion}`, tokenEndpointURL)),
          fetch(tokenEndpointURL)
        ]);

        if (!directLineResponse.ok || !tokenResponse.ok) {
          throw new Error('Failed to retrieve regional channel settings or Direct Line token.');
        }

        const directLineData = await directLineResponse.json();
        const tokenData = await tokenResponse.json();

        const directLineURL = directLineData.channelUrlsById.directline;
        const token = tokenData.token;

        const directLine = window.WebChat.createDirectLine({ domain: new URL('v3/directline', directLineURL), token });

        const { createCognitiveServicesSpeechServicesPonyfillFactory} = window.WebChat;
        const webSpeechPonyfillFactory = await createCognitiveServicesSpeechServicesPonyfillFactory({
          credentials: {
            region: 'YOUR_REGION',
            subscriptionKey: 'YOUR_SUBSCRIPTION_KEY'
          }
        })

        const subscription = directLine.connectionStatus$.subscribe({
          next(value) {
            if (value === 2) {
              directLine.postActivity({
                localTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                locale,
                name: 'startConversation',
                type: 'event'
              }).subscribe();

              subscription.unsubscribe();
            }
          }
        });



        window.WebChat.renderWebChat({ directLine, locale, styleOptions, webSpeechPonyfillFactory }, document.getElementById('webchat'));
      } catch (error) {
        console.error('Error loading Web Chat:', error);
      }
    };

    loadWebChat();
  }, []);

  return (
    <div>
      <div id='banner'>
        <h1>ThresHub AI</h1>
      </div>
      <div id="webchat" role="main"></div>
    </div>
  );
};

export default ChatBot;
