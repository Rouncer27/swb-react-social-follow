# swb-react-social-follow

> A simple react componet for displaying social follow buttons.

[![NPM](https://img.shields.io/npm/v/swb-react-social-follow.svg)](https://www.npmjs.com/package/swb-react-social-follow) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save swb-react-social-follow
```

## Usage

```jsx
import React, { Component } from "react";

import Icons from "swb-react-social-follow";

class Example extends Component {
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
      youtubeUrl: "https://www.youtube.com/"
    };
    return (
      <div>
        <Icons {...options} />
      </div>
    );
  }
}
```

## License

MIT © [Rouncer27](https://github.com/Rouncer27)
