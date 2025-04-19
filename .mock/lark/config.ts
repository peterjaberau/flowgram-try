export const data = {
    "code": 0,
    "message": "ok",
    "data": {
        "feishu": {
            "black_country_list": [
                "KP",
                "SY",
                "IR",
                "CU"
            ],
            "client_biz_config_list": {
                "bioauth_appid": "161471",
                "bioauth_scene": "passport_bio_auth",
                "brand_from_foreground_user": true,
                "enable_webauthn_native_auth": true,
                "enable_webauthn_native_register": true,
                "export_client_log_file": true,
                "h5_url_config": {
                    "account_management": "/accounts/security/page/account_management/?op_platform_service=hide_navigator",
                    "account_security_center": "/accounts/security/page/?op_platform_service=hide_navigator",
                    "apply_authorization": "/accounts/security/page/apply_authorization/?op_platform_service=hide_navigator",
                    "password_setting": "/accounts/security/page/password_setting/?op_platform_service=hide_navigator",
                    "security_password_setting": "/accounts/security/page/security_password_setting/?op_platform_service=hide_navigator"
                },
                "join_team_host_whitelist": [
                    "feishu.cn",
                    "feishu-staging.cn",
                    "feishu-pre.cn",
                    "larksuite.com",
                    "larksuite-staging.com",
                    "larksuite-pre.com",
                    "feishu-boe.cn",
                    "larksuite-boe.com"
                ],
                "onekey_login_config": {
                    "need_prefetch": {
                        "mobile": true,
                        "telecom": true,
                        "unicom": false
                    },
                    "policy_urls": {
                        "mobile": "https://wap.cmpassport.com/resources/html/contract.html",
                        "telecom": "https://e.189.cn/sdk/agreement/detail.do?hidetop=true",
                        "unicom": "https://opencloud.wostore.cn/authz/resource/html/disclaimer.html?fromsdk=true"
                    },
                    "sdk_config": {
                        "onekey_login_config": {
                            "cm_config": {
                                "is_enable": 1,
                                "need_data": 0,
                                "timeout_sec": 3
                            },
                            "ct_config": {
                                "is_enable": 1,
                                "need_data": 1,
                                "timeout_sec": 3
                            },
                            "cu_config": {
                                "is_enable": 1,
                                "need_data": 1,
                                "timeout_sec": 3
                            }
                        }
                    }
                },
                "realname_appid": "161471",
                "realname_scene": "passport_real_name",
                "recover_appid": "161471",
                "recover_scene": "passport_account_recovery",
                "sub_process_read_user_by_ipc": false,
                "sub_process_read_user_by_ipc_515": true
            },
            "client_config_list": {
                "disable_rust_get_did": false,
                "enable_languages_before_login": false,
                "enable_rust_sdk_refactor_before_login": true
            },
            "default_host_domain": "feishu.cn",
            "default_region_code": "+86",
            "default_register_region_code": "+86",
            "email_preferred": true,
            "email_regex": ".+@.+\\..+",
            "enable_email_register": false,
            "enable_languages_before_login": false,
            "enable_login_join_type": false,
            "enable_mobile_register": true,
            "enable_pc_register_entry": false,
            "enable_region_code_change": false,
            "enable_register_entry": false,
            "enable_register_join_type": true,
            "idp_switch": {
                "apple_id": false,
                "facebook": false,
                "google": false
            },
            "industry_type_list": [
                {
                    "code": "MDID00000001",
                    "i18n": "Web3, Blockchain \u0026 Crypto",
                    "children": [
                        {
                            "code": "MDID00000022",
                            "i18n": "Web3, Blockchain \u0026 Crypto"
                        }
                    ]
                },
                {
                    "code": "MDID00000002",
                    "i18n": "Telecommunications",
                    "children": [
                        {
                            "code": "MDID00000025",
                            "i18n": "Mobile Service, Cable \u0026 Satellite"
                        },
                        {
                            "code": "MDID00000355",
                            "i18n": "Internet Service Providers, Domain Hosting \u0026 Internet-related Services"
                        },
                        {
                            "code": "MDID00000356",
                            "i18n": "Telephony \u0026 Wireless"
                        },
                        {
                            "code": "MDID00000357",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000003",
                    "i18n": "Financial Services",
                    "children": [
                        {
                            "code": "MDID00000026",
                            "i18n": "Insurance"
                        },
                        {
                            "code": "MDID00000027",
                            "i18n": "Banks \u0026 Asset Management"
                        },
                        {
                            "code": "MDID00000028",
                            "i18n": "FinTech"
                        },
                        {
                            "code": "MDID00000080",
                            "i18n": "Holding Company \u0026 Conglomerate"
                        },
                        {
                            "code": "MDID00000358",
                            "i18n": "Consumer Finance - Non-Bank"
                        },
                        {
                            "code": "MDID00000359",
                            "i18n": "Investment Banking \u0026 Trading"
                        },
                        {
                            "code": "MDID00000360",
                            "i18n": "PE \u0026 VC"
                        },
                        {
                            "code": "MDID00000361",
                            "i18n": "Credit Cards \u0026 Transaction Processing"
                        },
                        {
                            "code": "MDID00000362",
                            "i18n": "Financial Exchanges"
                        },
                        {
                            "code": "MDID00000363",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000004",
                    "i18n": "Professional Services",
                    "children": [
                        {
                            "code": "MDID00000029",
                            "i18n": "Legal"
                        },
                        {
                            "code": "MDID00000030",
                            "i18n": "Accounting, Audit \u0026 Tax"
                        },
                        {
                            "code": "MDID00000031",
                            "i18n": "Management Consulting"
                        },
                        {
                            "code": "MDID00000364",
                            "i18n": "IT Consulting \u0026 Training"
                        },
                        {
                            "code": "MDID00000365",
                            "i18n": "HR \u0026 Staffing"
                        },
                        {
                            "code": "MDID00000366",
                            "i18n": "Marketing"
                        },
                        {
                            "code": "MDID00000367",
                            "i18n": "Outsourcing Services"
                        },
                        {
                            "code": "MDID00000034",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000005",
                    "i18n": "Industrial Manufacturing",
                    "children": [
                        {
                            "code": "MDID00000035",
                            "i18n": "Electronics \u0026 Telecommunications Equipment"
                        },
                        {
                            "code": "MDID00000037",
                            "i18n": "Food Processing"
                        },
                        {
                            "code": "MDID00000043",
                            "i18n": "Industrial Machinery \u0026 Engineering Equipment"
                        },
                        {
                            "code": "MDID00000368",
                            "i18n": "Industrial Materials"
                        },
                        {
                            "code": "MDID00000369",
                            "i18n": "Vehicles \u0026 Automobile Parts"
                        },
                        {
                            "code": "MDID00000370",
                            "i18n": "Chemicals"
                        },
                        {
                            "code": "MDID00000371",
                            "i18n": "Aerospace \u0026 Defense"
                        },
                        {
                            "code": "MDID00000372",
                            "i18n": "Industrial Design \u0026 Research"
                        },
                        {
                            "code": "MDID00000044",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000007",
                    "i18n": "Real Estate \u0026 Construction",
                    "children": [
                        {
                            "code": "MDID00000048",
                            "i18n": "Commercial \u0026 Residential Real Estate"
                        },
                        {
                            "code": "MDID00000049",
                            "i18n": "Construction"
                        },
                        {
                            "code": "MDID00000050",
                            "i18n": "Architecture, Engineering \u0026 Design"
                        },
                        {
                            "code": "MDID00000373",
                            "i18n": "Real Estate Management \u0026 Services"
                        },
                        {
                            "code": "MDID00000374",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000008",
                    "i18n": "Consumer, Retail \u0026 Wholesale",
                    "children": [
                        {
                            "code": "MDID00000052",
                            "i18n": "Supermarkets \u0026 Convenience Stores"
                        },
                        {
                            "code": "MDID00000053",
                            "i18n": "Consumer Retail Products \u0026 Brands"
                        },
                        {
                            "code": "MDID00000058",
                            "i18n": "Accommodation \u0026 Hotels"
                        },
                        {
                            "code": "MDID00000059",
                            "i18n": "Food \u0026 Beverage"
                        },
                        {
                            "code": "MDID00000375",
                            "i18n": "Arts, Entertainment \u0026 Recreation"
                        },
                        {
                            "code": "MDID00000376",
                            "i18n": "Fitness \u0026 Sports Facilities"
                        },
                        {
                            "code": "MDID00000377",
                            "i18n": "Department Stores"
                        },
                        {
                            "code": "MDID00000378",
                            "i18n": "Wholesale"
                        },
                        {
                            "code": "MDID00000055",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000009",
                    "i18n": "Transportation \u0026 Logistics",
                    "children": [
                        {
                            "code": "MDID00000036",
                            "i18n": "Marine Shipping \u0026 Transportation"
                        },
                        {
                            "code": "MDID00000056",
                            "i18n": "Transportation Infrastructure"
                        },
                        {
                            "code": "MDID00000057",
                            "i18n": "Moving \u0026 Storage"
                        },
                        {
                            "code": "MDID00000379",
                            "i18n": "Rail, Bus \u0026 Taxi"
                        },
                        {
                            "code": "MDID00000380",
                            "i18n": "Freight \u0026 Logistics Services"
                        },
                        {
                            "code": "MDID00000381",
                            "i18n": "Airlines"
                        },
                        {
                            "code": "MDID00000382",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000011",
                    "i18n": "Technology \u0026 Internet",
                    "children": [
                        {
                            "code": "MDID00000021",
                            "i18n": "Marketing, Growth \u0026 Advertising"
                        },
                        {
                            "code": "MDID00000023",
                            "i18n": "AI / Big Data / IoT / Robotics / VR"
                        },
                        {
                            "code": "MDID00000054",
                            "i18n": "Ecommerce"
                        },
                        {
                            "code": "MDID00000061",
                            "i18n": "Social Media, News \u0026 Entertainment"
                        },
                        {
                            "code": "MDID00000063",
                            "i18n": "Gaming"
                        },
                        {
                            "code": "MDID00000383",
                            "i18n": "Service Platform"
                        },
                        {
                            "code": "MDID00000384",
                            "i18n": "Specialized Online Marketplace"
                        },
                        {
                            "code": "MDID00000385",
                            "i18n": "Data vendor"
                        },
                        {
                            "code": "MDID00000386",
                            "i18n": "Software \u0026 SaaS"
                        },
                        {
                            "code": "MDID00000387",
                            "i18n": "IT Infrastructure"
                        },
                        {
                            "code": "MDID00000065",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000012",
                    "i18n": "Education",
                    "children": [
                        {
                            "code": "MDID00000066",
                            "i18n": "University \u0026 College"
                        },
                        {
                            "code": "MDID00000067",
                            "i18n": "K-12 Education"
                        },
                        {
                            "code": "MDID00000068",
                            "i18n": "Vocational Training"
                        },
                        {
                            "code": "MDID00000069",
                            "i18n": "Online Education"
                        },
                        {
                            "code": "MDID00000070",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000013",
                    "i18n": "Healthcare",
                    "children": [
                        {
                            "code": "MDID00000071",
                            "i18n": "Hospitals, Clinics \u0026 Specialists"
                        },
                        {
                            "code": "MDID00000072",
                            "i18n": "Pharmaceuticals \u0026 Biotech"
                        },
                        {
                            "code": "MDID00000073",
                            "i18n": "Medical Devices \u0026 Equipment"
                        },
                        {
                            "code": "MDID00000388",
                            "i18n": "Health Tech"
                        },
                        {
                            "code": "MDID00000389",
                            "i18n": "Elderly Care \u0026 Nursing Services"
                        },
                        {
                            "code": "MDID00000074",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000014",
                    "i18n": "Public Service \u0026 Non-profits",
                    "children": [
                        {
                            "code": "MDID00000075",
                            "i18n": "Government"
                        },
                        {
                            "code": "MDID00000076",
                            "i18n": "NGOs"
                        },
                        {
                            "code": "MDID00000390",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000015",
                    "i18n": "Agriculture",
                    "children": [
                        {
                            "code": "MDID00000077",
                            "i18n": "Forestry"
                        },
                        {
                            "code": "MDID00000391",
                            "i18n": "Crops"
                        },
                        {
                            "code": "MDID00000392",
                            "i18n": "Animals \u0026 Livestock"
                        },
                        {
                            "code": "MDID00000393",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000016",
                    "i18n": "Energy, Mining, Utilities \u0026 Waste",
                    "children": [
                        {
                            "code": "MDID00000040",
                            "i18n": "Oil \u0026 Gas"
                        },
                        {
                            "code": "MDID00000078",
                            "i18n": "Waste Treatment, Environmental Services \u0026 Recycling"
                        },
                        {
                            "code": "MDID00000079",
                            "i18n": "Minerals \u0026 Mining"
                        },
                        {
                            "code": "MDID00000394",
                            "i18n": "Water Treatment"
                        },
                        {
                            "code": "MDID00000395",
                            "i18n": "Electricity"
                        },
                        {
                            "code": "MDID00000396",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000019",
                    "i18n": "Others",
                    "children": [
                        {
                            "code": "MDID00000081",
                            "i18n": "Others"
                        }
                    ]
                }
            ],
            "sso_domains": [
                "sg.larksuite.com",
                "jp.larksuite.com",
                "larksuite.com",
                "feishu.cn",
                "sg.feishu.cn",
                "jp.feishu.cn",
                "larkenterprise.com"
            ],
            "sso_help_url": {
                "en_US": "https://www.feishu.cn/hc/en-US/articles/360043576234",
                "ja_JP": "https://www.feishu.cn/hc/en-US/articles/360043576234",
                "zh_CN": "https://www.feishu.cn/hc/zh-CN/articles/360043576234"
            },
            "staff_size_list": [
                {
                    "code": "MDES00000001",
                    "i18n": "1-50"
                },
                {
                    "code": "MDES00000025",
                    "i18n": "51-100"
                },
                {
                    "code": "MDES00000026",
                    "i18n": "101-250"
                },
                {
                    "code": "MDES00000027",
                    "i18n": "251-500"
                },
                {
                    "code": "MDES00000003",
                    "i18n": "501-999"
                },
                {
                    "code": "MDES00000004",
                    "i18n": "1000-4999"
                },
                {
                    "code": "MDES00000005",
                    "i18n": "5000-9999"
                },
                {
                    "code": "MDES00000006",
                    "i18n": "\u003e10000"
                }
            ],
            "static_urls": {
                "cdn_path": "https://sf1-scmcdn-cn.feishucdn.com/obj/feishu-static/lark/suite/passport/uc/plugins/",
                "create_user": "create_team_1.0.0.263.js",
                "verify_user": "verify_user_1.0.0.263.js"
            },
            "supported_sso_domain_list": [
                "feishu.cn",
                "larkenterprise.com"
            ],
            "top_country_list": [
                "CN",
                "HK",
                "MO",
                "TW"
            ]
        },
        "lark": {
            "black_country_list": [
                "KP",
                "SY",
                "IR",
                "CU",
                "AE"
            ],
            "client_biz_config_list": {
                "bioauth_appid": "161471",
                "bioauth_scene": "passport_bio_auth",
                "brand_from_foreground_user": true,
                "enable_webauthn_native_auth": true,
                "enable_webauthn_native_register": true,
                "export_client_log_file": true,
                "h5_url_config": {
                    "account_management": "/accounts/security/page/account_management/?op_platform_service=hide_navigator",
                    "account_security_center": "/accounts/security/page/?op_platform_service=hide_navigator",
                    "apply_authorization": "/accounts/security/page/apply_authorization/?op_platform_service=hide_navigator",
                    "password_setting": "/accounts/security/page/password_setting/?op_platform_service=hide_navigator",
                    "security_password_setting": "/accounts/security/page/security_password_setting/?op_platform_service=hide_navigator"
                },
                "join_team_host_whitelist": [
                    "feishu.cn",
                    "feishu-staging.cn",
                    "feishu-pre.cn",
                    "larksuite.com",
                    "larksuite-staging.com",
                    "larksuite-pre.com",
                    "feishu-boe.cn",
                    "larksuite-boe.com"
                ],
                "onekey_login_config": {
                    "need_prefetch": {
                        "mobile": true,
                        "telecom": true,
                        "unicom": false
                    },
                    "policy_urls": {
                        "mobile": "https://wap.cmpassport.com/resources/html/contract.html",
                        "telecom": "https://e.189.cn/sdk/agreement/detail.do?hidetop=true",
                        "unicom": "https://opencloud.wostore.cn/authz/resource/html/disclaimer.html?fromsdk=true"
                    },
                    "sdk_config": {
                        "onekey_login_config": {
                            "cm_config": {
                                "is_enable": 0,
                                "need_data": 0,
                                "timeout_sec": 3
                            },
                            "ct_config": {
                                "is_enable": 0,
                                "need_data": 1,
                                "timeout_sec": 3
                            },
                            "cu_config": {
                                "is_enable": 0,
                                "need_data": 1,
                                "timeout_sec": 3
                            }
                        }
                    }
                },
                "realname_appid": "161471",
                "realname_scene": "passport_real_name",
                "recover_appid": "161471",
                "recover_scene": "passport_account_recovery",
                "sub_process_read_user_by_ipc": false,
                "sub_process_read_user_by_ipc_515": true,
                "use_passport_navigator": true
            },
            "client_config_list": {
                "disable_rust_get_did": false,
                "enable_languages_before_login": false,
                "enable_rust_sdk_refactor_before_login": true
            },
            "default_host_domain": "sg.larksuite.com",
            "default_region_code": "+1",
            "default_register_region_code": "+1",
            "email_preferred": true,
            "email_regex": ".+@.+\\..+",
            "enable_email_register": true,
            "enable_languages_before_login": true,
            "enable_login_join_type": false,
            "enable_mobile_register": true,
            "enable_pc_register_entry": false,
            "enable_region_code_change": true,
            "enable_register_entry": false,
            "enable_register_join_type": true,
            "fix_android_bug_sso_domains": [
                ".sg.larksuite.com",
                ".jp.larksuite.com",
                "larksuite.com",
                "feishu.cn",
                ".sg.feishu.cn",
                ".jp.feishu.cn"
            ],
            "idp_switch": {
                "apple_id": true,
                "facebook": false,
                "google": true
            },
            "industry_type_list": [
                {
                    "code": "MDID00000001",
                    "i18n": "Web3, Blockchain \u0026 Crypto",
                    "children": [
                        {
                            "code": "MDID00000022",
                            "i18n": "Web3, Blockchain \u0026 Crypto"
                        }
                    ]
                },
                {
                    "code": "MDID00000002",
                    "i18n": "Telecommunications",
                    "children": [
                        {
                            "code": "MDID00000025",
                            "i18n": "Mobile Service, Cable \u0026 Satellite"
                        },
                        {
                            "code": "MDID00000355",
                            "i18n": "Internet Service Providers, Domain Hosting \u0026 Internet-related Services"
                        },
                        {
                            "code": "MDID00000356",
                            "i18n": "Telephony \u0026 Wireless"
                        },
                        {
                            "code": "MDID00000357",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000003",
                    "i18n": "Financial Services",
                    "children": [
                        {
                            "code": "MDID00000026",
                            "i18n": "Insurance"
                        },
                        {
                            "code": "MDID00000027",
                            "i18n": "Banks \u0026 Asset Management"
                        },
                        {
                            "code": "MDID00000028",
                            "i18n": "FinTech"
                        },
                        {
                            "code": "MDID00000080",
                            "i18n": "Holding Company \u0026 Conglomerate"
                        },
                        {
                            "code": "MDID00000358",
                            "i18n": "Consumer Finance - Non-Bank"
                        },
                        {
                            "code": "MDID00000359",
                            "i18n": "Investment Banking \u0026 Trading"
                        },
                        {
                            "code": "MDID00000360",
                            "i18n": "PE \u0026 VC"
                        },
                        {
                            "code": "MDID00000361",
                            "i18n": "Credit Cards \u0026 Transaction Processing"
                        },
                        {
                            "code": "MDID00000362",
                            "i18n": "Financial Exchanges"
                        },
                        {
                            "code": "MDID00000363",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000004",
                    "i18n": "Professional Services",
                    "children": [
                        {
                            "code": "MDID00000029",
                            "i18n": "Legal"
                        },
                        {
                            "code": "MDID00000030",
                            "i18n": "Accounting, Audit \u0026 Tax"
                        },
                        {
                            "code": "MDID00000031",
                            "i18n": "Management Consulting"
                        },
                        {
                            "code": "MDID00000364",
                            "i18n": "IT Consulting \u0026 Training"
                        },
                        {
                            "code": "MDID00000365",
                            "i18n": "HR \u0026 Staffing"
                        },
                        {
                            "code": "MDID00000366",
                            "i18n": "Marketing"
                        },
                        {
                            "code": "MDID00000367",
                            "i18n": "Outsourcing Services"
                        },
                        {
                            "code": "MDID00000034",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000005",
                    "i18n": "Industrial Manufacturing",
                    "children": [
                        {
                            "code": "MDID00000035",
                            "i18n": "Electronics \u0026 Telecommunications Equipment"
                        },
                        {
                            "code": "MDID00000037",
                            "i18n": "Food Processing"
                        },
                        {
                            "code": "MDID00000043",
                            "i18n": "Industrial Machinery \u0026 Engineering Equipment"
                        },
                        {
                            "code": "MDID00000368",
                            "i18n": "Industrial Materials"
                        },
                        {
                            "code": "MDID00000369",
                            "i18n": "Vehicles \u0026 Automobile Parts"
                        },
                        {
                            "code": "MDID00000370",
                            "i18n": "Chemicals"
                        },
                        {
                            "code": "MDID00000371",
                            "i18n": "Aerospace \u0026 Defense"
                        },
                        {
                            "code": "MDID00000372",
                            "i18n": "Industrial Design \u0026 Research"
                        },
                        {
                            "code": "MDID00000044",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000007",
                    "i18n": "Real Estate \u0026 Construction",
                    "children": [
                        {
                            "code": "MDID00000048",
                            "i18n": "Commercial \u0026 Residential Real Estate"
                        },
                        {
                            "code": "MDID00000049",
                            "i18n": "Construction"
                        },
                        {
                            "code": "MDID00000050",
                            "i18n": "Architecture, Engineering \u0026 Design"
                        },
                        {
                            "code": "MDID00000373",
                            "i18n": "Real Estate Management \u0026 Services"
                        },
                        {
                            "code": "MDID00000374",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000008",
                    "i18n": "Consumer, Retail \u0026 Wholesale",
                    "children": [
                        {
                            "code": "MDID00000052",
                            "i18n": "Supermarkets \u0026 Convenience Stores"
                        },
                        {
                            "code": "MDID00000053",
                            "i18n": "Consumer Retail Products \u0026 Brands"
                        },
                        {
                            "code": "MDID00000058",
                            "i18n": "Accommodation \u0026 Hotels"
                        },
                        {
                            "code": "MDID00000059",
                            "i18n": "Food \u0026 Beverage"
                        },
                        {
                            "code": "MDID00000375",
                            "i18n": "Arts, Entertainment \u0026 Recreation"
                        },
                        {
                            "code": "MDID00000376",
                            "i18n": "Fitness \u0026 Sports Facilities"
                        },
                        {
                            "code": "MDID00000377",
                            "i18n": "Department Stores"
                        },
                        {
                            "code": "MDID00000378",
                            "i18n": "Wholesale"
                        },
                        {
                            "code": "MDID00000055",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000009",
                    "i18n": "Transportation \u0026 Logistics",
                    "children": [
                        {
                            "code": "MDID00000036",
                            "i18n": "Marine Shipping \u0026 Transportation"
                        },
                        {
                            "code": "MDID00000056",
                            "i18n": "Transportation Infrastructure"
                        },
                        {
                            "code": "MDID00000057",
                            "i18n": "Moving \u0026 Storage"
                        },
                        {
                            "code": "MDID00000379",
                            "i18n": "Rail, Bus \u0026 Taxi"
                        },
                        {
                            "code": "MDID00000380",
                            "i18n": "Freight \u0026 Logistics Services"
                        },
                        {
                            "code": "MDID00000381",
                            "i18n": "Airlines"
                        },
                        {
                            "code": "MDID00000382",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000011",
                    "i18n": "Technology \u0026 Internet",
                    "children": [
                        {
                            "code": "MDID00000021",
                            "i18n": "Marketing, Growth \u0026 Advertising"
                        },
                        {
                            "code": "MDID00000023",
                            "i18n": "AI / Big Data / IoT / Robotics / VR"
                        },
                        {
                            "code": "MDID00000054",
                            "i18n": "Ecommerce"
                        },
                        {
                            "code": "MDID00000061",
                            "i18n": "Social Media, News \u0026 Entertainment"
                        },
                        {
                            "code": "MDID00000063",
                            "i18n": "Gaming"
                        },
                        {
                            "code": "MDID00000383",
                            "i18n": "Service Platform"
                        },
                        {
                            "code": "MDID00000384",
                            "i18n": "Specialized Online Marketplace"
                        },
                        {
                            "code": "MDID00000385",
                            "i18n": "Data vendor"
                        },
                        {
                            "code": "MDID00000386",
                            "i18n": "Software \u0026 SaaS"
                        },
                        {
                            "code": "MDID00000387",
                            "i18n": "IT Infrastructure"
                        },
                        {
                            "code": "MDID00000065",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000012",
                    "i18n": "Education",
                    "children": [
                        {
                            "code": "MDID00000066",
                            "i18n": "University \u0026 College"
                        },
                        {
                            "code": "MDID00000067",
                            "i18n": "K-12 Education"
                        },
                        {
                            "code": "MDID00000068",
                            "i18n": "Vocational Training"
                        },
                        {
                            "code": "MDID00000069",
                            "i18n": "Online Education"
                        },
                        {
                            "code": "MDID00000070",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000013",
                    "i18n": "Healthcare",
                    "children": [
                        {
                            "code": "MDID00000071",
                            "i18n": "Hospitals, Clinics \u0026 Specialists"
                        },
                        {
                            "code": "MDID00000072",
                            "i18n": "Pharmaceuticals \u0026 Biotech"
                        },
                        {
                            "code": "MDID00000073",
                            "i18n": "Medical Devices \u0026 Equipment"
                        },
                        {
                            "code": "MDID00000388",
                            "i18n": "Health Tech"
                        },
                        {
                            "code": "MDID00000389",
                            "i18n": "Elderly Care \u0026 Nursing Services"
                        },
                        {
                            "code": "MDID00000074",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000014",
                    "i18n": "Public Service \u0026 Non-profits",
                    "children": [
                        {
                            "code": "MDID00000075",
                            "i18n": "Government"
                        },
                        {
                            "code": "MDID00000076",
                            "i18n": "NGOs"
                        },
                        {
                            "code": "MDID00000390",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000015",
                    "i18n": "Agriculture",
                    "children": [
                        {
                            "code": "MDID00000077",
                            "i18n": "Forestry"
                        },
                        {
                            "code": "MDID00000391",
                            "i18n": "Crops"
                        },
                        {
                            "code": "MDID00000392",
                            "i18n": "Animals \u0026 Livestock"
                        },
                        {
                            "code": "MDID00000393",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000016",
                    "i18n": "Energy, Mining, Utilities \u0026 Waste",
                    "children": [
                        {
                            "code": "MDID00000040",
                            "i18n": "Oil \u0026 Gas"
                        },
                        {
                            "code": "MDID00000078",
                            "i18n": "Waste Treatment, Environmental Services \u0026 Recycling"
                        },
                        {
                            "code": "MDID00000079",
                            "i18n": "Minerals \u0026 Mining"
                        },
                        {
                            "code": "MDID00000394",
                            "i18n": "Water Treatment"
                        },
                        {
                            "code": "MDID00000395",
                            "i18n": "Electricity"
                        },
                        {
                            "code": "MDID00000396",
                            "i18n": "Others"
                        }
                    ]
                },
                {
                    "code": "MDID00000019",
                    "i18n": "Others",
                    "children": [
                        {
                            "code": "MDID00000081",
                            "i18n": "Others"
                        }
                    ]
                }
            ],
            "mobile_scene_id": "7207268665689899011",
            "no_cssvar_scene_id": "7207268987825029122",
            "passport_offline_config": {
                "need_offline": true,
                "offline_config": [
                    {
                        "accessKey": "3c2fec1517974f15d2acc29b8d9da298",
                        "channels": [
                            "passport",
                            "lark-global"
                        ],
                        "prefixes": [
                            "http(s?)://.*?lf16-oversea.goofy-cdn\\.com/obj/goofy-sg/ee/suite/",
                            "http(s?)://.*?larksuitecdn\\.com/obj/lark-static-sg/ee/suite/",
                            "http(s?)://.*?larksuitecdn\\.com/obj/goofy-sg/ee/suite/"
                        ]
                    }
                ]
            },
            "scene_id": "7207268439159734300",
            "sso_domains": [
                "sg.larksuite.com",
                "jp.larksuite.com",
                "larksuite.com",
                "feishu.cn",
                "sg.feishu.cn",
                "jp.feishu.cn",
                "larkenterprise.com"
            ],
            "sso_help_url": {
                "en_US": "https://www.larksuite.com/hc/en-US/articles/360048487935",
                "ja_JP": "https://www.larksuite.com/hc/ja-JP/articles/360048487935",
                "zh_CN": "https://www.larksuite.com/hc/zh-CN/articles/360044086233"
            },
            "staff_size_list": [
                {
                    "code": "MDES00000001",
                    "i18n": "1-50"
                },
                {
                    "code": "MDES00000025",
                    "i18n": "51-100"
                },
                {
                    "code": "MDES00000026",
                    "i18n": "101-250"
                },
                {
                    "code": "MDES00000027",
                    "i18n": "251-500"
                },
                {
                    "code": "MDES00000003",
                    "i18n": "501-999"
                },
                {
                    "code": "MDES00000004",
                    "i18n": "1000-4999"
                },
                {
                    "code": "MDES00000005",
                    "i18n": "5000-9999"
                },
                {
                    "code": "MDES00000006",
                    "i18n": "\u003e10000"
                }
            ],
            "static_urls": {
                "cdn_path": "https://sf16-scmcdn.larksuitecdn.com/obj/lark-static-sg/lark/suite/passport/uc/plugins/",
                "create_user": "create_team_1.0.0.263.js",
                "verify_user": "verify_user_1.0.0.263.js"
            },
            "supported_sso_domain_list": [
                "larksuite.com",
                "sg.larksuite.com",
                "jp.larksuite.com",
                "larkenterprise.com"
            ],
            "top_country_list": [
                "US",
                "JP",
                "SG"
            ]
        }
    }
}
