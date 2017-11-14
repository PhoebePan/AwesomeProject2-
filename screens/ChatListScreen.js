import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { List, ListItem } from "react-native-elements";

const list = [
  {
    name: "少女E",
    avatar_url:
      "https://trello-avatars.s3.amazonaws.com/6ba321bb8691599621e70460599c447f/30.png",
    subtitle: "我明明記得我有寫自我介紹阿，莫名其妙..................."
  },
  {
    name: "有夠帥",
    avatar_url:
      "https://trello-avatars.s3.amazonaws.com/58e22a3ab2fc6faddd1b926b13355c2f/30.png",
    subtitle: "雖然我只有99分的帥氣，但是我有100分的體貼＋100分的好脾氣..."
  },
  {
    name: "有夠正",
    avatar_url:
      "https://trello-avatars.s3.amazonaws.com/c5917234e92ffc3b1fad3df1fd3f2d56/30.png",
    subtitle: "人森就是不斷的幫自己挖坑跳~"
  }
];

export default class ChatListScreen extends Component {
  render() {
    return (
      <List containerStyle={{ marginTop: 0 }}>
        <TouchableOpacity
          style={{ backgroundColor: "transparent", padding: 0 }}
          onPress={() => Actions.chat()}
        >
          {list.map((l, i) => (
            <ListItem
              avatar={{ uri: l.avatar_url }}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </TouchableOpacity>
      </List>
    );
  }
}
