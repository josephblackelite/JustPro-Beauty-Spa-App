dmx.config({
  "index": {
    "localStorage": [
      {
        "type": "text",
        "name": "user_id"
      },
      {
        "type": "text",
        "name": "not_new_user"
      }
    ],
    "Show_proloader": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "text",
            "name": "title"
          },
          {
            "type": "text",
            "name": "text"
          }
        ]
      }
    ]
  },
  "onboarding": {
    "App_notifcation": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "text",
            "name": "title"
          },
          {
            "type": "text",
            "name": "text"
          }
        ]
      }
    ]
  }
});
