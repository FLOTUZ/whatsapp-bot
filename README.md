# Whatsapp bot

## Setup

1.  Rename the  `env.example` file to `.env` located in the root of the project
2.  Setup enviroment variables inside the `.env` file

You can get the following variables from the meta bussiness platform following the next link:  
[Link to api setup](https://developers.facebook.com/apps/1245890323337825/whatsapp-business/wa-dev-console/)

**Note:** It's mandatory to add the recipient phone numbers.  
 

### 1\. Configuration to send messages

```
ACCESS_TOKEN=
PHONE_NUMBER_ID=
RECIPIENT_PHONE=
```

### 2\. Configuration to recieve messages

You need to create this variables and setup in meta bussiness platform following the next link:  
[Link to webhook configuration](https://developers.facebook.com/apps/1245890323337825/whatsapp-business/wa-settings/)

Its mandatory to expose the callback URL because is the URL that meta will to use to send messages to the message receiver, **for developmet** you can expose it with a reverse proxy with [ngrok](https://ngrok.com/)

```

ngrok http 3000
```

```
CALLBACK_URL <-- This is a URL exposed to internet (not a localhost URL)
VERIFY_TOKEN <-- This is like a private password created by you
```

## Use

To send or receive messages you can the whatsapp.