export const data = {
    "data": {
        "ttnet_dispatch_actions": [
            {
                "act_priority": 30000,
                "action": "dispatch",
                "param": {
                    "host_group": [
                        "*"
                    ],
                    "equal_group": [
                        "/ies/speed/"
                    ]
                },
                "rule_id": 66176,
                "service_name": "speed_skip",
                "set_req_priority": 50000,
                "sign": "7a8261963aac233055509a200477e850"
            },
            {
                "sign": "f6b48c9c3391f00b80f3e4fae6602e45",
                "act_priority": 30001,
                "action": "dispatch",
                "param": {
                    "host_group": [
                        "internal-api-drive-stream.larksuite.com",
                        "internal-api-space.larksuite.com",
                        "internal-api-lark-api.larksuite.com",
                        "internal-api.larksuite.com",
                        "internal-api-drive-stream-sg.larksuite.com",
                        "internal-api-space-sg.larksuite.com",
                        "internal-api-lark-api-sg.larksuite.com",
                        "internal-api-sg.larksuite.com",
                        "internal-api-drive-stream-jp.larksuite.com",
                        "internal-api-space-jp.larksuite.com",
                        "internal-api-lark-api-jp.larksuite.com",
                        "internal-api-jp.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "ccm_web_domain_gather",
                    "strategy_info": {
                        "internal-api-drive-stream-jp.larksuite.com": "api16-jpsaas-drive-jp.larksuite.com",
                        "internal-api-drive-stream-sg.larksuite.com": "api16-sgsaas1-drive-sg.larksuite.com",
                        "internal-api-jp.larksuite.com": "api16-jpsaas-mixed-jp.larksuite.com",
                        "internal-api-sg.larksuite.com": "api16-sgsaas1-mixed-sg.larksuite.com",
                        "internal-api-space-sg.larksuite.com": "api16-sgsaas1-docs-sg.larksuite.com",
                        "internal-api-drive-stream.larksuite.com": "api16-eeftva-drive.larksuite.com",
                        "internal-api-lark-api-jp.larksuite.com": "api16-jpsaas-gateway-jp.larksuite.com",
                        "internal-api-lark-api-sg.larksuite.com": "api16-sgsaas1-gateway-sg.larksuite.com",
                        "internal-api-lark-api.larksuite.com": "api16-eeftva-gateway.larksuite.com",
                        "internal-api-space-jp.larksuite.com": "api16-jpsaas-docs-jp.larksuite.com",
                        "internal-api-space.larksuite.com": "api16-eeftva-docs.larksuite.com",
                        "internal-api.larksuite.com": "api16-eeftva-mixed.larksuite.com"
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 1
                },
                "rule_id": 66181
            },
            {
                "sign": "80c32d4e6dc082859724a26f4ac7e313",
                "act_priority": 45011,
                "action": "dispatch",
                "param": {
                    "service_name": "lark_sg_docs_blackhouse",
                    "strategy_info": {
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-sgsaas1-docs-sg.larksuite.com",
                            "api22-sgsaas1-docs-sg.larksuite.com"
                        ],
                        "use_default_host": 1
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-sgsaas1-docs-sg.larksuite.com",
                        "api22-sgsaas1-docs-sg.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ]
                },
                "rule_id": 66184
            },
            {
                "action": "dispatch",
                "param": {
                    "host_group": [
                        "api16-jpsaas-docs-jp.larksuite.com",
                        "api22-jpsaas-docs-jp.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_jp_docs_blackhouse",
                    "strategy_info": {
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-jpsaas-docs-jp.larksuite.com",
                            "api22-jpsaas-docs-jp.larksuite.com"
                        ],
                        "use_default_host": 1
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3
                },
                "rule_id": 66185,
                "sign": "65cb0681434590a4cc5e9584eb956751",
                "act_priority": 45021
            },
            {
                "sign": "3459da98a8d4ed3fd2d461bb1513adab",
                "act_priority": 45023,
                "action": "dispatch",
                "param": {
                    "strategy_info": {
                        "use_default_host": 1,
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-jpsaas-drive-jp.larksuite.com",
                            "api22-jpsaas-drive-jp.larksuite.com"
                        ]
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-jpsaas-drive-jp.larksuite.com",
                        "api22-jpsaas-drive-jp.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_jp_drive_blackhouse"
                },
                "rule_id": 66189
            },
            {
                "act_priority": 45025,
                "action": "dispatch",
                "param": {
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-jpsaas-gateway-jp.larksuite.com",
                        "api22-jpsaas-gateway-jp.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_jp_gateway_blackhouse",
                    "strategy_info": {
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-jpsaas-gateway-jp.larksuite.com",
                            "api22-jpsaas-gateway-jp.larksuite.com"
                        ],
                        "use_default_host": 1,
                        "error_code": [
                            502,
                            503,
                            504
                        ]
                    }
                },
                "rule_id": 66190,
                "sign": "fa531ba475ec549384ffdd0d7da2aea5"
            },
            {
                "rule_id": 66191,
                "sign": "1df7b452451e6075abead6ee3c13e9b1",
                "act_priority": 45027,
                "action": "dispatch",
                "param": {
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_jp_mixed_blackhouse",
                    "strategy_info": {
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-jpsaas-mixed-jp.larksuite.com",
                            "api22-jpsaas-mixed-jp.larksuite.com"
                        ],
                        "use_default_host": 1
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-jpsaas-mixed-jp.larksuite.com",
                        "api22-jpsaas-mixed-jp.larksuite.com"
                    ]
                }
            },
            {
                "action": "dispatch",
                "param": {
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-sgsaas1-drive-sg.larksuite.com",
                        "api22-sgsaas1-drive-sg.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_sg_drive_blackhouse",
                    "strategy_info": {
                        "target_hosts": [
                            "api16-sgsaas1-drive-sg.larksuite.com",
                            "api22-sgsaas1-drive-sg.larksuite.com"
                        ],
                        "use_default_host": 1,
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2
                    },
                    "contain_group": [
                        "/"
                    ]
                },
                "rule_id": 66192,
                "sign": "52301a7afa504eebc00ca938988fd3bb",
                "act_priority": 45013
            },
            {
                "act_priority": 45015,
                "action": "dispatch",
                "param": {
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-sgsaas1-gateway-sg.larksuite.com",
                        "api22-sgsaas1-gateway-sg.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_sg_gateway_blackhouse",
                    "strategy_info": {
                        "target_hosts": [
                            "api16-sgsaas1-gateway-sg.larksuite.com",
                            "api22-sgsaas1-gateway-sg.larksuite.com"
                        ],
                        "use_default_host": 1,
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2
                    }
                },
                "rule_id": 66193,
                "sign": "b1e3a474298097d7f285fe5dfecd6600"
            },
            {
                "rule_id": 66194,
                "sign": "67ffe671641f49a9c56774b4ed949a3d",
                "act_priority": 45017,
                "action": "dispatch",
                "param": {
                    "host_group": [
                        "api16-sgsaas1-mixed-sg.larksuite.com",
                        "api22-sgsaas1-mixed-sg.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_sg_mixed_blackhouse",
                    "strategy_info": {
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-sgsaas1-mixed-sg.larksuite.com",
                            "api22-sgsaas1-mixed-sg.larksuite.com"
                        ],
                        "use_default_host": 1,
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3
                }
            },
            {
                "act_priority": 45003,
                "action": "dispatch",
                "param": {
                    "strategy_info": {
                        "target_hosts": [
                            "api16-eeftva-drive.larksuite.com",
                            "api22-eeftva-drive-quic.larksuite.com"
                        ],
                        "use_default_host": 1,
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-eeftva-drive.larksuite.com",
                        "api22-eeftva-drive-quic.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_us_drive_blackhouse"
                },
                "rule_id": 70107,
                "sign": "69e9ce84299c8978a80f5fba3a78b93a"
            },
            {
                "sign": "a802b61c210181a9bd65f7172b6a5185",
                "act_priority": 45005,
                "action": "dispatch",
                "param": {
                    "service_name": "lark_us_gateway_blackhouse",
                    "strategy_info": {
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-eeftva-gateway.larksuite.com",
                            "api22-eeftva-gateway-quic.larksuite.com"
                        ],
                        "use_default_host": 1,
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-eeftva-gateway.larksuite.com",
                        "api22-eeftva-gateway-quic.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ]
                },
                "rule_id": 70108
            },
            {
                "param": {
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-eeftva-mixed.larksuite.com",
                        "api22-eeftva-mixed-quic.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_us_mixed_blackhouse",
                    "strategy_info": {
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-eeftva-mixed.larksuite.com",
                            "api22-eeftva-mixed-quic.larksuite.com"
                        ],
                        "use_default_host": 1
                    }
                },
                "rule_id": 70109,
                "sign": "ce64268144ccff23c128fb3822d34a6a",
                "act_priority": 45007,
                "action": "dispatch"
            },
            {
                "act_priority": 45001,
                "action": "dispatch",
                "param": {
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "lark_us_docs_blackhouse",
                    "strategy_info": {
                        "error_code": [
                            502,
                            503,
                            504
                        ],
                        "forbid_duration": 300,
                        "forbid_threshold": 0.8,
                        "least_sample": 2,
                        "target_hosts": [
                            "api16-eeftva-docs.larksuite.com",
                            "api22-eeftva-docs-quic.larksuite.com"
                        ],
                        "use_default_host": 1
                    },
                    "contain_group": [
                        "/"
                    ],
                    "dispatch_strategy": 3,
                    "host_group": [
                        "api16-eeftva-docs.larksuite.com",
                        "api22-eeftva-docs-quic.larksuite.com"
                    ]
                },
                "rule_id": 70110,
                "sign": "550c5693b93a4d8d91bf0a274dab894a"
            },
            {
                "act_priority": 40005,
                "action": "dispatch",
                "param": {
                    "strategy_info": {
                        "candidates": [
                            {
                                "host": "api16-sgsaas1-drive-sg.larksuite.com",
                                "weight": 0
                            },
                            {
                                "host": "api22-sgsaas1-drive-sg.larksuite.com",
                                "weight": 0
                            }
                        ],
                        "scheme_option": 1,
                        "working_mode": 1
                    },
                    "dispatch_strategy": 5,
                    "host_group": [
                        "api16-sgsaas1-drive-sg.larksuite.com",
                        "api22-sgsaas1-drive-sg.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "Lark_sg_drive_select"
                },
                "rule_id": 208362,
                "sign": "a93741ee5da28d0132d48f7695ba3baa"
            },
            {
                "param": {
                    "dispatch_strategy": 5,
                    "host_group": [
                        "api16-sgsaas1-docs-sg.larksuite.com",
                        "api22-sgsaas1-docs-sg.larksuite.com"
                    ],
                    "referrer_group": [
                        ".*\\.larksuite\\.com/wiki",
                        ".*\\.larksuite\\.com/drive",
                        ".*\\.larksuite\\.com/slides",
                        ".*\\.larksuite\\.com/sheets",
                        ".*\\.larksuite\\.com/sheet",
                        ".*\\.larksuite\\.com/mindnote",
                        ".*\\.larksuite\\.com/file",
                        ".*\\.larksuite\\.com/docx",
                        ".*\\.larksuite\\.com/docs",
                        ".*\\.larksuite\\.com/bitable",
                        ".*\\.larksuite\\.com/base"
                    ],
                    "service_name": "Lark_sg_docs_select",
                    "strategy_info": {
                        "candidates": [
                            {
                                "host": "api16-sgsaas1-docs-sg.larksuite.com",
                                "weight": 0
                            },
                            {
                                "host": "api22-sgsaas1-docs-sg.larksuite.com",
                                "weight": 0
                            }
                        ],
                        "scheme_option": 1,
                        "working_mode": 1
                    }
                },
                "rule_id": 208364,
                "sign": "ce93d61e7f450a66f47a8e0d6d62cd24",
                "act_priority": 40007,
                "action": "dispatch"
            }
        ],
        "route_selection_trigger_interval": 7200,
        "tnc_update_interval": 3600,
        "chromium_open": 1,
        "ttnet_enable_cronet_request_report": 1,
        "ttnet_url_dispatcher_enabled": 1,
        "ttnet_dispatch_actions_epoch": -1753110914
    },
    "message": "success",
    "summary": "7640ce26d2f3a7fde91f38724918a6a6"
}
