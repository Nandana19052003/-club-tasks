import tweepy
import tokens

# OAuth authentication
auth = tweepy.OAuthHandler(tokens.consumer_key, tokens.consumer_secret)
auth.set_access_token(tokens.access_token, tokens.access_token_secret)
api = tweepy.API(auth)

# Get tweet text from user
tweet = input("Enter your tweet: ")

# Update status
api.update_status(tweet)
print("Tweeted: " + tweet)
