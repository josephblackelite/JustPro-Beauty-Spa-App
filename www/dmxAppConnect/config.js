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
    ],
    "Cart": [
      {
        "type": "text",
        "name": "product_id"
      },
      {
        "type": "text",
        "name": "product_stripe_id"
      },
      {
        "type": "text",
        "name": "name"
      },
      {
        "type": "text",
        "name": "quantity"
      },
      {
        "type": "text",
        "name": "amount"
      },
      {
        "type": "text",
        "name": "matrix"
      },
      {
        "type": "text",
        "name": "total"
      },
      {
        "type": "text",
        "name": "vat"
      },
      {
        "type": "text",
        "name": "product_avatar"
      },
      {
        "type": "text",
        "name": "address_id"
      },
      {
        "type": "text",
        "name": "appointment_date"
      },
      {
        "type": "text",
        "name": "timeSlot_start"
      },
      {
        "type": "text",
        "name": "timeSlot_end"
      },
      {
        "type": "text",
        "name": "customer_id"
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
  },
  "orderprompt": {
    "repeat_nails_services": {
      "meta": [
        {
          "type": "text",
          "name": "product_name"
        },
        {
          "type": "text",
          "name": "product_description"
        },
        {
          "type": "text",
          "name": "product_avatar"
        },
        {
          "type": "number",
          "name": "product_amt"
        },
        {
          "type": "text",
          "name": "amount_matrix"
        },
        {
          "type": "boolean",
          "name": "availability"
        },
        {
          "type": "text",
          "name": "stripe_product_id"
        },
        {
          "type": "text",
          "name": "category"
        },
        {
          "name": "services_photos",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "avatar_url"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "orderconfirmation": {
    "repeat_cart_items": {
      "meta": [
        {
          "name": "$id",
          "type": "number"
        },
        {
          "type": "text",
          "name": "product_id"
        },
        {
          "type": "text",
          "name": "product_stripe_id"
        },
        {
          "type": "text",
          "name": "product_name"
        },
        {
          "type": "text",
          "name": "product_quantity"
        },
        {
          "type": "text",
          "name": "product_amt"
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "name": "$id",
          "type": "number"
        },
        {
          "type": "text",
          "name": "product_id"
        },
        {
          "type": "text",
          "name": "product_stripe_id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "text",
          "name": "amount"
        },
        {
          "type": "text",
          "name": "matrix"
        },
        {
          "type": "text",
          "name": "total"
        },
        {
          "type": "text",
          "name": "vat"
        },
        {
          "type": "text",
          "name": "product_avatar"
        }
      ],
      "outputType": "array"
    }
  },
  "productinfo": {
    "varQty": {
      "meta": null,
      "outputType": "text"
    },
    "repeat_service_images": {
      "meta": [
        {
          "type": "text",
          "name": "avatar_url"
        }
      ],
      "outputType": "array"
    },
    "repeat_dots": {
      "meta": [
        {
          "type": "text",
          "name": "avatar_url"
        }
      ],
      "outputType": "array"
    }
  },
  "checkout": {
    "repeat1": {
      "meta": [
        {
          "name": "$id",
          "type": "number"
        },
        {
          "type": "text",
          "name": "product_id"
        },
        {
          "type": "text",
          "name": "product_stripe_id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "text",
          "name": "amount"
        },
        {
          "type": "text",
          "name": "matrix"
        },
        {
          "type": "text",
          "name": "total"
        },
        {
          "type": "text",
          "name": "vat"
        },
        {
          "type": "text",
          "name": "product_avatar"
        },
        {
          "type": "text",
          "name": "address_id"
        },
        {
          "type": "text",
          "name": "appointment_date"
        },
        {
          "type": "text",
          "name": "timeSlot_start"
        },
        {
          "type": "text",
          "name": "timeSlot_end"
        },
        {
          "type": "text",
          "name": "customer_id"
        }
      ],
      "outputType": "array"
    }
  },
  "chooseaddress": {
    "var": {
      "meta": null,
      "outputType": "text"
    }
  }
});
