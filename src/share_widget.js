
import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

// import exampleImage from './react-share-pin-example.png';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  PinterestShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const EmailIcon = generateShareIcon('email');

class ShareWidget extends Component {
  render() {
    const shareUrl = 'wifiroutersolutions.com ';
    const title = 'Wifi Router Solutions';

    return (
      <div className="Demo__container my-share">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>

          <FacebookShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count += 10}
          </FacebookShareCount>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>

        </div>

        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
        </div>

        <div className="Demo__some-network">
          <PinterestShareButton
            url={String(window.location)}

            windowWidth={1000}
            windowHeight={730}
            className="Demo__some-network__share-button">
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          <PinterestShareCount url={shareUrl}
            className="Demo__some-network__share-count" />
            {count => count += 10000}
        </div>

        <div className="Demo__some-network">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button">
            <EmailIcon
              size={32}
              round />
          </EmailShareButton>
        </div>
      </div>
    );
  }
}

export default ShareWidget;