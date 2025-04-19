export const data = {
    "data": {
        "sample": {
            "sample_rate": 1,
            "include_users": [
                "a741b447-41f3-6167-0db0-52c537fe730d"
            ],
            "sample_granularity": "session",
            "rules": [
                {
                    "name": "js_error",
                    "enable": false,
                    "sample_rate": 0,
                    "conditional_sample_rules": []
                },
                {
                    "name": "http",
                    "enable": true,
                    "sample_rate": 0.001,
                    "conditional_sample_rules": []
                },
                {
                    "name": "performance",
                    "enable": true,
                    "sample_rate": 1,
                    "conditional_sample_rules": []
                },
                {
                    "name": "resource_error",
                    "enable": true,
                    "sample_rate": 1,
                    "conditional_sample_rules": []
                },
                {
                    "name": "resource",
                    "enable": true,
                    "sample_rate": 0.001,
                    "conditional_sample_rules": []
                },
                {
                    "name": "custom",
                    "enable": true,
                    "sample_rate": 0.001,
                    "conditional_sample_rules": [
                        {
                            "sample_rate": 1,
                            "filter": {
                                "type": "and",
                                "children": [
                                    {
                                        "type": "rule",
                                        "field": "payload.name",
                                        "op": "regex",
                                        "groupKey": "",
                                        "values": [
                                            "login_restriction"
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "sample_rate": 1,
                            "filter": {
                                "type": "and",
                                "children": [
                                    {
                                        "type": "rule",
                                        "field": "payload.name",
                                        "op": "regex",
                                        "groupKey": "",
                                        "values": [
                                            "dpop_protect_init"
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "sample_rate": 1,
                            "filter": {
                                "type": "and",
                                "children": [
                                    {
                                        "type": "rule",
                                        "field": "payload.name",
                                        "op": "regex",
                                        "groupKey": "",
                                        "values": [
                                            "dpop_protect_request"
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "sample_rate": 1,
                            "filter": {
                                "type": "and",
                                "children": [
                                    {
                                        "type": "rule",
                                        "field": "payload.name",
                                        "op": "regex",
                                        "groupKey": "",
                                        "values": [
                                            "dpop_protect_handshake"
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "sample_rate": 1,
                            "filter": {
                                "type": "and",
                                "children": [
                                    {
                                        "type": "rule",
                                        "field": "payload.name",
                                        "op": "regex",
                                        "groupKey": "",
                                        "values": [
                                            "dpop_protect_check_intercept_e"
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "sample_rate": 0.05,
                            "filter": {
                                "type": "and",
                                "children": [
                                    {
                                        "type": "rule",
                                        "field": "payload.name",
                                        "op": "regex",
                                        "groupKey": "",
                                        "values": [
                                            "dpop_protect_info"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "name": "performance_timing",
                    "enable": true,
                    "sample_rate": 1,
                    "conditional_sample_rules": []
                },
                {
                    "name": "performance_longtask",
                    "enable": true,
                    "sample_rate": 0.01,
                    "conditional_sample_rules": []
                },
                {
                    "name": "pageview",
                    "enable": true,
                    "sample_rate": 1,
                    "conditional_sample_rules": []
                },
                {
                    "name": "action",
                    "enable": true,
                    "sample_rate": 0.01,
                    "conditional_sample_rules": []
                },
                {
                    "name": "blank_screen",
                    "enable": true,
                    "sample_rate": 1,
                    "conditional_sample_rules": []
                }
            ]
        },
        "user_id": "c34d029a-9e39-57b2-e2ee-e41518276c62",
        "plugins": {
            "heatmap": {
                "open_list": [],
                "url": ""
            }
        },
        "quota_rate": 1,
        "timestamp": 1745035908238
    },
    "errmsg": "success",
    "errno": 200
}
