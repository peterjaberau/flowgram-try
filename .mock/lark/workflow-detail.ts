export const data = {
    "code": 0,
    "msg": "",
    "data": {
        "workflow": {
            "updateTime": "1745035734",
            "nodeSchema": {},
            "bizType": 2,
            "status": 0,
            "updateUID": "7494595721086156839",
            "extra": "{\"TableMap\":{\"ref_tblODS1fVBERqETZ\":{\"TableID\":\"tblODS1fVBERqETZ\",\"FieldMap\":{\"ref_tblODS1fVBERqETZ_fld07N7vvl\":\"fld07N7vvl\",\"ref_tblODS1fVBERqETZ_fldb01SHFj\":\"fldb01SHFj\",\"ref_tblODS1fVBERqETZ_fldcCwwI7M\":\"fldcCwwI7M\"}}},\"BlockMap\":{},\"BtnTrigger\":{\"TableID\":\"\",\"FieldID\":\"\"}}",
            "createUID": "7494595721086156839",
            "createTime": "1745035619",
            "source": 2001,
            "accessMode": 0,
            "workflowID": "7494868858538098719",
            "draft": "{\"steps\":[{\"id\":\"trig3IwS1xXL\",\"type\":\"AddRecordTrigger\",\"data\":{\"tableId\":\"ref_tblODS1fVBERqETZ\",\"watchedFieldId\":\"ref_tblODS1fVBERqETZ_fldb01SHFj\",\"triggerControlList\":[\"pasteUpdate\",\"automationBatchUpdate\",\"appendImport\",\"openAPIBatchUpdate\"]},\"stepTitle\":\"When a new record is added\",\"next\":[{\"ids\":[\"branchA4ZMHwIH\"]}]},{\"id\":\"branchA4ZMHwIH\",\"type\":\"IfElseBranch\",\"data\":{\"condition\":{\"leftValue\":{\"fields\":[{\"fieldId\":\"ref_tblODS1fVBERqETZ_fldcCwwI7M\",\"type\":1005}],\"id\":\"trig3IwS1xXL-tblODS1fVBERqETZ-fldcCwwI7M-24\",\"stepId\":\"trig3IwS1xXL\",\"stepNum\":1,\"stepType\":\"AddRecordTrigger\",\"tableId\":\"ref_tblODS1fVBERqETZ\",\"tagType\":\"step\",\"type\":\"ref\",\"value\":\"step\"},\"operator\":\"is\",\"rightValue\":[]},\"meetConditionStepId\":\"actqm2h1q97\",\"notMeetConditionStepId\":\"systemyeoHCfRn\"},\"stepTitle\":\"If/Else\",\"next\":[]},{\"id\":\"actqm2h1q97\",\"type\":\"HTTPClientAction\",\"data\":{\"method\":\"GET\",\"url\":[],\"responseType\":\"json\",\"responseValue\":\"{}\",\"rawBody\":[{\"text\":\"{}\",\"type\":\"text\"}]},\"stepTitle\":\"HTTP request\",\"next\":[{\"ids\":[\"act5gIGiTwF\"]}]},{\"id\":\"act5gIGiTwF\",\"type\":\"SetRecordAction\",\"data\":{\"tableId\":\"ref_tblODS1fVBERqETZ\",\"values\":[],\"recordType\":\"Ref\",\"recordInfo\":{\"stepId\":\"trig3IwS1xXL\",\"stepNum\":0}},\"stepTitle\":\"Update record\",\"next\":[{\"ids\":[\"actfTfZDHp5\"]}]},{\"id\":\"actfTfZDHp5\",\"type\":\"LarkMessageAction\",\"data\":{\"notifyIdentity\":\"mixed\",\"robotType\":\"baseApp\",\"persons\":[],\"groups\":[],\"title\":[],\"titleTemplateColor\":\"purple\",\"content\":[],\"btnList\":[],\"needBtn\":false,\"needTopBase\":false,\"needCompress\":true,\"senders\":[],\"senderType\":4},\"stepTitle\":\"Send a Lark message\",\"next\":[{\"ids\":[\"actmLo7hI31\"]}]},{\"id\":\"actmLo7hI31\",\"type\":\"LarkMessageAction\",\"data\":{\"notifyIdentity\":\"mixed\",\"robotType\":\"baseApp\",\"persons\":[],\"groups\":[],\"title\":[],\"titleTemplateColor\":\"purple\",\"content\":[],\"btnList\":[],\"needBtn\":false,\"needTopBase\":false,\"needCompress\":true,\"senders\":[],\"senderType\":4},\"stepTitle\":\"Send a Lark message\",\"next\":[]},{\"id\":\"systemyeoHCfRn\",\"type\":\"Loop\",\"data\":{\"loopType\":\"forEach\",\"loopData\":null,\"maxLoopTimes\":5,\"loopMode\":2,\"startChildStepId\":\"actANCFtWQX\"},\"stepTitle\":\"Loop\",\"next\":[{\"ids\":[]}]},{\"id\":\"actANCFtWQX\",\"type\":\"AddRecordAction\",\"data\":{\"tableId\":\"ref_tblODS1fVBERqETZ\",\"values\":[{\"fieldId\":\"ref_tblODS1fVBERqETZ_fld07N7vvl\",\"valueType\":\"value\",\"value\":null}]},\"stepTitle\":\"Add record\",\"next\":[]}]}"
        }
    }
}
