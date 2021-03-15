import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://twitter.com/abdilN71663852/photo" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Abdi Ali{""}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
              </span>
              <span className="post__username">@abdulahifarid</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a Twitter Clone with ReactJs</p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clADjomZ39/giphy.gif"
          alt="gif"
        />
      </div>
    </div>
  );
}

export default Post;
