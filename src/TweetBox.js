import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            className="tweetBox__avatar"
            src="https://twitter.com/abdilN71663852/photo"
          />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
