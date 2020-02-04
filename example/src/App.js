import React, { Component } from "react";

import Icons from "swb-react-social-follow";

export default class App extends Component {
  render() {
    const options = {
      facebook: true,
      facebookUrl: "https://www.facebook.com/",
      twitter: true,
      twitterUrl: "https://twitter.com/switchback4ever",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/company/",
      instagram: true,
      instagramUrl: "https://www.instagram.com/",
      youtube: true,
      youtubeUrl: "https://www.youtube.com/",
      pintrest: true,
      pintrestUrl: "https://www.pintrest.com/",
      snapchat: true,
      snapchatUrl: "https://www.pintrest.com/"
    };
    return (
      <div>
        <Icons {...options} />
      </div>
    );
  }
}
