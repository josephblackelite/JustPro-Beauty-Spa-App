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
      },
      {
        "type": "text",
        "name": "customer_las"
      },
      {
        "type": "text",
        "name": "customer_last_address_id"
      },
      {
        "type": "text",
        "name": "state"
      },
      {
        "type": "text",
        "name": "service_location"
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
      },
      {
        "type": "text",
        "name": "provider_id"
      },
      {
        "type": "text",
        "name": "service_type"
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
    ],
    "AddOneSignal_user_id": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "text",
            "name": "user_id"
          }
        ]
      }
    ],
    "navigate_to_verify_otp": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "text",
            "name": "user_id"
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
    },
    "repeat_salons": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "staff_name",
          "type": "text"
        },
        {
          "name": "provider_full_address",
          "type": "text"
        },
        {
          "name": "provider_address_longitude",
          "type": "number"
        },
        {
          "name": "provider_address_latitude",
          "type": "number"
        },
        {
          "name": "provider_avatar",
          "type": "text"
        },
        {
          "name": "distance",
          "type": "text",
          "sub": [
            {
              "name": "Distance",
              "type": "text"
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
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "stripe_payment_method_id"
        },
        {
          "type": "text",
          "name": "country"
        },
        {
          "type": "text",
          "name": "exp_year"
        },
        {
          "type": "text",
          "name": "exp_month"
        },
        {
          "type": "text",
          "name": "funding"
        },
        {
          "type": "text",
          "name": "last4"
        },
        {
          "type": "text",
          "name": "issuer"
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
  },
  "billing": {
    "repeat_user_cards": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "stripe_payment_method_id"
        },
        {
          "type": "text",
          "name": "country"
        },
        {
          "type": "text",
          "name": "exp_year"
        },
        {
          "type": "text",
          "name": "exp_month"
        },
        {
          "type": "text",
          "name": "funding"
        },
        {
          "type": "text",
          "name": "last4"
        },
        {
          "type": "text",
          "name": "issuer"
        }
      ],
      "outputType": "array"
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
  },
  "orders": {
    "repeat_cunstomer_orders": {
      "meta": [
        {
          "type": "number",
          "name": "total_amt"
        },
        {
          "type": "number",
          "name": "amount_paid"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "boolean",
          "name": "order_fulfilled"
        },
        {
          "type": "text",
          "name": "order_uuid_id"
        },
        {
          "type": "boolean",
          "name": "order_paid"
        },
        {
          "type": "date",
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
          "name": "items",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "total_amt"
            },
            {
              "type": "number",
              "name": "amount"
            },
            {
              "type": "number",
              "name": "quantity"
            },
            {
              "type": "number",
              "name": "tax_amt"
            },
            {
              "type": "datetime",
              "name": "order_dateTime"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "customer_id"
        },
        {
          "type": "text",
          "name": "order_uuid_id"
        },
        {
          "type": "number",
          "name": "service_id"
        },
        {
          "type": "number",
          "name": "amount"
        },
        {
          "type": "number",
          "name": "quantity"
        },
        {
          "type": "number",
          "name": "tax_amt"
        },
        {
          "type": "number",
          "name": "total_amt"
        },
        {
          "type": "number",
          "name": "discount_amt"
        },
        {
          "type": "number",
          "name": "discount_percent"
        },
        {
          "type": "text",
          "name": "order_status"
        },
        {
          "type": "datetime",
          "name": "order_dateTime"
        },
        {
          "type": "datetime",
          "name": "last_updated"
        },
        {
          "type": "number",
          "name": "provider_id"
        },
        {
          "type": "text",
          "name": "matrix"
        },
        {
          "type": "number",
          "name": "related_order_id"
        },
        {
          "type": "text",
          "name": "stripe_invoice_item_id"
        },
        {
          "type": "text",
          "name": "item_image"
        },
        {
          "type": "text",
          "name": "product_name"
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": [
        {
          "type": "number",
          "name": "total_amt"
        },
        {
          "type": "number",
          "name": "amount_paid"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "boolean",
          "name": "order_fulfilled"
        },
        {
          "type": "text",
          "name": "order_uuid_id"
        },
        {
          "type": "boolean",
          "name": "order_paid"
        },
        {
          "type": "date",
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
          "name": "items",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "total_amt"
            },
            {
              "type": "number",
              "name": "amount"
            },
            {
              "type": "number",
              "name": "quantity"
            },
            {
              "type": "number",
              "name": "tax_amt"
            },
            {
              "type": "datetime",
              "name": "order_dateTime"
            },
            {
              "type": "text",
              "name": "product_name"
            },
            {
              "type": "text",
              "name": "product_avatar"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "chooseprofessional": {
    "repeat_providers": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "staff_name",
          "type": "text"
        },
        {
          "name": "provider_full_address",
          "type": "text"
        },
        {
          "name": "provider_address_longitude",
          "type": "number"
        },
        {
          "name": "provider_address_latitude",
          "type": "number"
        },
        {
          "name": "provider_avatar",
          "type": "text"
        },
        {
          "name": "distance",
          "type": "text",
          "sub": [
            {
              "name": "Distance",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_staff": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "staff_name"
        },
        {
          "type": "text",
          "name": "provider_avatar"
        },
        {
          "type": "number",
          "name": "provider_availability"
        },
        {
          "type": "text",
          "name": "provider_email"
        },
        {
          "type": "text",
          "name": "provider_phone_number"
        },
        {
          "type": "number",
          "name": "skill_rating"
        },
        {
          "type": "text",
          "name": "job_title"
        },
        {
          "type": "text",
          "name": "provider_type"
        },
        {
          "type": "text",
          "name": "provider_full_address"
        },
        {
          "type": "number",
          "name": "provider_address_longitude"
        },
        {
          "type": "number",
          "name": "provider_address_latitude"
        }
      ],
      "outputType": "array"
    }
  },
  "appointmentpage": {
    "repeat_available_time_slot": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "time_slot_start"
        },
        {
          "type": "number",
          "name": "time_slot_end"
        }
      ],
      "outputType": "array"
    },
    "time_slot_start_array": {
      "meta": [
        {
          "type": "number",
          "name": "booking_date_id"
        },
        {
          "type": "number",
          "name": "time_start"
        },
        {
          "type": "number",
          "name": "time_end"
        }
      ],
      "outputType": "array"
    }
  },
  "providerservicespage": {
    "repeat_provider_services": {
      "meta": [
        {
          "type": "text",
          "name": "product_name"
        },
        {
          "type": "number",
          "name": "service_id"
        },
        {
          "type": "number",
          "name": "item_price_with_tax"
        }
      ],
      "outputType": "array"
    }
  }
});
