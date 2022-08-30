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
    },
    "repeat_user_cards": {
      "meta": [
        {
          "name": "acss_debit",
          "type": "object"
        },
        {
          "name": "afterpay_clearpay",
          "type": "object"
        },
        {
          "name": "alipay",
          "type": "object"
        },
        {
          "name": "au_becs_debit",
          "type": "object"
        },
        {
          "name": "bacs_debit",
          "type": "object"
        },
        {
          "name": "bancontact",
          "type": "object"
        },
        {
          "name": "billing_details",
          "type": "object"
        },
        {
          "name": "boleto",
          "type": "object"
        },
        {
          "name": "card",
          "type": "object"
        },
        {
          "name": "card_present",
          "type": "object"
        },
        {
          "name": "created",
          "type": "number"
        },
        {
          "name": "customer",
          "type": "text"
        },
        {
          "name": "customer_balance",
          "type": "object"
        },
        {
          "name": "eps",
          "type": "object"
        },
        {
          "name": "fpx",
          "type": "object"
        },
        {
          "name": "giropay",
          "type": "object"
        },
        {
          "name": "grabpay",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "ideal",
          "type": "object"
        },
        {
          "name": "interac_present",
          "type": "object"
        },
        {
          "name": "klarna",
          "type": "object"
        },
        {
          "name": "konbini",
          "type": "object"
        },
        {
          "name": "livemode",
          "type": "boolean"
        },
        {
          "name": "metadata",
          "type": "object"
        },
        {
          "name": "object",
          "type": "text"
        },
        {
          "name": "oxxo",
          "type": "object"
        },
        {
          "name": "p24",
          "type": "object"
        },
        {
          "name": "paynow",
          "type": "object"
        },
        {
          "name": "sepa_debit",
          "type": "object"
        },
        {
          "name": "sofort",
          "type": "object"
        },
        {
          "name": "type",
          "type": "text"
        },
        {
          "name": "us_bank_account",
          "type": "object"
        },
        {
          "name": "wechat_pay",
          "type": "object"
        }
      ],
      "outputType": "text"
    }
  },
  "chooseaddress": {
    "var": {
      "meta": null,
      "outputType": "text"
    }
  },
  "billing": {
    "repeat_user_cards": {
      "meta": [
        {
          "name": "acss_debit",
          "type": "object"
        },
        {
          "name": "afterpay_clearpay",
          "type": "object"
        },
        {
          "name": "alipay",
          "type": "object"
        },
        {
          "name": "au_becs_debit",
          "type": "object"
        },
        {
          "name": "bacs_debit",
          "type": "object"
        },
        {
          "name": "bancontact",
          "type": "object"
        },
        {
          "name": "billing_details",
          "type": "object"
        },
        {
          "name": "boleto",
          "type": "object"
        },
        {
          "name": "card",
          "type": "object"
        },
        {
          "name": "card_present",
          "type": "object"
        },
        {
          "name": "created",
          "type": "number"
        },
        {
          "name": "customer",
          "type": "text"
        },
        {
          "name": "customer_balance",
          "type": "object"
        },
        {
          "name": "eps",
          "type": "object"
        },
        {
          "name": "fpx",
          "type": "object"
        },
        {
          "name": "giropay",
          "type": "object"
        },
        {
          "name": "grabpay",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "ideal",
          "type": "object"
        },
        {
          "name": "interac_present",
          "type": "object"
        },
        {
          "name": "klarna",
          "type": "object"
        },
        {
          "name": "konbini",
          "type": "object"
        },
        {
          "name": "livemode",
          "type": "boolean"
        },
        {
          "name": "metadata",
          "type": "object"
        },
        {
          "name": "object",
          "type": "text"
        },
        {
          "name": "oxxo",
          "type": "object"
        },
        {
          "name": "p24",
          "type": "object"
        },
        {
          "name": "paynow",
          "type": "object"
        },
        {
          "name": "sepa_debit",
          "type": "object"
        },
        {
          "name": "sofort",
          "type": "object"
        },
        {
          "name": "type",
          "type": "text"
        },
        {
          "name": "us_bank_account",
          "type": "object"
        },
        {
          "name": "wechat_pay",
          "type": "object"
        }
      ],
      "outputType": "text"
    }
  },
  "customeraddresses": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "address_name"
        },
        {
          "type": "number",
          "name": "logitude"
        },
        {
          "type": "number",
          "name": "latitude"
        },
        {
          "type": "text",
          "name": "street"
        },
        {
          "type": "text",
          "name": "building"
        },
        {
          "type": "text",
          "name": "apartment"
        },
        {
          "type": "text",
          "name": "city"
        },
        {
          "type": "text",
          "name": "state"
        },
        {
          "type": "text",
          "name": "country"
        },
        {
          "type": "number",
          "name": "google_geoPoint_longitude"
        },
        {
          "type": "number",
          "name": "google_geoPoint_latitude"
        },
        {
          "type": "text",
          "name": "google_place_id"
        }
      ],
      "outputType": "array"
    },
    "repeat_customer_addresses": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "address_name"
        },
        {
          "type": "number",
          "name": "logitude"
        },
        {
          "type": "number",
          "name": "latitude"
        },
        {
          "type": "text",
          "name": "street"
        },
        {
          "type": "text",
          "name": "building"
        },
        {
          "type": "text",
          "name": "apartment"
        },
        {
          "type": "text",
          "name": "city"
        },
        {
          "type": "text",
          "name": "state"
        },
        {
          "type": "text",
          "name": "country"
        },
        {
          "type": "number",
          "name": "google_geoPoint_longitude"
        },
        {
          "type": "number",
          "name": "google_geoPoint_latitude"
        },
        {
          "type": "text",
          "name": "google_place_id"
        },
        {
          "type": "text",
          "name": "full_address"
        }
      ],
      "outputType": "array"
    }
  }
});
