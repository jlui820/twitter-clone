import React from 'react'; 
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://rlv.zcache.com/golden_retriever_dog_cartoon_coaster-r8f2f18e7c8af43e98dab67bf5f7abced_ambkq_8byvr_704.jpg' />
          <input placeholder='Whats happening?'></input>
        </div>
        <input className='tweetBox__imageInput' placeholder='Enter input URL' />

        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox
